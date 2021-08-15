// Show Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    // Check if variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// Remove Menu When Clicked Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))

// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

// Show Scroll Top Button
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    // when the scroll is higher than 560 viewport height, add schow scroll class

    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)
