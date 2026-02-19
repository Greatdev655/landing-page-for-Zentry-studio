const quotes = document.querySelector("Hero_btn2");
const heroText = document.getElementById("hero_text");
const navLinks = document.querySelectorAll("nav_link a");
const sections = document.querySelectorAll("section");



// nav links active 



const messages = [
    "Branding, UI/UX, and website design for ambitious businesses.",
    "We build brands.",
    "We design websites.",
    "We grow your business.",
];

document.addEventListener("DOMContentLoaded", () => {


    let messageIndex = 0;
    let charIndex = 0;

    function typeEffect() {

        if (charIndex < messages[messageIndex].length) {
            heroText.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 50); // typing speed
        } else {
            setTimeout(eraseEffect, 1500); // pause before deleting
        }

    }

    function eraseEffect() {

        if (charIndex > 0) {
            heroText.textContent = messages[messageIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 30);
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeEffect, 300);
        }

    }

    typeEffect();

});


// reveal animation

window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
