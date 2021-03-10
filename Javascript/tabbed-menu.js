// ln 542 <section> ?
const tabMenu = document.querySelector('.the-tab-menu');
const tabItems = document.querySelectorAll('.tab-item');

window.addEventListener('scroll', (e) => {
    const tabInactive = document.querySelector('.tab-active');
    if (tabInactive) tabInactive.classList.remove('tab-active');

    const offsetSection = tabMenu.offsetHeight + 150;
    const winTopPos = window.scrollY + offsetSection;
    tabItems.forEach(item => {
        const section = document.querySelector(item.hash);
        (
            section.offsetTop <= winTopPos &&
            section.offsetTop + section.offsetHeight > winTopPos
        ) 
        ? item.classList.add('tab-active')
        : item.classList.remove('tab-active');
    })
})

tabItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        
        const section = e.currentTarget.hash;
        const targetPosition = document.querySelector(section).offsetTop;
        const offsetSection = tabMenu.offsetHeight + 150;
        const distance = targetPosition - offsetSection; 
        
        scrollTo(0,distance)
    })
})