const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
  }

  
//function to convert unix timestamp to local time and date
function convertTimestamp(timestamp, arg) {
    let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
      dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
      ampm = 'AM';
    let weekday = new Array("Sun","Mon","Tue","Wed","Thur","Fri","Sat");
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
    let time = h + ':' + min + ' ' + ampm;
    let date = day + ' ' + dd + '-' + mm;
    if (arg === 'time') {
      return time;
    }
    else {
      return date;
    }
  }
  // capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }