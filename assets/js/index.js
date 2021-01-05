const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');

const isDayTime = (icon) => {
  if (icon.includes('d')) { return true }
  else { return false }
}
function updateCurrent(data) {
  const imageName = data.weather[0].icon;
  const iconSrc = ` ./assets/animated_icons/${imageName}.svg`;
  cityName.textContent = data.name +','+ data.sys.country;
  cardBody.innerHTML = `
    <div class="card-mid row">
            <div class="col-8 text-center temp">
            <p class="text-left currentTime">as of ${convertTimestamp(data.dt,'time')}</p>
              <span>${spitOutCelcius(data.main.temp)}&deg;C</span>
            </div>
            <div class="col-4 condition-temp">
              <p class="condition">${data.weather[0].description}</p>
              <p class="high">${spitOutCelcius(data.main.temp_max)}&deg;C</p>
              <p class="low">${spitOutCelcius(data.main.temp_min)}&deg;C</p>
            </div>
          </div>

          <div class="icon-container card shadow mx-auto">
            <img src="${iconSrc}" alt="${data.weather[0].description}" width="90px" />
          </div>
          <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
              <p>${spitOutCelcius(data.main.feels_like)}&deg;C</p>
              <span>Feels Like</span>
            </div>
            <div class="col text-center">
              <p>${data.main.humidity}%</p>
              <span>Humidity</span>
            </div>
            <span class="text-center pt-5 mx-auto"><a href="./details.html">More details <img
            src="./assets/img/arrow-right.svg" alt="arrow-right" width="20px"></a></span>
          </div>
    `;
  if (isDayTime(imageName)) {
    timeImage.setAttribute('src', 'assets/img/day_image.svg');
    if (cityName.classList.contains('text-white')) {
      cityName.classList.remove('text-white');
    } else {
      cityName.classList.add('text-black');
    }

  } else {
    timeImage.setAttribute('src', 'assets/img/night_image.svg');
    if (cityName.classList.contains('text-black')) {
      cityName.classList.remove('text-black');
    } else {
      cityName.classList.add('text-white');
    }

  }

  cardInfo.classList.remove('d-none');
}



function updateHomepageForecast() {
  data = JSON.parse(localStorage.getItem("detailData"));
  for(let i=0;i<3;i++){
  days.innerHTML += `
  <tr>
  <th style="font-size:12px;">${convertTimestamp(data.daily[i].dt)}</th>
  <td>${capitalizeFirstLetter(data.daily[i].weather[0].description)}</td>
  <td><img src="./assets/animated_icons/${data.daily[i].weather[0].icon}.svg" alt="${capitalizeFirstLetter(data.daily[i].weather[0].description)}" width="100px" height="60px" class="table-icon-container"/></td>
  <td> ${spitOutCelcius(data.daily[i].temp.day)}/${spitOutCelcius(data.daily[0].temp.night)}&deg;C</td>
  </tr>
  `
  }

  for(let i=0;i<3;i++){
    hours.innerHTML += `
    <tr>
    <th style="font-size:12px;">${convertTimestamp(data.hourly[i].dt,'time')}</th>
    <td>${spitOutCelcius(data.hourly[i].temp)}&deg;C</td>
    <td><img src="./assets/animated_icons/${data.hourly[i].weather[0].icon}.svg" alt="${capitalizeFirstLetter(data.hourly[i].weather[0].description)}" width="100px" height="60px" class="table-icon-container"/></td>
    <td>${capitalizeFirstLetter(data.hourly[i].weather[0].description)}</td>
    </tr>
    
    `
  }
 
}