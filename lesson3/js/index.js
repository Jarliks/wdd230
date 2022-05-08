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