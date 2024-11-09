class NavBar extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <header class="main-header">
                <div class="main-header__row-socials">
                    <div class="row-socials__item" onclick="window.location.href='mailto:pa.laforcade@gmail.com'">
                        <img src="../assets/icons/icon_email.png" alt="Email" width="18" height="18">
                        <div>Email</div>
                    </div>
                    <div class="row-socials__item" onclick="window.location.href='https://www.linkedin.com/in/pa-laforcade/'">
                        <img src="../assets/icons/icon_linkedin.png" alt="LinkedIn" width="18" height="18">
                        <div>LinkedIn</div>
                    </div>
                    <div class="row-socials__item" onclick="window.location.href='https://github.com/palaforcade'">
                        <img src="../assets/icons/icon_github.png" alt="GitHub" width="18" height="18">
                        <div>GitHub</div>
                    </div>
                </div>
                <div class="main-header__name" onclick="window.location.href='../index.html'">Pierre-Amaury Laforcade</div>
                <div class="main-header__row-nav">
                    <div class="row-nav__item" onclick="window.location.href='/pages/resume.html'">Resume</div>
                    <div class="row-nav__item" onclick="window.location.href='/pages/projects.html'">Projects</div>
                </div>
            </header>            
    `
    }
}
customElements.define('main-navbar', NavBar);