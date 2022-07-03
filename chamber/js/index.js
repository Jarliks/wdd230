//modified date
let d = new Date(document.lastModified);
let year = d.getFullYear();
let hours = d.getHours();
let minutes = d.getMinutes()
let seconds = d.getSeconds();

hours = hours < 10 ? '0'+ hours : hours;
minutes = minutes < 10 ? '0'+ minutes : minutes;
seconds = seconds < 10 ? '0'+ seconds : seconds;


let timestamp = d.getMonth() + "/" + d.getDay() + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

document.querySelector('#year').textContent = year;
document.getElementById("timestamp").textContent = timestamp;

//toggle menu button
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//current date
const today = new Date();
const todayFormatted = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

document.getElementById("current-date").innerHTML = `<strong>${todayFormatted}</strong>`;

//banner based on date
let day = new Date().getDay();
const banner = document.getElementById("banner");
if (day === 1 || day === 2) {
    banner.style.display = "block";
}

//Lazy loading images
const images = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 150px 0px"
};

function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }

    img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

//Days since visited
const visitedSpan = document.querySelector("#visits");
let lastVisit = Number(window.localStorage.getItem("visits-ls"));

function daysDifference() {
    if (lastVisit != 0){
        let daysTotal = Math.round((Date.now() - lastVisit) / 86400000);
        visitedSpan.textContent = daysTotal;
    } else {
        visitedSpan.textContent = 0;
    }
    return;
}

lastVisit = Date.now();
localStorage.setItem("Visits-ls", lastVisit);

daysDifference();