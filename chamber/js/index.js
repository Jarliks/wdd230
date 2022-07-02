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

