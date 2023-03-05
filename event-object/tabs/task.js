
let tabs = function () {
    let tab = Array.from(document.querySelectorAll('.tab'));
    let tabContent = document.querySelectorAll('.tab__content');
    let tabIndex;

    tab.forEach(item => {
        item.addEventListener('click', selectTab);
    })

    function selectTab() {
        tab.forEach((item, index) => {
            item.classList.remove('tab_active');
            tabIndex = index
        })
        this.classList.add('tab_active')

        tabContent.forEach(value => {
            value.classList.remove('tab__content_active')
        })
        tabContent[tabIndex].classList.add('tab__content_active')
    }
}

tabs()