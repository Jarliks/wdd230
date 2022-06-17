const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
      });

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');
    let length = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.append(h2);
    card.append(birthdate);
    card.append(birthplace);
    card.append(portrait);
    card.append(length);
    h2.innerHTML = `${prophet.name} ${prophet.lastName}`;
    birthdate.innerHTML = `Date of birth: ${prophet.birthdate}.`;
    birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}.`;
    length.innerHTML = `Served as a prophet for ${prophet.length} years.`;
    
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.append(card);

}