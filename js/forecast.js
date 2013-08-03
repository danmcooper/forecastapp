var APP = APP || {};
APP.FORECAST = APP.FORECAST || {};

$.extend(APP.FORECAST, {
	forecast: null,
	get: function(lat, lng, key) {
		var self = this;
		$.getJSON('https://api.forecast.io/forecast/' + key + '/' + 
			lat + ',' + lng + "?callback=?", function(forecast) {
			self.forecast = forecast;
            $(document.body).trigger('forecastUpdated');
		});
	},
	getData: function() {
		return this.forecast;
	},
	draw: function() {
		// now
		APP.SKYCONS.add(document.getElementById("icon-now"), this.forecast.currently.icon);
		$("#forecast-now-summary").html(this.forecast.currently.summary);
		$("#forecast-now-temp").html(Math.round(this.forecast.currently.temperature));

		// daily
		APP.SKYCONS.add(document.getElementById("icon-today"), this.forecast.daily.icon);
		$("#forecast-today-summary").html(this.forecast.daily.summary);
		$("#forecast-today-high-temp").html(Math.round(this.forecast.daily.data[0].temperatureMax));
		$("#forecast-today-low-temp").html(Math.round(this.forecast.daily.data[0].temperatureMin));

		// hourly
		$("#forecast-hourly-summary").html(this.forecast.hourly.summary);

		// minutely
		APP.SKYCONS.add(document.getElementById("icon-hourly"), this.forecast.minutely.icon);		
		$("#forecast-minutely-summary").html(this.forecast.minutely.summary);

		APP.SKYCONS.play();
		$("#forecast").css("display", "block");
	},
	hide: function() {
		$("#forecast").css("display", "none");
	}
});
