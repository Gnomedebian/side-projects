const txtBox = document.getElementById("txt-box");
const searchBtn = document.querySelector(".input-box button");
const apiKey = "907b6bba4c828769ded80aab78dc6dd6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//button fuction to execute code.
function executeFunc() {
  //fetch data
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    //handles empty field err.
    if (txtBox.value === "") {
      document.querySelector(".empty-field").style.display = "block";
      //prevent display two error msgs
      document.querySelector(".error-404").style.display = "none";
    } else if (data.cod === "404") {
      //handle (city not found) error
      document.querySelector(".error-404").style.display = "block";
      document.querySelector(".empty-field").style.display = "none";
    } else {
      document.querySelector(".error-404").style.display = "none";
      document.querySelector(".empty-field").style.display = "none";
      document.querySelector(
        ".city"
      ).innerHTML = `${data.name}, ${data.sys.country}`;
      document.querySelector(".temp").innerHTML = `${Math.round(
        data.main.temp
      )}ºC`;
      document.querySelector("#value-1").innerHTML = `${data.main.pressure} mb`;
      document.querySelector("#value-2").innerHTML = `${data.wind.speed} km/h`;
      document.querySelector("#value-3").innerHTML = `${data.main.humidity} %`;
      //show data after fetching
      document.querySelector(".weather-dash").style.display = "flex";
    }
  }
  //add event to button
  searchBtn.addEventListener("click", () => {
    checkWeather(txtBox.value);
  });
}
