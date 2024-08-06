function showCurrentWeather(event) {
  event.preventDefault();
  const weatherData = {
    request: {
      type: "City",
      query: "San Francisco, United States of America",
      language: "en",
      unit: "m",
    },
    location: {
      name: "San Francisco",
      country: "United States of America",
      region: "California",
      lat: "37.775",
      lon: "-122.418",
      timezone_id: "America/Los_Angeles",
      localtime: "2019-09-03 05:35",
      localtime_epoch: 1567488900,
      utc_offset: "-7.0",
    },
    current: {
      observation_time: "12:35 PM",
      temparature: 16,
      weather_code: 122,
      weather_icons: ["https://assets.weatherstack.com/images/symbol.png"],
      weather_descriptions: ["Overcast"],
      wind_speed: 17,
      wind_degree: 260,
      wind_dir: "W",
      pressure: 1016,
      precip: 0,
      humidity: 87,
      cloudcover: 100,
      feelslike: 16,
      uv_index: 0,
      visibility: 16,
    },
  };

  document.getElementById("weatherData").textContent = JSON.stringify(
    weatherData,
    null,
    4
  );
  updateSelectedButton(event || document.querySelector(".buttons a.selected")); // Ensure the button state is updated
  // updateSelectedButton(event);
}

function showWeatherHistory(event) {
  event.preventDefault();
  const weatherData = {
    request: {
      type: "City",
      query: "New York, United States of America",
      language: "en",
      unit: "m",
    },
    location: {
      name: "New York",
      country: "United States of America",
      region: "New York",
      lat: "40.714",
      lon: "-74.006",
      timezone_id: "America/New_York",
      localtime: "2019-09-08 09:36",
      localtime_epoch: 1567935360,
      utc_offset: "-4.0",
    },
    current: {
      observation_time: "01:36 PM",
      temparature: 18,
      weather_code: 113,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      ],
      weather_descriptions: ["Sunny"],
      wind_speed: 7,
      wind_degree: 270,
      wind_dir: "W",
      pressure: 1018,
      precip: 0,
      humidity: 70,
      cloudcover: 0,
      feelslike: 18,
      uv_index: 5,
      visibility: 16,
    },
    historical: {
      "2013-07-01": {
        date: "2013-07-01",
        date_epoch: 1372636800,
        astro: {
          sunrise: "05:29 AM",
          sunset: "08:31 PM",
          moonrise: "12:59 AM",
          moonset: "02:42 PM",
          moon_phase: "Last Quarter",
          moon_illumination: 40,
        },
        mintemp: 21,
        maxtemp: 25,
        avgtemp: 22,
        totalsnow: 0,
        sunhour: 12.5,
        uv_index: 5,
      },
    },
  };

  document.getElementById("weatherData").textContent = JSON.stringify(
    weatherData,
    null,
    4
  );
  updateSelectedButton(event);
}

function showWeatherForecast(event) {
  event.preventDefault();
  const weatherData = {
    request: {
      type: "City",
      query: "Chicago, United States of America",
      language: "en",
      unit: "m",
    },
    location: {
      name: "Chicago",
      country: "United States of America",
      region: "Illinois",
      lat: "41.850",
      lon: "-87.650",
      timezone_id: "America/Chicago",
      localtime: "2019-09-08 08:39",
      localtime_epoch: 1567931940,
      utc_offset: "-5.0",
    },
    current: {
      observation_time: "01:39 PM",
      temparature: 19,
      weather_code: 122,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
      ],
      weather_descriptions: ["Overcast"],
      wind_speed: 17,
      wind_degree: 100,
      wind_dir: "E",
      pressure: 1019,
      precip: 0,
      humidity: 73,
      cloudcover: 100,
      feelslike: 19,
      uv_index: 4,
      visibility: 16,
    },
    forecast: {
      "2019-09-08": {
        date: "2019-09-08",
        date_epoch: 1567900800,
        astro: {
          sunrise: "06:23 AM",
          sunset: "07:13 PM",
          moonrise: "04:25 PM",
          moonset: "12:58 AM",
          moon_phase: "First Quarter",
          moon_illumination: 62,
        },
        mintemp: 10,
        maxtemp: 18,
        avgtemp: 16,
        totalsnow: 0,
        sunhour: 6.5,
        uv_index: 4,
      },
    },
  };

  document.getElementById("weatherData").textContent = JSON.stringify(
    weatherData,
    null,
    4
  );
  updateSelectedButton(event);
}

function updateSelectedButton(event) {
  event.preventDefault();
  const buttons = document.querySelectorAll(".buttons a");
  buttons.forEach((button) => button.classList.remove("selected"));
  event.target.classList.add("selected");
}

// Initialize with current weather data
document.addEventListener("DOMContentLoaded", () => {
  showCurrentWeather(); // Call with no event
});
