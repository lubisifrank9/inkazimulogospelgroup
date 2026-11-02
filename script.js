
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});}
 const modal=document.getElementById("imageModal"),modalImg=modal?.querySelector("img"),close=modal?.querySelector("button");
 document.querySelectorAll("main img").forEach(img=>{img.addEventListener("click",()=>{if(!modal||!modalImg)return;modalImg.src=img.src;modalImg.alt=img.alt;modal.classList.add("open");});});
 const closeModal=()=>modal?.classList.remove("open");close?.addEventListener("click",closeModal);modal?.addEventListener("click",e=>{if(e.target===modal)closeModal();});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
 const popup=document.getElementById("homePopup");
 if(popup){
  const messages=[
   ["Want to listen to our music?","songs.html"],
   ["Our members are always welcoming.","members.html"],
   ["Want to see our tours?","tours.html"],
   ["Want to find out more about Inkazimulo?","faq.html"],
   ["Want to book us?","booking.html"]
  ];
  let index=0,timer;const msg=document.getElementById("popupMessage"),dots=document.getElementById("popupDots");
  const render=()=>{msg.innerHTML=`<a href="${messages[index][1]}">${messages[index][0]}</a>`;dots.innerHTML=messages.map((_,i)=>`<span class="${i===index?"active":""}"></span>`).join("");};
  const closeBtn=popup.querySelector(".popup-close");closeBtn?.addEventListener("click",()=>{popup.hidden=true;clearInterval(timer);});
  setTimeout(()=>{popup.hidden=false;render();timer=setInterval(()=>{index=(index+1)%messages.length;render();},11000);},4500);
 }
});
function toggleInformation(informationId,button){const information=document.getElementById(informationId);if(!information||!button)return;information.classList.toggle("show");button.textContent=information.classList.contains("show")?"Read Less":"Read More";}
