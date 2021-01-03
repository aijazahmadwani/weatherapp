const outer = document.querySelector('.outer')
data = JSON.parse(localStorage.getItem("currentData"));
outer.innerHTML = `
<div class=" row ">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Sunrise</span>
            <p class="detail">${convertTimestamp(data.sys.sunrise, 'time')}</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/sunrise.png" alt="sunrise" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Sunset</span>
            <p class="detail">${convertTimestamp(data.sys.sunset, 'time')}</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/sunset.png" alt="sunset" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row ">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Humidity</span>
            <p class="detail">${data.main.humidity} %</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/humidity.png" alt="humidity" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Pressure</span>
            <p class="detail">${data.main.pressure} hPa</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/pressure.png" alt="pressure" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Wind Speed</span>
            <p class="detail">${data.wind.speed} m/s</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/wind.png" alt="wind-speed" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Wind Direction</span>
            <p class="detail">${data.wind.deg} &deg;</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/wind-direction.png" alt="wind-direction" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Visibility</span>
            <p class="detail">${data.visibility} m</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/visibility.png" alt="visibility" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Clouds</span>
            <p class="detail">${data.clouds.all} %</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/clouds.png" alt="clouds" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row">
<div class="col-6 border-right">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Sea level</span>
            <p class="detail">${data.main.sea_level} hPa</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/sea-level.png" alt="sea-level" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Ground level</span>
            <p class="detail">${data.main.grnd_level} hPa</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/ground-level.png" alt="ground-level" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>`