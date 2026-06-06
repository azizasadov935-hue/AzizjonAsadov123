// Intersection Observer animatsiyalari

class AnimationController {
  constructor() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Barcha animatsion elementlarni kuzatish
    document.querySelectorAll(
      '.section, .project-card, .timeline-item, .info-card, .skill-item'
    ).forEach(el => {
      observer.observe(el);
    });
  }
}

new AnimationController();

// Sayni yuqoriga qaytarish tugmasi
class ScrollToTop {
  constructor() {
    this.button = this.createButton();
    this.init();
  }

  createButton() {
    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: var(--accent);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
      z-index: 999;
      font-size: 18px;
    `;
    document.body.appendChild(btn);
    return btn;
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
    this.button.addEventListener('click', () => this.scrollToTop());
  }

  handleScroll() {
    if (window.scrollY > 500) {
      this.button.style.opacity = '1';
      this.button.style.pointerEvents = 'auto';
    } else {
      this.button.style.opacity = '0';
      this.button.style.pointerEvents = 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

new ScrollToTop();
