
const lantern = document.querySelector('.lantern');

function shakeElement() {
  lantern.classList.add('shaking');
}

function stopShaking() {
  lantern.classList.remove('shaking');
}

setInterval(() => {
  shakeElement();
  setTimeout(stopShaking, 500);
}, 1500);

