const days = document.querySelector('.days');

const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
  }
data = JSON.parse(localStorage.getItem("detailData"));
for(let i=0;i<7;i++){
days.innerHTML += `
<tr>
<th style="font-size:12px;">${convertTimestamp(data.daily[i].dt)}</th>
<td>${capitalizeFirstLetter(data.daily[i].weather[0].description)}</td>
<td><img src="./assets/animated_icons/${data.daily[i].weather[0].icon}.svg" alt="" width="100px" height="60px" class="table-icon-container"/></td>
<td> ${spitOutCelcius(data.daily[i].temp.day)}/${spitOutCelcius(data.daily[0].temp.night)}&deg;C</td>
</tr>
`
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

