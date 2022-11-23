const mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {
        "coord": {
          "lon": Number,
          "lat": Number
        },
        "weather": [
          {
            "id": Number,
            "main": String,
            "description": String,
            "icon": String
          }
        ],
        "base": String,
        "main": {
          "temp": Number,
          "feels_like": Number,
          "temp_min": Number,
          "temp_max": Number,
          "pressure": Number,
          "humidity": Number
        },
        "visibility": Number,
        "wind": {
          "speed": Number,
          "deg": Number
        },
        "clouds": {
          "all": Number
        },
        "dt": Number,
        "timezone": Number,
        "id": Number,
        "name": String,
        "cod": Number
      }
);
module.exports = mongoose.model("City",schema);