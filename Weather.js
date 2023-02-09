function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='b72e12a39b3075fbb7a85849aa5c5233';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid='+apikey+'&units=metric')
       .then(response => response.json())
       .then(data => {
          var t = data['main']['temp']
          var x = data['main']['temp_min']
          var y = data['main']['temp_max']
          document.getElementById("output").innerHTML = t;
          document.getElementById("min").innerHTML = x;
          document.getElementById("max").innerHTML = y;
})
}
