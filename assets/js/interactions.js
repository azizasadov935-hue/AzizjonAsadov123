// Interaktiv effektlar va hover animatsiyalari

class Interactions {
  constructor() {
    this.setupCardInteractions();
    this.setupButtonInteractions();
    this.setupParallaxEffect();
  }

  setupCardInteractions() {
    const cards = document.querySelectorAll(
      '.project-card, .info-card, .timeline-content, .skill-item'
    );

    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--accent)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border)';
      });
    });
  }

  setupButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.btn-icon');
        if (icon) {
          icon.style.transform = 'translateX(4px)';
        }
      });

      btn.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.btn-icon');
        if (icon) {
          icon.style.transform = 'translateX(0)';
        }
      });
    });
  }

  setupParallaxEffect() {
    const avatarContainer = document.querySelector('.avatar-container');
    if (!avatarContainer) return;

    document.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;

      avatarContainer.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

new Interactions();

// Smooth scroll anchor links
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

new SmoothScroll();

// Counter animatsiyalari
class Counter {
  constructor() {
    this.setupCounters();
  }

  setupCounters() {
    const counters = document.querySelectorAll('.stat h3');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach(counter => observer.observe(counter));
  }

  animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const hasPlus = element.textContent.includes('+');
    let current = 0;
    const step = Math.ceil(target / 40);

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      element.textContent = current + (hasPlus ? '+' : '');
    }, 30);
  }
}

new Counter();
