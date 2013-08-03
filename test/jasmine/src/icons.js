var APP = APP || {};
APP.SKYCONS = APP.SKYCONS || {};

$.extend(APP.SKYCONS, {
    
    skycons: null,
    initialize: function(color) {
        this.skycons = new Skycons({"color": color});
    },
    play: function() {
        if (this.skycons) {
            this.skycons.play();
        }
    },
    pause: function() {
        if (this.skycons) {
            this.skycons.pause();
        }
    },
    add: function(id, weather) {
        if (this.skycons) {      
            this.skycons.set(id, APP.HELPERS.forecastIOToSkycons(weather));
        }
    },
    remove: function(id) {
        if (this.skycons) {      
            this.skycons.remove(id);
        }
    }
});

