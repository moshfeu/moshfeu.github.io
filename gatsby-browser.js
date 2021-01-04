import "./src/styles/global.scss"

const meatchMedia = window.matchMedia("(prefers-color-scheme: dark)");
meatchMedia.addEventListener('change', e => setModeClass(e));
setModeClass(meatchMedia.matches)

function setModeClass({matches}) {
  document.body.classList.toggle("dark-mode", matches)
}
