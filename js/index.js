const INTERVAL = 2900;
const elWorld = document.querySelector(".world");
const els = Array.from(elWorld.querySelectorAll("a"));
let i = 0;
(function f() {
  // Update world
  const el = els[i];
  const style = getComputedStyle(el);
  //https://vanseodesign.com/css/custom-properties-and-javascript/
  const x = style.getPropertyValue("--x");
  const y = style.getPropertyValue("--y");
  const z = style.getPropertyValue("--z");
  const angle = style.getPropertyValue("--a");
  
  const a = -parseFloat(angle);
  elWorld.style.transform = `rotate3d(${x},${y},${z},${a}deg)`;
  
  // Update items
  for (const [j, el] of els.entries()) {
    el.classList.toggle("focus", j == i);
  }
   
  i = (i+1) % els.length;
  setTimeout(f, INTERVAL);
}());