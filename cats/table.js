$(document).ready(function() {
    const websites = [
        { name: "Сайт 1", url: "https://example1.com", interval: 3600, text: "Произвольный текст 1" },
        { name: "Сайт 2", url: "https://example2.com", interval: 7200, text: "Произвольный текст 2" },
        { name: "Сайт 3", url: "https://example3.com", interval: 10800, text: "Произвольный текст 3" },
        // Добавьте еще сайты по мере необходимости
    ];

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function updateTable() {
        const tbody = $('#website-table tbody');
        tbody.empty();
        websites.forEach((site, index) => {
            const timerCookie = Cookies.get(`timer-${index}`);
            const timer = timerCookie ? parseInt(timerCookie) : 0;
            const row = $(`
                <tr data-index="${index}">
                    <td>${site.name}</td>
                    <td>${site.text}</td>
                    <td><button class="action">${timer > 0 ? formatTime(timer) : 'СТАРТ'}</button></td>
                </tr>
            `);
            tbody.append(row);
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
                updateTable();
            } else {
                Cookies.set(`timer-${index}`, endTime);
                $(`tr[data-index="${index}"] .action`).text(formatTime(remainingTime));
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

    $('#website-table').on('click', '.action', function() {
        const row = $(this).closest('tr');
        const index = row.data('index');
        const site = websites[index];
        if ($(this).text() === 'СТАРТ') {
            window.open(site.url, '_blank');
            startTimer(index, site.interval);
            updateTable();
        }
    });

    updateTable();
    resumeTimers();
});
