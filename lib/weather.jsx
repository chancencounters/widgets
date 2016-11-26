import React from 'react';

class Weather extends React.Component {
  constructor (props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.setWeather = this.setWeather.bind(this);

    this.state = {
      location: "",
      weather: "",
      temp: 0
    };
  }

  getWeather (pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=423aa4a2137f43afb8071255bad8a299`);
    xhr.onload = function () {
      if (xhr.status === 200) {
        this.setWeather(JSON.parse(xhr.response));
      }
    }.bind(this);

    xhr.send();
  }

  setWeather (weatherObj) {
    const weather = weatherObj.weather
    .map((weather) => weather.description)
    .join(", ");

    this.setState({
      location: weatherObj.name,
      weather: weather,
      temp: Math.round(weatherObj.main.temp * (9 / 5) - 459.67),
    });
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.getWeather(pos);
    });

  }

  render () {
    const { location, weather, temp } = this.state;

    return (
      <section className="weather">
        <span><p>{ location }</p></span>
        <span><p>{ weather }</p></span>
        <span><p>{ temp }&deg; F</p></span>
      </section>
    );
  }
}

export default Weather;
