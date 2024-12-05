function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "C# ENTWICKLER",
    "PYTHON ENTWICKLER",
    "WEBENTWICKLER"
    
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        setTimeout(() => {
            bar.style.width = percent + "%";
        }, 500); // Animation delay
    });
});

const textElement = document.querySelector("#about h2");
const text = "Hallo, ich bin Tobias Illner"; // Deinen Text hier einfügen
const textArray = text.split("");
textElement.innerHTML = ""; // Text-Container leeren

textArray.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = 0;
    span.style.transition = `opacity 0.5s ease ${(index * 0.1)}s`;
    textElement.appendChild(span);
});

window.addEventListener("load", () => {
    const spans = textElement.querySelectorAll("span");
    spans.forEach(span => {
        span.style.opacity = 1;
    });
});

document.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight * 0.8) {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
    }
});


// Scroll-Animation für Timeline
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Element wird sichtbar
                entry.target.classList.add('visible');
            } else {
                // Element wird wieder unsichtbar
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.2, // Aktiviert bei 20% Sichtbarkeit
    }
);

// Timeline-Elemente überwachen
timelineItems.forEach((item) => observer.observe(item));



window.onload = typeWriter

