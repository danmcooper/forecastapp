var APP = APP || {};
APP.HELPERS = APP.HELPERS || {};

$.extend(APP.HELPERS, {
    htmlEncode: function(value) {
        return $('<div/>').text(value).html();
    },
    htmlDecode: function(value) {
        return $('<div/>').html(value).text();
    },
    forecastIOToSkycons: function(forecastIOWeather) {
        var weatherIcon = APP.HELPERS.lut[forecastIOWeather];

        if (weatherIcon) {
            return weatherIcon;
        } else {
            return "";
        }
    },
    lut: {"rain": Skycons.RAIN,
         "clear-day": Skycons.CLEAR_DAY,
         "clear-night": Skycons.CLEAR_NIGHT,
         "snow": Skycons.SNOW, 
         "sleet": Skycons.SLEET, 
         "wind": Skycons.WIND, 
         "fog": Skycons.FOG, 
         "cloudy": Skycons.CLOUDY, 
         "partly-cloudy-day": Skycons.PARTLY_CLOUDY_DAY, 
         "partly-cloudy-night": Skycons.PARTLY_CLOUDY_NIGHT}
});