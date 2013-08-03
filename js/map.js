var APP = APP || {};
APP.MAP = APP.MAP || {};

$(function() {  

    var geocoder, gMap, geoLocation;

    $.extend(APP.MAP, {
        initialize: function() {
            geocoder = new google.maps.Geocoder();
            var mapOptions = {
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            gMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        },
        display: function(address) {
            geoLocation = null;
            geocoder.geocode( {'address': address}, function(results, status) {
                displayStatus = status;

                if (status === google.maps.GeocoderStatus.OK) {
                    geoLocation = results[0].geometry.location;                  
                    gMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: gMap,
                        position: results[0].geometry.location
                    });
                    $(document.body).trigger('geoUpdated');
                };
            });
        },
        getGeo: function(address) {
            return geoLocation;
        }        
    });

    APP.MAP.initialize();

});