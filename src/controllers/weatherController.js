const weatherModel = require('../models/weatherModel');

const weatherController = {
  index: (req, res) => {
    res.render('index', { weatherData: null }); // Pass null initially
  },
  getWeather: async (req, res) => {
    try {
      const { city } = req.body;
      const weatherData = await weatherModel.getWeatherData(city);
      res.render('index', { weatherData });
    } catch (error) {
      console.error(error);
      res.render('error');
    }
  },
};

module.exports = weatherController;
