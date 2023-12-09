
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".mp-btn");

yesbtn.addEventListener("click", () => {
    question.innerHTML="Aaaaa. I Like You too";
    gif.src=
    "https://raw.gifthubusercontent.com/DrezelDeveloper/img/main/gif.webp";

});
nobtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingCLientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight- noBtnRect.height;
    
    const randomX = Math.floor(Math.random () * maxX);
    const randomY = Math.floor(Math.random () * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.stle.top = randomY + "px";
    

})