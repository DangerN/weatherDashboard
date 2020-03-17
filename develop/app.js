var APIKey= "4b4fc905987791628273a594a06e68d7";
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
var weatherIconBase = `http://openweathermap.org/img/wn/`


function handleSearch(e) {
  e.preventDefault()
  var city = $('#search-term').val();
  $.ajax({
    url: `${baseURL}q=${city}&appid=${APIKey}`,
    method: "GET"
  }).then(function (res) {
    displayInfo(res)
    saveCity(res.name)
  })

}

function displayInfo(res) {

  // $.ajax({
  //   url: `weatherIconBase${res.weather[0].icon}`,
  //   method: "GET"
  // }).then(function (res) {
  //
  // })

  var infoBlock = `
    <div id='display-main'>
      <span>${res.name}</span>
      <img src="${weatherIconBase}${res.weather[0].icon}@2x.png"
    </div>
    <div id='display-details'>

    </div>
    <div id='display-forecast'>

    </div>
  `
  $('#city-display').append(infoBlock)
}

function saveCity(name) {

}

$('#search-form').submit(handleSearch)
