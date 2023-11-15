const axios = require('axios');

const { WEATHER_API_KEY } = require('../config')

const weatherModel = {
  getWeatherData: async (city) => {
    const apiKey = WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } 
    catch (error) {
      return { data: null, error: 'API request failed' };
    }
  },
};

module.exports = weatherModel;
