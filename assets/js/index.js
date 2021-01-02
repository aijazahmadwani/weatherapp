const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');

const spitOutCelcius = (kelvin) => {
  celcius = Math.round(kelvin - 273.15);
  return celcius;
}
const isDayTime = (icon) => {
  if (icon.includes('d')) { return true }
  else { return false }
}
function updateCurrent(data) {
  const imageName = data.weather[0].icon;
  const iconSrc = ` ./assets/animated_icons/${imageName}.svg`;
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
            <span class="text-center pt-5 mx-auto"><a href="./details.html">More details <img
            src="./assets/img/arrow-right.svg" width="20px"></a></span>
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
  <td><img src="./assets/animated_icons/${data.daily[i].weather[0].icon}.svg" alt="" width="100px" height="60px" class="table-icon-container"/></td>
  <td> ${spitOutCelcius(data.daily[i].temp.day)}/${spitOutCelcius(data.daily[0].temp.night)}&deg;C</td>
  </tr>
  `
  }

  for(let i=0;i<3;i++){
    hours.innerHTML += `
    <tr>
    <th style="font-size:12px;">${convertTimestamp(data.hourly[i].dt,'time')}</th>
    <td>${spitOutCelcius(data.hourly[i].temp)}&deg;C</td>
    <td><img src="./assets/animated_icons/${data.hourly[i].weather[0].icon}.svg" alt="" width="100px" height="60px" class="table-icon-container"/></td>
    <td>${capitalizeFirstLetter(data.hourly[i].weather[0].description)}</td>
    </tr>
    
    `
  }
 
}





//function to convert unix timestamp to local time and date
function convertTimestamp(timestamp, arg) {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
    dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
    ampm = 'AM',
    time;
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  day = weekday[d.getDay()];
  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }

  //time = h + ':' + min + ' ' + ampm + ',' + dd + '-' + mm + '-' + yyyy;
  time = h + ':' + min + ' ' + ampm;
  date = day + ' ' + dd + '-' + mm;
  if (arg === 'time') {
    return time;
  }
  else {
    return date;
  }
  return time;
}
// capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}