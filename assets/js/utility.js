const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
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
  }
  // capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }