document.addEventListener('DOMContentLoaded', function() {
    const elements = [
        document.getElementById('scrollable-row'), 
		document.getElementById('scrollable-row2'),
        document.getElementById('scrollable-tabs')
    ];

    function enableScroll(element) {
        let startX, scrollLeft, isDown = false;

        element.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
            element.classList.add('active');
        });

        element.addEventListener('mouseleave', () => {
            isDown = false;
            element.classList.remove('active');
        });

        element.addEventListener('mouseup', () => {
            isDown = false;
            element.classList.remove('active');
        });

        element.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - element.offsetLeft;
            const walk = (x - startX) * 2; // Скорость прокрутки
            element.scrollLeft = scrollLeft - walk;
        });

        element.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
        });

        element.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - element.offsetLeft;
            const walk = (x - startX) * 2; // Увеличение чувствительности к свайпу
            element.scrollLeft = scrollLeft - walk;
        });
    }

    function centerElement(element) {
        const elementRect = element.getBoundingClientRect();
        const parentRect = element.parentElement.getBoundingClientRect();
        const offset = (parentRect.width / 2) - (elementRect.width / 2);
        element.parentElement.scrollTo({
            left: element.offsetLeft - offset,
            behavior: 'smooth'
        });
    }

    elements.forEach(enableScroll);

    // Добавление кликабельности для scrollable-tabs
    const tabs = document.getElementById('scrollable-tabs');
    const tabLinks = tabs.querySelectorAll('a');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabLinks.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            centerElement(tab);
        });
    });
});
