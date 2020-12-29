const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}
const isDayTime = (icon) => {
    if (icon.includes('d')) { return true }
    else { return false }
}
function updateCurrent(data){
  console.log(data);
    const imageName = data.weather[0].icon;
    const iconSrc =` ./assets/animated_icons/${imageName}.svg`;
    //const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = data.name;
    cardBody.innerHTML = `
    <div class="card-mid row">
            <div class="col-8 text-center temp">
              <span>${spitOutCelcius(data.main.temp)}&deg;C</span>
            </div>
            <div class="col-4 condition-temp">
              <p class="condition">${data.weather[0].description}</p>
              <p class="high">${spitOutCelcius(data.main.temp_max)}&deg;C</p>
              <p class="low">${spitOutCelcius(data.main.temp_min)}&deg;C</p>
            </div>
          </div>

          <div class="icon-container card shadow mx-auto">
            <img src="${iconSrc}" alt="" width="90px" />
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
            <span class="text-center pt-5 mx-auto">More details --></span>
          </div>
    `;
    if (isDayTime(imageName)) {
        timeImage.setAttribute('src', 'img/day_image.svg');
        if (cityName.classList.contains('text-white')) {
            cityName.classList.remove('text-white');
        } else {
            cityName.classList.add('text-black');
        }

    } else {
        timeImage.setAttribute('src', 'img/night_image.svg');
        if (cityName.classList.contains('text-black')) {
            cityName.classList.remove('text-black');
        } else {
            cityName.classList.add('text-white');
        }

    }

    cardInfo.classList.remove('d-none');
}



