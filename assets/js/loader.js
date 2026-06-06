// Loader animatsiyasi va progress

class ProgressLoader {
  constructor() {
    this.loader = document.getElementById('loader');
    this.progressFill = document.querySelector('.progress-fill');
    this.progressText = document.querySelector('.progress-text');
    this.progress = 0;
    this.init();
  }

  init() {
    // Sahifa yuklanganda
    window.addEventListener('load', () => this.complete());
    
    // Boshlang'ich progress
    this.simulate();
  }

  simulate() {
    // Random progress
    const interval = setInterval(() => {
      if (this.progress < 90) {
        this.progress += Math.random() * 30;
        this.update();
      } else {
        clearInterval(interval);
      }
    }, 300);
  }

  update() {
    this.progress = Math.min(this.progress, 99);
    const percent = Math.floor(this.progress);
    
    if (this.progressFill) {
      this.progressFill.style.width = percent + '%';
    }
    
    if (this.progressText) {
      this.progressText.textContent = percent + '%';
    }
  }

  complete() {
    this.progress = 100;
    this.update();
    
    setTimeout(() => {
      if (this.loader) {
        this.loader.classList.add('hidden');
      }
    }, 600);
  }
}

// Loader ishni boshlash
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProgressLoader();
  });
} else {
  new ProgressLoader();
}
