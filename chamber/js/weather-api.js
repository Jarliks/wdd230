const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#temp-caption');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Gilbert,AZ,US&units=imperial&appid=d55181a62a89076a013f11f06334cf86";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function windChillValue(wind, temp) {
    let chill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
    return chill.toFixed(0);
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  windSpeed.textContent = weatherData.wind.speed.toFixed(0);

  let temp = weatherData.main.temp;
  let wind = weatherData.wind.speed;
  let chill = windChillValue(wind, temp);
  if (temp <= 50 && wind >= 3){
    windChill.textContent = `${chill}  &deg;F`;
  } else {
    windChill.textContent = "N/A";
  }
  

}

apiFetch();