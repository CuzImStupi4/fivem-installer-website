document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor', 'expanded');
  document.body.appendChild(cursor);

  let cursorX = 0;
  let cursorY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.pageX;
    targetY = e.pageY;
  });

  function animateCursor() {
    cursorX += (targetX - cursorX) * 0.15;
    cursorY += (targetY - cursorY) * 0.15;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.addEventListener('mousedown', () => {
    cursor.classList.add('clicked');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicked');
  });
  //TODO: fix the selection mouse cursor!


  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('div, a, button')) {
      cursor.classList.add('contracted');
    } else {
      cursor.classList.remove('contracted');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('div, a, button')) {
      cursor.classList.remove('contracted');
    }
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('h1, a, h2, p')) {
      cursor.classList.add('text-pointer');
    } else {
      cursor.classList.remove('text-pointer');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('h1, a, h2, p')) {
      cursor.classList.remove('text-pointer');
    }
  });
});


document.addEventListener(
  "wheel",
  function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=")) {
    e.preventDefault();
  }
});