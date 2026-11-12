let desc=document.querySelector("#description");
let moon = document.querySelector(".fa-moon");
let body=document.querySelector("body");
let sideBar=document.querySelector(".nav");
let hero=document.querySelector("#hero");
let para=document.querySelector(".quote-para");
let btn=document.querySelector("button");
let cardBack =document.querySelector(".card-back");
let cardFront=document.querySelector(".card-front");
let card = document.querySelector(".card");
let button=document.querySelectorAll(".overlay button");
let modalContainer=document.querySelector(".modal-container");
let modalImg=document.querySelector(".modal-img");
let modalSymbol=document.querySelector(".modal-symbol");
let intro=document.querySelector("#intro");
let backTopBtn=document.querySelector("#backToTop");

// let logo2="GAURANSHI";
let words=["FULL STACK DEVELOPER","SOFTWARE ENGINEER","PROBLEM SOLVER"];
let wordIndex=0;
let charIndex=0;
let isDelete=false;
let tourStarted=false;
let current=null;
let target = document.documentElement.scrollHeight - window.innerHeight;
let speed=0.5;
let animationId = null;
let tourDisabled=false;
function startTour(){
    if(tourStarted===false){
        return;
    }
    if(tourStarted===true){
    let progress = current/target;
    if(progress<0.15){
        speed=0.5+(1*(progress/0.15));
    }
    else if(progress<0.85){
        speed=0.5+(1*(0.35/0.85));
    }
    else{
        speed=1;
    }
    current+=speed;
    window.scrollTo(0,current);
    if(current<target){
        animationId = requestAnimationFrame(startTour);
    }
}
}
window.addEventListener("wheel",()=>{
    if(tourStarted===true){
        tourDisabled=true;
        tourStarted=false;
        cancelAnimationFrame(animationId);
    }
})
window.addEventListener("click",()=>{
    if(tourStarted===true){
        tourDisabled=true;
        tourStarted=false;
        cancelAnimationFrame(animationId);
    }
})
window.addEventListener("keydown",()=>{
    if(tourStarted===true){
        tourDisabled=true;
        tourStarted=false;
        cancelAnimationFrame(animationId);
    }
})
window.addEventListener("touchstart",()=>{
    if(tourStarted===true){
        tourDisabled=true;
        tourStarted=false;
        cancelAnimationFrame(animationId);
    }
})


function typeWriter() {

    if (!isDelete) {
        charIndex++;
        desc.innerText = words[wordIndex].slice(0, charIndex);
        if (charIndex === words[wordIndex].length) {
            if(wordIndex==words.length-1 && charIndex==words[wordIndex].length && !tourStarted && !tourDisabled){
                setTimeout(()=>{
                    current=window.scrollY;
                    tourStarted=true;
                    startTour();
                },1000);
            }
            isDelete = true;
            setTimeout(typeWriter, 1500); 
            return;
        }
    } else {
        charIndex--;
        desc.innerText = words[wordIndex].slice(0, charIndex);
        if (charIndex === 0) {
            isDelete = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeWriter, isDelete ? 60 : 120);
}

const buttons=document.querySelectorAll(".btn1");
const icons=document.querySelectorAll(".icon a");

function heroAnimation() {
    setTimeout(()=>{
    document.querySelector("#hero-logo").classList.add("show");
    },0)
    setTimeout(()=>{
    document.querySelector(".fa-moon").classList.add("show");
    },250)
    setTimeout(() => {
        document.querySelector("#hello").classList.add("show");
    },700)
    setTimeout(() => {
        document.querySelector("#name").classList.add("show");
    },1200)
    setTimeout(() => {
        document.querySelector("#h3").classList.add("show");
        document.querySelector(".cursor").classList.add("show");
    },1800)
    setTimeout(() => {
        document.querySelector(".cursor").classList.add("show");
    },2300)
    setTimeout(() => {
        document.querySelector("#description").classList.add("show");
        typeWriter();
    },2800)
    setTimeout(() => {
        document.querySelector(".image-container").classList.add("show");
    },1200);

    setTimeout(()=>{
        buttons[0].classList.add("show");
    },4700);
    setTimeout(()=>{
        buttons[1].classList.add("show");
    },5000);

    setTimeout(()=>{
        icons[0].classList.add("show");
    },5400);
    setTimeout(()=>{
        icons[1].classList.add("show");
    },5600);
    setTimeout(()=>{
        icons[2].classList.add("show");
    },5800);
}

window.addEventListener("load",()=>{
    body.classList.add("loading");
    sendEmail();
    animateCursorText();
    setTimeout(()=>{
        hero.classList.add("show-hero");
        intro.classList.add("hide-intro");
        body.classList.remove("loading");
    },13000);
    setTimeout(()=>{
        intro.remove();
    },13800);
    setTimeout(()=>{
        heroAnimation();
    },13400);
    setTimeout(()=>{
        document.querySelector("#intro .welcome-screen").classList.add("hide-welcome");
    },7000);
    setTimeout(()=>{
        document.querySelector("#intro .meet-screen").classList.add("show-meet");
    },6800);
})

let mode=true;
const toggle=()=>{
    if(mode==true){
        body.classList.toggle("light-mode");
    }
    else{
        body.classList.toggle("dark-mode");
    }
}

moon.addEventListener("click",()=>{
    toggle();
})


function updateScrollUI() {
    if (window.scrollY > 500) {
        backTopBtn.classList.add("show");
    } else {
        backTopBtn.classList.remove("show");
    }

    if (window.scrollY > hero.offsetHeight - 100) {
        sideBar.style.opacity = 1;
        sideBar.style.pointerEvents = "auto";
    } else {
        sideBar.style.opacity = 0;
        sideBar.style.pointerEvents = "none";
    }
}
window.addEventListener("scroll", updateScrollUI);
window.addEventListener("load", updateScrollUI);

const cards=()=>{
    card.style.transform="rotateY(360deg)";
}

btn.addEventListener("click",()=>{
    cards();
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.8,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: true,
});

button.forEach((button)=>{
    button.addEventListener("click",()=>{
        let img=button.closest(".swiper-slide").querySelector("img");
        modalImg.src = img.src;
        modalContainer.classList.add("visible");
    })
})
modalSymbol.addEventListener("click",()=>{
    modalContainer.classList.remove("visible");
})
modalContainer.addEventListener("click",(evt)=>{
    console.log(evt.target);
    if(evt.target == modalContainer){
        modalContainer.classList.remove("visible");
    }
    
})
document.addEventListener("keydown",(evt)=>{
    if(evt.key == 'Escape'){
        modalContainer.classList.remove("visible");
    }
})

let contactForm=document.querySelector("#contact-form");
let contactButton=document.querySelector(".send button");
let popupContainer=document.querySelector(".popup-container");
let popupCard=document.querySelector(".popup-card");
let popupIcon=document.querySelector(".popup-icon");
let popupMsg=document.querySelector(".popup-message");
let popupBtn=document.querySelector(".popup-btn");


emailjs.init("c2uIXynN6Oxobrmio");
const sendEmail=()=>{
    contactForm.addEventListener("submit",async(evt)=>{
        evt.preventDefault();
        try{
        await emailjs.sendForm(
            "service_lfw2uwb",
            "template_6814eqw",
            contactForm,
        );
        showpopup(true);
        contactForm.reset();
    }
        catch(err){
            showpopup(false);
            console.log(err);
        }
    })
}
let showpopup=(isSuccess)=>{
    if(isSuccess){
        popupIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';;
        popupMsg.innerText="Your message has been sent successfully!";
        popupContainer.classList.add("show");
        popupCard.classList.add("popup-success");
        popupCard.classList.remove("popup-error");
    }
    else{
        popupIcon.innerHTML='<i class="fa-solid fa-circle-xmark"></i>';
        popupMsg.innerText="Failed to send your message. Please try again.";
        popupContainer.classList.add("show");
        popupCard.classList.add("popup-error");
        popupCard.classList.remove("popup-success");
    }
}
popupBtn.addEventListener("click",()=>{
    popupContainer.classList.remove("show");
    popupCard.classList.remove("popup-success");
    popupCard.classList.remove("popup-error");
})

backTopBtn.addEventListener("click",()=>{
    window.scrollTo({
        behavior: "smooth",
        top: 0
})
})

let cursorText=document.querySelector("#cursorText");
let letters=document.querySelectorAll("#cursorText span");
let positions = [
    [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]
]
let targetX=0;
let targetY=0;
let hideCursorText;
window.addEventListener("mousemove",(e)=>{
    targetX = e.clientX;
    targetY = e.clientY;
    // console.log(targetX, targetY);
    cursorText.style.opacity=1;
    clearTimeout(hideCursorText);
    hideCursorText=setTimeout(()=>{
        cursorText.style.opacity=0;
    },1000);
})
function animateCursorText(){
    for(let i=0;i<letters.length;i++){
        let target;
        if(i===0){
            target = [targetX,targetY];
        }
        if(i>0){
            target = [positions[i-1][0],
        positions[i-1][1]+25
        ];
        }
        positions[i][0]+= (target[0]-positions[i][0])*0.1;
        positions[i][1] += (target[1]-positions[i][1])*0.1;
        letters[i].style.left = positions[i][0] + "px";
        letters[i].style.top = positions[i][1] + "px";
    }
    requestAnimationFrame(animateCursorText);
}
