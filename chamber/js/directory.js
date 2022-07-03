const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});
listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});

const requestAdress = "json/data.json"
const cards = document.querySelector(".member-cards");

fetch(requestAdress)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const members = jsonObject['companies'];
        members.forEach(displayMembers);
      });

function displayMembers(members) {
    let card = document.createElement('section');
    let name = document.createElement('p');
    let icon = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('a');
    let membership = document.createElement('p');

    name.innerHTML = `<strong>${members.name}</strong>`;
    address.innerHTML = `${members.address}`;
    phone.innerHTML = `${members.phone}`;
    site.innerHTML = `Website Link`;
    site.setAttribute('href', members.website);
    site.setAttribute('class', "website")
    membership.innerHTML = `${members.membership}`;

    icon.setAttribute('src', members.image);
    icon.setAttribute('alt', `${members.name}-icon`);
    icon.setAttribute('loading', 'lazy');

    card.append(name);
    card.append(icon);
    card.append(address);
    card.append(phone);
    card.append(phone);
    card.append(site);
    
    cards.append(card);

}