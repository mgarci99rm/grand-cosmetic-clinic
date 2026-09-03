// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Email pop-up: show once per session, after a short delay
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
if (popupOverlay && closePopup) {
  const alreadyShown = sessionStorage.getItem('gcc_popup_shown');
  if (!alreadyShown) {
    setTimeout(() => {
      popupOverlay.classList.add('show');
      sessionStorage.setItem('gcc_popup_shown', '1');
    }, 8000);
  }
  closePopup.addEventListener('click', () => popupOverlay.classList.remove('show'));
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) popupOverlay.classList.remove('show');
  });
}
