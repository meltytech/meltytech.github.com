$(document).ready(function() {
    const widgets = [
        { symbol: "BTCUSD" },
        { symbol: "BINANCE:ETHUSD" },
        { symbol: "NASDAQ:AAPL" },
        { symbol: "NYSE:TSLA" },
        // Добавьте еще виджеты по мере необходимости
    ];
    const itemsPerPage = 2; // Количество виджетов на странице
    let currentPage = 1;

    function renderWidgets(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const grid = $('#widget-grid');
        grid.empty();
        widgets.slice(start, end).forEach((widget) => {
            const item = $(`
                <div class="s12 m6 l3">
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
                    {
                    "symbol": "${widget.symbol}",
                    "height": 220,
                    "locale": "en",
                    "dateRange": "1m",
                    "colorTheme": "dark",
                    "trendLineColor": "#37a6ef",
                    "underLineColor": "rgba(55, 166, 239, 0.15)",
                    "isTransparent": false,
                    "autosize": false,
                    "largeChartUrl": ""
                    }
                    </script>
                </div>
            `);
            grid.append(item);
        });
    }

    function updatePagination() {
        const totalPages = Math.ceil(widgets.length / itemsPerPage);
        const pageNumbers = $('#page-numbers');
        pageNumbers.empty();
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = $(`<button class="page-button">${i}</button>`);
            if (i === currentPage) {
                pageButton.addClass('active');
            }
            pageButton.on('click', function() {
                currentPage = i;
                renderWidgets(currentPage);
                updatePagination();
            });
            pageNumbers.append(pageButton);
        }

        $('#prev-page').prop('disabled', currentPage === 1);
        $('#next-page').prop('disabled', currentPage === totalPages);
    }

    $('#prev-page').on('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderWidgets(currentPage);
            updatePagination();
        }
    });

    $('#next-page').on('click', function() {
        const totalPages = Math.ceil(widgets.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderWidgets(currentPage);
            updatePagination();
        }
    });

    renderWidgets(currentPage);
    updatePagination();
});
