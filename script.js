document.addEventListener('DOMContentLoaded', () => {
  const sponsors = document.getElementById('sponsors');
  const body = document.body;

  if (sponsors) {
    sponsors.addEventListener('click', () => {
      body.classList.toggle('show-sponsors');
    });
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
      const isExpanded = menuToggle.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', String(isExpanded));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const header = document.getElementById('active');
  if (header) {
    const btns = header.getElementsByClassName('btn');
    Array.from(btns).forEach((btn) => {
      btn.addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        if (current[0]) {
          current[0].className = current[0].className.replace('active', '').trim();
        }
      });
    });
  }
});

