const header = document.querySelector('header');
const topSection = document.querySelector('.top-section');
window.addEventListener('scroll', handleNavTop)

function handleNavTop (e) {
  console.dir( topSection.offsetHeight )
  header.classList.toggle('nav-top', window.scrollY >= topSection.offsetHeight)
}
/*  */

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => link.addEventListener('click', handleNavLink))

function handleNavLink (e) {
    const isActive = document.querySelector('.navbar-active');
    if (isActive) toggleNavMenu();
}

/*  */

const allEvents = ['mouseup', 'keyup', 'resize'];
allEvents.forEach(listener => window.addEventListener(listener, handleNavEvents))

function toggleNavMenu () {
    const menuBtn = document.querySelector('.menu-btn i');
    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-times');
    
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('navbar-active');
    document.body.classList.toggle('lock');
}

function handleNavEvents (e) {
    e.preventDefault()
    const navBar = document.querySelector('.navbar');
    const isActive = navBar.classList.contains('navbar-active');
    const notOpen = document.querySelector('.fa-bars') === e.target;
    const isClickedOutside = e.target !== window && !navBar.contains(e.target);
    const [ESCAPE, DESKTOP] = [27, 650];

    if (e.type === 'mouseup' && notOpen && !isActive) return toggleNavMenu();
    if (!isActive) return;
    if (e.type === 'mouseup' && isClickedOutside) return toggleNavMenu();
    if (e.type === 'keyup' && e.keyCode === ESCAPE) return toggleNavMenu();
    if (e.type === 'resize' && window.innerWidth >= DESKTOP) return toggleNavMenu();
}