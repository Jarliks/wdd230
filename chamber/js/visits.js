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