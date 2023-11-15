const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT:  process.env.PORT || 3000,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
}