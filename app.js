/* Lutan live background + subtle interaction */
const wall=document.createElement("div");
wall.className="live-wallpaper";
wall.innerHTML='<div class="orb one"></div><div class="orb two"></div><div class="orb three"></div>';
document.body.prepend(wall);

const line=document.createElement("div"); line.className="scroll-line"; document.body.appendChild(line);
const ticker=document.createElement("div"); ticker.className="market-ticker";
ticker.innerHTML='<span class="ticker-dot"></span><span>MARKET EDUCATION</span><b>XAUUSD <i class="gold">●</i></b><span class="up">● Demo-first learning</span><span>Risk management matters</span>';
document.body.appendChild(ticker);

window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;line.style.width=(h>0?(scrollY/h)*100:0)+"%"},{passive:true});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
 const el=document.querySelector(a.getAttribute("href"));
 if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});}
}));

/* gentle mouse parallax for the live wallpaper */
let mx=0,my=0,tx=0,ty=0;
window.addEventListener("pointermove",e=>{
 mx=(e.clientX/innerWidth-.5)*2; my=(e.clientY/innerHeight-.5)*2;
},{passive:true});
function animateParallax(){
 tx+=(mx-tx)*.025; ty+=(my-ty)*.025;
 document.querySelectorAll(".live-wallpaper .orb").forEach((o,i)=>{
   const s=(i+1)*10; o.style.transform=`translate(${tx*s}px,${ty*s}px)`;
 });
 requestAnimationFrame(animateParallax);
}
animateParallax();
