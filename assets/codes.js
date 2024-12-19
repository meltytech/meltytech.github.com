$(document).ready(function() {
    const websites = [
        { name: "Tapswap", url: "#page1", logo: "assets/img/tapswap.jpg" },
     //   { name: "Blum", url: "#page2", logo: "assets/img/blum.jpg" },
     //   { name: "NotPixel", url: "#page3", logo: "assets/img/pixel.jpg" },
       

		
        // Добавьте еще сайты по мере необходимости
    ];



    function updateGrid() {
        const grid = $('#website-grid');
        grid.empty();
        websites.forEach((site, index) => {                    
            const item = $(`
                <div class="s6 m4 l3">
                    <a class="row padding surface-container wave" data-ui=${site.url}>
                        <img class="round" src="${site.logo}" alt="Logo">
                        <div class="max">
                            <h6 class="small">${site.name}</h6>
                            
                        </div>

                    </a>
                </div>
            `);
            grid.append(item);
        });
    }







    updateGrid();
    resumeTimers();
});
