document.addEventListener('DOMContentLoaded', () => {
    const tabsData = {
        tap1: {
            title: "",
            sections: [
                {
                    subtitle: "Telegram Wallet",
                    sites: [
                        { name: "Telegram Wallet", img: "img/wallet.jpg", link: "https://t.me/wallet" },
                        { name: "Bitget Wallet Lite", img: "img/BitgetWalletLite.jpg", link: "https://t.me/BitgetWallet_TGBot" },
                        { name: "OKX Wallet", img: "img/OKX_WALLET_BOT.jpg", link: "https://t.me/OKX_WALLET_BOT" }
                    ]
                },
                {
                    subtitle: "Android Wallet",
                    sites: [
                        { name: "Site Name 7", img: "img/0.png", link: "https://example.com" },
                        { name: "Site Name 8", img: "img/0.png", link: "https://example.com" },
						{ name: "Site Name 8", img: "img/0.png", link: "https://example.com" },
						{ name: "Site Name 8", img: "img/0.png", link: "https://example.com" },
						{ name: "Site Name 8", img: "img/0.png", link: "https://example.com" },
                        { name: "", img: "img/0.png", link: "" }
                    ]
                }
            ]
        },
        tap2: {
            title: "Games",
            sections: [
                {
                    subtitle: "Список игр",
                    sites: [
                        { name: "Game Site 1", img: "assets/img/game.jpg", link: "https://example.com" },
                        { name: "Game Site 2", img: "assets/img/game.jpg", link: "https://example.com" },
                        { name: "Game Site 3", img: "assets/img/game.jpg", link: "https://example.com" }
                    ]
                }
            ]
        },
        tap3: {
            title: "Media",
            sections: [
                {
                    subtitle: "Медиа сайты",
                    sites: [
                        { name: "Media Site 1", img: "assets/img/media.jpg", link: "https://example.com" },
                        { name: "Media Site 2", img: "assets/img/media.jpg", link: "https://example.com" }
                    ]
                }
            ]
        },
        // Добавьте данные для остальных табов...
    };

    const mainElement = document.querySelector('main.responsive');

    for (const [tabId, tabData] of Object.entries(tabsData)) {
        const pageElement = document.createElement('div');
        pageElement.id = tabId;
        pageElement.classList.add('page', 'left', 'padding');
        if (tabId === 'tap1') pageElement.classList.add('active');

        const header = document.createElement('h5');
        header.textContent = tabData.title;
        pageElement.appendChild(header);

        tabData.sections.forEach(section => {
            const space = document.createElement('div');
            space.classList.add('space');
            pageElement.appendChild(space);

            if (section.subtitle) {
                const subheader = document.createElement('h5');
                subheader.classList.add('subtitle');
                subheader.textContent = section.subtitle;
                pageElement.appendChild(subheader);
            }

            const sitelist = document.createElement('div');
            sitelist.classList.add('sitelist');

            section.sites.forEach(site => {
                const blocksite = document.createElement('div');
                blocksite.classList.add('blocksite');

                const link = document.createElement('a');
                link.href = site.link; // Ссылка на сайт

                const img = document.createElement('img');
                img.classList.add('circle', 'extra');
                img.src = site.img;
                img.alt = 'Site Image';
                link.appendChild(img);

                blocksite.appendChild(link);

                const text = document.createElement('div');
                text.classList.add('textsite');
                text.textContent = site.name;

                blocksite.appendChild(text);
                sitelist.appendChild(blocksite);
            });

            pageElement.appendChild(sitelist);
        });

        mainElement.appendChild(pageElement);
    }
});
