document.addEventListener('DOMContentLoaded', () => {
  initTooltip();
});

function initTooltip() {
  const tooltipElems = document.querySelectorAll('.tooltip-container');
  const windowHeight = window.innerHeight;
  tooltipElems.forEach(elem => {
    const top = elem.getBoundingClientRect().top;
    if(top < windowHeight / 2) {
      elem.classList.add('tooltip--bottom');
    } else {
      elem.classList.add('tooltip--top');
    }
  })
}