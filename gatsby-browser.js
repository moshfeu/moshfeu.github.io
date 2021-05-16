import "./src/styles/global.scss"

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
matchMedia.addEventListener('change', e => setModeClass(e));
setModeClass(matchMedia)

function setModeClass({matches}) {
  document.body.classList.toggle("dark-mode", !!matches)
}


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/60a0f1cbb1d5182476b94c35/1f5qb1153';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();