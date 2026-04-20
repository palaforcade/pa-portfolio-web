class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="main-header">
                <div class="main-header__row-socials">
                    <div class="row-socials__item" onclick="window.location.href='mailto:pa.laforcade@gmail.com'">
                        <img src="/assets/icons/icon_email.png" alt="">
                        <span>Email</span>
                    </div>
                    <div class="row-socials__item" onclick="window.location.href='https://www.linkedin.com/in/pa-laforcade/'">
                        <img src="/assets/icons/icon_linkedin.png" alt="">
                        <span>LinkedIn</span>
                    </div>
                    <div class="row-socials__item" onclick="window.location.href='https://github.com/palaforcade'">
                        <img src="/assets/icons/icon_github.png" alt="">
                        <span>GitHub</span>
                    </div>
                </div>
                <div class="main-header__name" onclick="window.location.href='/index.html'">Pierre-Amaury Laforcade</div>
                <div class="main-header__menu-toggle" onclick="toggleMenu()" aria-label="Toggle menu">☰</div>
                <nav class="main-header__row-nav" id="nav-menu">
                    <div class="row-nav__item row-nav__item--mobile-only" onclick="window.location.href='/index.html'">Home</div>
                    <div class="row-nav__item" onclick="window.location.href='/pages/resume.html'">Resume</div>
                    <div class="row-nav__item" onclick="window.location.href='/pages/projects.html'">Projects</div>
                    <div class="row-socials__item" onclick="window.location.href='mailto:pa.laforcade@gmail.com'">
                        <img src="/assets/icons/icon_email.png" alt="">
                        <span>Email</span>
                    </div>
                    <div class="row-socials__item" onclick="window.location.href='https://www.linkedin.com/in/pa-laforcade/'">
                        <img src="/assets/icons/icon_linkedin.png" alt="">
                        <span>LinkedIn</span>
                    </div>
                    <div class="row-socials__item" onclick="window.location.href='https://github.com/palaforcade'">
                        <img src="/assets/icons/icon_github.png" alt="">
                        <span>GitHub</span>
                    </div>
                </nav>
            </header>
        `;
    }
}
customElements.define('main-navbar', NavBar);

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.main-header__menu-toggle');
    if (!navMenu) return;
    const open = navMenu.classList.toggle('open');
    if (toggle) toggle.textContent = open ? '×' : '☰';
}

document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.main-header__menu-toggle');
    if (!navMenu || !navMenu.classList.contains('open')) return;
    if (e.target.closest('#nav-menu') || e.target.closest('.main-header__menu-toggle')) return;
    navMenu.classList.remove('open');
    if (toggle) toggle.textContent = '☰';
});
