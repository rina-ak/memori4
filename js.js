//анимация блоков 
window.addEventListener('load', () => {
    const blocks = Array.from(document.querySelectorAll('.animation_block div'));
  
    blocks.forEach(block => {
      block.style.position = 'relative';
      block.style.transition = 'transform 1s ease-in-out';
    });
  
    function scatterBlocks() {
      blocks.forEach(block => {
        const randX = (Math.random() * 8 - 4).toFixed(2);
        const randY = (Math.random() * 8 - 4).toFixed(2); 
        block.style.transform = `translate(${randX}vw, ${randY}vw)`;
      });
    }
  
    function assembleBlocks() {
      blocks.forEach(block => {
        block.style.transform = 'translate(0, 0)';
      });
    }
  
    function loopAnimation() {
      assembleBlocks();
      setTimeout(() => {
        scatterBlocks();
      }, 1200);
    }
  
    scatterBlocks();
    setTimeout(assembleBlocks, 300);
    setInterval(loopAnimation, 2500);
  });

//цикличное перелистывания карточек
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.click');
  if (!container) return;

  const layers = Array.from(container.children);
  const total = layers.length;
  layers.forEach((el, i) => {
    el.style.zIndex = total - i;
  });

  container.addEventListener('click', () => {
    layers.forEach(el => {
      let current = parseInt(el.style.zIndex, 10);
      let next = current - 1;
      if (next < 1) next = total;
      el.style.zIndex = next;
    });
  });
});

//приближение постеров
document.addEventListener("DOMContentLoaded", () => {
    const posters = document.querySelectorAll(".poster");
    const overlay = document.getElementById("overlay");
    const zoomedPoster = document.getElementById("zoomedPoster");

    posters.forEach(poster => {
      poster.addEventListener("click", () => {
        const bg = getComputedStyle(poster).backgroundImage;
        zoomedPoster.style.backgroundImage = bg;
        overlay.classList.add("active");
      });
    });

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  });

//всплывающее окно о том, что товар в корзине
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buy_button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
      });
    });
  });

// вернуть назад с 404
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('page-404');
    if (!body) return;
    body.addEventListener('click', () => {
      history.back();
    });
  });

// всплывающие окна
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closePopup');
  
    if (button && overlay && closeBtn) {
      button.addEventListener('click', () => {
        overlay.classList.add('active');
        overlay.style.display = 'flex';
      });
  
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
      });
  
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
          overlay.style.display = 'none';
        }
      });
    }
    const button2 = document.querySelector('.button_2');
    const overlay2 = document.getElementById('popupOverlay2');
    const closeBtn2 = document.getElementById('closePopup2');
  
    if (button2 && overlay2 && closeBtn2) {
      button2.addEventListener('click', () => {
        overlay2.style.display = 'flex';
      });
  
      closeBtn2.addEventListener('click', () => {
        overlay2.style.display = 'none';
      });
  
      overlay2.addEventListener('click', (e) => {
        if (e.target === overlay2) {
          overlay2.style.display = 'none';
        }
      });
    }
  });