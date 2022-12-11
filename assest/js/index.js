localStorage.clear();

$("#search-button").on("click", function (e) {
    e.preventDefault()
    var cityName = $("#cityName").val();
    
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=4e12934b1cd60cb4bb4b3d215ad0c35d";
    fetch(apiURL)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        
        
        
        $("#city-name").text(cityName)
        $("#temperature").text("Temp: "+data.main.temp)
        $("#humidity").text("Humidity: " + data.main.humidity)
        $("#wind-speed").text("Wind: " + data.wind.speed)
       
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=4e12934b1cd60cb4bb4b3d215ad0c35d`)
        .then(res => res.json())
    .then(data =>{
        console.log(data)
        // 1 new day
       
        $("#temp-0").text("Temp: "+data.list[0].main.temp)
        $("#hum-0").text("Humidity: " + data.list[0].main.humidity)
        $("#wind-0").text("Wind: " + data.list[0].wind.speed)
        // 2 new day
        
        $("#temp-1").text("Temp: "+data.list[7].main.temp)
        $("#hum-1").text("Humidity: " + data.list[7].main.humidity)
        $("#wind-1").text("Wind: " + data.list[7].wind.speed)
    
        // 3 new day
        
        $("#temp-2").text("Temp: "+data.list[15].main.temp)
        $("#hum-2").text("Humidity: " + data.list[15].main.humidity)
        $("#wind-2").text("Wind: " + data.list[15].wind.speed)
    
        // 4 new day
        
        $("#temp-3").text("Temp: "+data.list[23].main.temp)
        $("#hum-3").text("Humidity: " + data.list[23].main.humidity)
        $("#wind-3").text("Wind: " + data.list[23].wind.speed)
    
        // 5 new day
        
        $("#temp-4").text("Temp: "+data.list[31].main.temp)
        $("#hum-4").text("Humidity: " + data.list[31].main.humidity)
        $("#wind-4").text("Wind: " + data.list[31].wind.speed)

    })
    })

})


// localStorage.clear();

// function findCity() {
//     var cityName = titleCase($("#cityName")[0].value.trim());

//     var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=4e12934b1cd60cb4bb4b3d215ad0c35d";

//     fetch(apiURL).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (data) {

//                 $("#city-name")[0].textContent = cityName + " (" + moment().format('M/D/YYYY') + ")";

//                 $("#city-list").append('<button type="button" class="list-group-item list-group-item-light list-group-item-action city-name">' + cityName);

//                 localStorage.setItem(cityName, data.coord.lat + " " + data.coord.lon);

//                 apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=minutely,hourly&units=imperial&appid=4e12934b1cd60cb4bb4b3d215ad0c35d";

//                 fetch(apiURL).then(function (newResponse) {
//                     if (newResponse.ok) {
//                         newResponse.json().then(function (newData) {
//                             getCurrentWeather(newData);
//                         })
//                     }
//                 })
//             })
//         } else {
//             alert("City not found!");
//         }
//     })
// }

// // This function gets the info for a city already in the list. It does not need to check whether the city exists as it was already checked when the city was first searched for.
// function getListCity(coordinates) {
//     apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=minutely,hourly&units=imperial&appid=71311474f5b26fb7bbfa0bc1985b90cd";

//     fetch(apiURL).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (data) {
//                 getCurrentWeather(data);
//             })
//         }
//     })
// }

// function getCurrentWeather(data) {
//     $(".results-panel").addClass("visible");

//     $("#currentIcon")[0].src = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png";
//     $("#temperature")[0].textContent = "Temperature: " + data.current.temp.toFixed(1) + " \u2109";
//     $("#humidity")[0].textContent = "Humidity: " + data.current.humidity + "% ";
//     $("#wind-speed")[0].textContent = "Wind Speed: " + data.current.wind_speed.toFixed(1) + " MPH";
//     $("#uv-index")[0].textContent = "  " + data.current.uvi;

//     if (data.current.uvi < 3) {
//         $("#uv-index").removeClass("moderate severe");
//         $("#uv-index").addClass("favorable");
//     } else if (data.current.uvi < 6) {
//         $("#uv-index").removeClass("favorable severe");
//         $("#uv-index").addClass("moderate");
//     } else {
//         $("#uv-index").removeClass("favorable moderate");
//         $("#uv-index").addClass("severe");
//     }

//     getFutureWeather(data);
// }

// function getFutureWeather(data) {
//     for (var i = 0; i < 5; i++) {
//         var futureWeather = {
//             date: convertUnixTime(data, i),
//             icon: "http://openweathermap.org/img/wn/" + data.daily[i + 1].weather[0].icon + "@2x.png",
//             temp: data.daily[i + 1].temp.day.toFixed(1),
//             humidity: data.daily[i + 1].humidity
//         }

//         var currentSelector = "#day-" + i;
//         $(currentSelector)[0].textContent = futureWeather.date;
//         currentSelector = "#img-" + i;
//         $(currentSelector)[0].src = futureWeather.icon;
//         currentSelector = "#temp-" + i;
//         $(currentSelector)[0].textContent = "Temp: " + futureWeather.temp + " \u2109";
//         currentSelector = "#hum-" + i;
//         $(currentSelector)[0].textContent = "Humidity: " + futureWeather.humidity + "%";
//     }
// }

// // This function applies title case to a city name if there is more than one word.
// function titleCase(city) {
//     var updatedCity = city.toLowerCase().split(" ");
//     var returnedCity = "";
//     for (var i = 0; i < updatedCity.length; i++) {
//         updatedCity[i] = updatedCity[i][0].toUpperCase() + updatedCity[i].slice(1);
//         returnedCity += " " + updatedCity[i];
//     }
//     return returnedCity;
// }

// // This converts the UNIX time that is received from the server.
// function convertUnixTime(data, index) {
//     const dateObject = new Date(data.daily[index + 1].dt * 1000);

//     return (dateObject.toLocaleDateString());
// }

// $("#search-button").on("click", function (e) {
//     e.preventDefault();

//     findCity();

//     $("form")[0].reset();
// })

// $(".city-list-box").on("click", ".city-name", function () {

//     var coordinates = (localStorage.getItem($(this)[0].textContent)).split(" ");
//     coordinates[0] = parseFloat(coordinates[0]);
//     coordinates[1] = parseFloat(coordinates[1]);

//     $("#city-name")[0].textContent = $(this)[0].textContent + " (" + moment().format('M/D/YYYY') + ")";

//     getListCity(coordinates);
// })