const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip";




const initTimer = () => {
    if (downloadBtn.classList.contains("disable-timer")) {
        return (location.href = fileLink);
    };
    let timer = downloadBtn.dataset.timer;

    downloadBtn.classList.add("timer");

    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;


    const initCounter = setInterval(() => {
        if (timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent = "Your file is downloading...";

        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `
          
           <i class="fa-solid fa-download icon"></i>
           <span class="text">Download Again</span>


         `
        }, 3000)

    }, 1000);

}

downloadBtn.addEventListener("click", initTimer);