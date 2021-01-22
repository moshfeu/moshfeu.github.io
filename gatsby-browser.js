import "./src/styles/global.scss"

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
matchMedia.addEventListener('change', e => setModeClass(e));
setModeClass(matchMedia)

function setModeClass({matches}) {
  document.body.classList.toggle("dark-mode", !!matches)
}
