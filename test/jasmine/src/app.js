$(function() {
    $("#address-form").submit(function() {
        // get city, sanitized
        var address = APP.HELPERS.htmlEncode($("#address-input").val());
        if (address.length > 0) {
            // call display
            APP.FORECAST.hide();
            APP.MAP.display(address);
        };

        return false;
    });

    $(document.body).on('geoUpdated', function() {
        // geo data has been updated - get forecast
        var geo = APP.MAP.getGeo();
        var lat = geo.lat();
        var lng = geo.lng();
        var key = APP.HELPERS.htmlEncode($("#key-input").val());
        if (key.length > 0) {
            APP.FORECAST.get(lat, lng, key);
        } else {
            alert("need api key");
            $("#key-input").focus();
        }
    });


    $(document.body).on('forecastUpdated', function() {
        // have forecast data - draw forecast
        APP.FORECAST.draw();
    }); 

    // initialize geocoder and skycons
    APP.MAP.initialize();
    APP.SKYCONS.initialize("green");

    // set focus and away we go
    $("#address-input").focus();
});