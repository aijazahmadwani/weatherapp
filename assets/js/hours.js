const hours = document.querySelector('.hours');
data = JSON.parse(localStorage.getItem("detailData"));

for(let i=0;i<48;i++){
    hours.innerHTML += `
    <tr>
    <th style="font-size:12px;">${convertTimestamp(data.hourly[i].dt,'time')}</th>
    <td>${spitOutCelcius(data.hourly[i].temp)}&deg;C</td>
    <td><img src="./assets/animated_icons/${data.hourly[i].weather[0].icon}.svg" alt="" width="100px" height="60px" class="table-icon-container"/></td>
    <td>${capitalizeFirstLetter(data.hourly[i].weather[0].description)}</td>
    </tr>
    
    `
  }