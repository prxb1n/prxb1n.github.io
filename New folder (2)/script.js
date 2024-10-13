// script.js
window.onload = function () {
    const container = document.querySelector('.container');
    const flowersContainer = document.querySelector('.flowers-container');
    const flowerCount = 30;
  
    // Show the main container with fade-in effect
    setTimeout(() => {
      container.style.opacity = 1;
    }, 500);
  
    // Generate floating flowers
    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.style.left = `${Math.random() * 100}vw`;
      flower.style.animationDuration = `${2 + Math.random() * 3}s`;
      flowersContainer.appendChild(flower);
    }
  };
  