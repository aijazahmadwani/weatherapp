// API KEY
const key = '4e027d2fcccd807da22c4507d2dafed5';
let currentApi;

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Your Browser doesn't Support Geolocation. Please update your browser to latest version.</p>";
}

// SET USER'S POSITION
function setPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    currentApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    detailApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`;
    fetch('data/currentApi.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //console.log(data);
            updateCurrent(data);
        })
        .then(() => {
            fetch('data/detailApi.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    //console.log(data);
                    //updateDetail();
                })
        })
        .catch((error) => {
            console.log(error);
        })
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}