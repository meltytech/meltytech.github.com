$(document).ready(function() {
    const websites = [
        { name: "Tapswap", url: "https://t.me/tapswap_mirror_2_bot?start=r_546126984", interval: 32400, text: "22 листопада", logo: "assets/logo/tapswap.jpg" },
        { name: "Сайт 2", url: "https://example2.com", interval: 7200, text: "Произвольный текст 2", logo: "assets/logo2.png" },
        { name: "Сайт 3", url: "https://example3.com", interval: 10800, text: "Произвольный текст 3", logo: "assets/logo3.png" },
        // Добавьте еще сайты по мере необходимости
    ];

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function updateGrid() {
        const grid = $('#website-grid');
        grid.empty();
        websites.forEach((site, index) => {
            const timerCookie = Cookies.get(`timer-${index}`);
            const timer = timerCookie ? parseInt(timerCookie) : 0;
            const item = $(`
                <div class="s12 m12 l6">
                    <div class="row padding surface-container">
                        <img class="round" src="${site.logo}" alt="Logo">
                        <div class="max">
                            <h6 class="small">${site.name}</h6>
                            
                        </div>
                        <nav class="right-align">
                            <div>${site.text}</div> <button class="action" data-index="${index}">${timer > 0 ? formatTime(timer) : 'СТАРТ'}</button>
                        </nav>
                    </div>
                </div>
            `);
            grid.append(item);
        });
    }

    function startTimer(index, interval) {
        const endTime = Date.now() + interval * 1000;
        Cookies.set(`timer-${index}`, endTime);
        const timerId = setInterval(() => {
            const remainingTime = parseInt((endTime - Date.now()) / 1000);
            if (remainingTime <= 0) {
                clearInterval(timerId);
                Cookies.remove(`timer-${index}`);
                updateGrid();
            } else {
                Cookies.set(`timer-${index}`, endTime);
                $(`button[data-index="${index}"]`).text(formatTime(remainingTime));
            }
        }, 1000);
    }

    function resumeTimers() {
        websites.forEach((site, index) => {
            const timerCookie = Cookies.get(`timer-${index}`);
            if (timerCookie) {
                const remainingTime = parseInt((timerCookie - Date.now()) / 1000);
                if (remainingTime > 0) {
                    startTimer(index, remainingTime);
                } else {
                    Cookies.remove(`timer-${index}`);
                }
            }
        });
    }

    $('#website-grid').on('click', '.action', function() {
        const index = $(this).data('index');
        const site = websites[index];
        if ($(this).text() === 'СТАРТ') {
            window.open(site.url, '_blank');
            startTimer(index, site.interval);
            updateGrid();
        }
    });

    updateGrid();
    resumeTimers();
});
