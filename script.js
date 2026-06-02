const button = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (button && links) {
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
