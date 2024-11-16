function createTradingViewWidget(containerId, symbol) {
    new TradingView.widget({
        "width": "100%",
        "height": "90%",
        "symbol": symbol,
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": 'dark',
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "calendar": false,
        "studies": [
            "BB@tv-basicstudies"
        ],
        "container_id": containerId
    });
}

$(document).ready(function() {
    createTradingViewWidget("BINANCE:XRPUSDT", "BINANCE:XRPUSDT");
    createTradingViewWidget("wiget_DOGEUSDT", "BINANCE:DOGEUSDT");
});
