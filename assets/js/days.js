const days = document.querySelector('.days');
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