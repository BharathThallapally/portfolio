const typingText=document.getElementById("typingText");
const text="Bharath Kumar";
let index=0,deleting=false;
function typeEffect(){
  if(!typingText)return;
  if(!deleting){typingText.textContent=text.substring(0,index+1);index++;
    if(index===text.length){deleting=true;setTimeout(typeEffect,1700);return}
    setTimeout(typeEffect,105);
  }else{typingText.textContent=text.substring(0,index-1);index--;
    if(index===0){deleting=false;setTimeout(typeEffect,450);return}
    setTimeout(typeEffect,65);
  }
}
typeEffect();
const menuToggle=document.getElementById("menuToggle"),navMenu=document.getElementById("navMenu");
menuToggle?.addEventListener("click",()=>{const open=navMenu.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
