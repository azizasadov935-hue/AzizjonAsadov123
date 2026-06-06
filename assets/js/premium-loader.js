// Premium realistik loader animatsiyasi

class PremiumLoader {
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
    // Realistic progress
    const stages = [
      { duration: 800, target: 15 },  // AI Systems
      { duration: 600, target: 35 },  // Database
      { duration: 700, target: 60 },  // API Services
      { duration: 500, target: 85 },  // Automation
      { duration: 400, target: 100 }  // Media Engine
    ];

    let currentStage = 0;

    const advanceStage = () => {
      if (currentStage >= stages.length) return;

      const stage = stages[currentStage];
      const startTime = Date.now();
      const startProgress = this.progress;
      const targetProgress = stage.target;

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed / stage.duration) * (targetProgress - startProgress) + startProgress;

        if (progress >= targetProgress) {
          this.progress = targetProgress;
          this.update();
          clearInterval(interval);
          currentStage++;
          setTimeout(advanceStage, 200);
        } else {
          this.progress = progress;
          this.update();
        }
      }, 30);
    };

    advanceStage();
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
        this.loader.style.animation = 'fadeOutLoader 0.8s ease-out forwards';
        setTimeout(() => {
          this.loader.style.display = 'none';
        }, 800);
      }
    }, 500);
  }
}

// Loader ishni boshlash
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PremiumLoader();
  });
} else {
  new PremiumLoader();
}

// CSS qo'shish
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOutLoader {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
document.head.appendChild(style);
