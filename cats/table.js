$(document).ready(function() {
    const websites = [
        { name: "Сайт 1", url: "https://example1.com", interval: 60 },
        { name: "Сайт 2", url: "https://example2.com", interval: 120 },
        { name: "Сайт 3", url: "https://example3.com", interval: 180 },
        // Добавьте еще сайты по мере необходимости
    ];

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
                    <td>${timer > 0 ? formatTime(timer) : '-'}</td>
                    <td><button class="action">${timer > 0 ? formatTime(timer) : 'СТАРТ'}</button></td>
                </tr>
            `);
            tbody.append(row);
        });
    }

    function startTimer(index, interval) {
        Cookies.set(`timer-${index}`, interval);
        const timerId = setInterval(() => {
            let timer = parseInt(Cookies.get(`timer-${index}`));
            timer -= 1;
            if (timer <= 0) {
                clearInterval(timerId);
                Cookies.remove(`timer-${index}`);
                updateTable();
            } else {
                Cookies.set(`timer-${index}`, timer);
                $(`tr[data-index="${index}"] .action`).text(formatTime(timer));
            }
        }, 1000);
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
});
