// Header scroll effekti va mobile menu

class Header {
  constructor() {
    this.header = document.querySelector('.header');
    this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }

  init() {
    // Scroll effekti
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Mobile menu
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    
    // Nav linklar
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  toggleMobileMenu() {
    this.navbar.classList.toggle('mobile-active');
  }

  closeMobileMenu() {
    this.navbar.classList.remove('mobile-active');
  }
}

new Header();
