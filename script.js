const downloadBtn = document.querySelector(".download-btn");

const fileLink = "https://drive.google.com/file/d/1LDRlyZaZTF-bxHjBDEiL2obMxYHtf3YT/view?usp=sharing";

const initTimer=()=>{
 let timer=downloadBtn.dataset.timer;

 downloadBtn.classList.add("timer");
 
 downloadBtn.innerHTML=`Your file will download in <b>${timer}</b> seconds`;
}

downloadBtn.addEventListener("click",initTimer);