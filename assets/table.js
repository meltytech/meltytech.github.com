$(document).ready(function() {
    const websites = [
        { name: "Tapswap", url: "https://t.me/tapswap_mirror_2_bot?start=r_546126984", interval: 21600, text: "22 листопада", logo: "assets/logo/tapswap.jpg" },
        { name: "Wcoin", url: "https://t.me/wcoin_tapbot?start=NTQ2MTI2OTg0", interval: 28800, text: "5 грудня", logo: "https://cdn.discordapp.com/attachments/354880174652653568/1306567359267606548/wcoin.jpg?ex=6737232d&is=6735d1ad&hm=cc5c85245e284a68dea1433b4637f6558800bf05df6a76dcbd3d0cb28b38effa&" },
        { name: "Blum", url: "https://t.me/BlumCryptoBot/app?startapp=ref_WH3EqllN7e", interval: 28800, text: "дуже скоро", logo: "https://media.discordapp.net/attachments/354880174652653568/1306566675893850152/blum.jpg?ex=6737228a&is=6735d10a&hm=1a8f10ad24e9e376c10ca8a4f83f06731ef67c3223ae06105fd8ee90bfddf913" },
        { name: "NotPixel", url: "https://t.me/notpixel/app?startapp=f546126984", interval: 7200, text: "листопад", logo: "https://media.discordapp.net/attachments/354880174652653568/1306586289100947487/pixel.jpg?ex=673734ce&is=6735e34e&hm=e87f79f4996e0cf03f445bd840aee603a4b501e8990663c1f2623a571f33b77c&=&format=webp" },
		
		
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
