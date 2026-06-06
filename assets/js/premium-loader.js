// Premium 3D Loader with WebGL-style effects

const loaderElement = document.getElementById('loader');
let loadProgress = 0;
const targetProgress = 100;
const animationDuration = 1500; // 1.5 seconds
const startTime = Date.now();

function animateLoader() {
  const elapsed = Date.now() - startTime;
  const progress = Math.min((elapsed / animationDuration) * 100, 100);
  
  if (progress < 100) {
    requestAnimationFrame(animateLoader);
  } else {
    // Fade out and hide loader
    loaderElement.style.opacity = '0';
    loaderElement.style.pointerEvents = 'none';
    setTimeout(() => {
      loaderElement.style.display = 'none';
    }, 500);
  }
}

// Start animation
if (loaderElement) {
  animateLoader();
  
  // Ensure loader hides after 2 seconds regardless
  setTimeout(() => {
    if (loaderElement) {
      loaderElement.style.opacity = '0';
      loaderElement.style.pointerEvents = 'none';
      setTimeout(() => {
        loaderElement.style.display = 'none';
      }, 500);
    }
  }, 2000);
}
