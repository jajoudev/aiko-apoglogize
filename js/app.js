const $intro=document.querySelector(".intro"),$main=document.querySelector("main"),$buttonHeart=document.querySelector("#heart-button"),$apologize=document.querySelector(".apologize-container"),container=document.getElementById("flowers-containers"),animations=["animate-fall","animate-fall-slow","animate-fall-slower"],colors=["text-pink-200","text-pink-300","text-pink-400"],opacities=["opacity-50","opacity-60","opacity-70","opacity-75"],music=document.getElementById("background-music"),button=document.getElementById("heart-button");for(let i=0;i<40;i++){let t=document.createElement("div"),e=document.createElement("div");t.textContent="\uD83C\uDF38",e.textContent="❤️",t.className=`
    absolute
    w-6 h-6
    ${animations[Math.floor(Math.random()*animations.length)]}
    ${colors[Math.floor(Math.random()*colors.length)]}
    ${opacities[Math.floor(Math.random()*opacities.length)]}
  `.trim(),e.className=`
    absolute
    w-6 h-6
    ${animations[Math.floor(Math.random()*animations.length)]}
    ${colors[Math.floor(Math.random()*colors.length)]}
    ${opacities[Math.floor(Math.random()*opacities.length)]}
  `.trim(),e.style.left=100*Math.random()+"vw",e.style.top=-100*Math.random()+"vh",t.style.left=100*Math.random()+"vw",t.style.top=-100*Math.random()+"vh",container.appendChild(t),container.appendChild(e)}$buttonHeart.addEventListener("click",()=>{music.muted=!1,music.volume=.5,music.play(),$buttonHeart.style.position="relative",$buttonHeart.style.zIndex="20";let t=document.createElement("div");t.classList.add("loader"),$buttonHeart.appendChild(t),setTimeout(()=>{t.remove();for(let e=0;e<60;e++){let o=document.createElement("div");o.textContent="❤️",o.className="heart-explode";let a=$buttonHeart.getBoundingClientRect();o.style.left=a.left+a.width/2+"px",o.style.top=a.top+a.height/2+"px";let n=(Math.random()-.5)*300+"px",l=(Math.random()-.5)*600+"px";o.style.setProperty("--x",n),o.style.setProperty("--y",l),document.body.appendChild(o),setTimeout(()=>o.remove(),7500)}$buttonHeart.style.transition="opacity 1s ease",$buttonHeart.style.opacity="0",setTimeout(()=>{$buttonHeart.remove(),$intro.classList.add("opacity-0"),$intro.classList.add("hidden"),$apologize.classList.remove("hidden"),$apologize.style.opacity="0",$apologize.style.transition="opacity 1s ease",setTimeout(()=>{$apologize.style.opacity="1"},50)},1e3)},2e3)});