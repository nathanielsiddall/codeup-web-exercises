var loc = { lat: 29.429447, lng: -98.491623 };
    (function () {

    // ?var address = prompt("gimme an address");

    // var geocoder = new google.maps.Geocoder();

    // var infoWindowContent = prompt("What do you want to say about this?");



    // geocoder.geocode({ "address": loc }, function(results, status) {
    //
    //     if (status === google.maps.GeocoderStatus.OK) {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             position: results[0].geometry.location,
    //             map: map,
    //             draggable: true
    //         });
    //
    //         var infoWindow = new google.maps.InfoWindow({
    //             content: infoWindowContent
    //         });
    //         infoWindow.open(map, marker);
    //
    //         loc = results[0].geometry.location;
    //     } else {
    //         alert("Geocoding was not successful - STATUS: " + status);
    //     }
    // });

    var map = new google.maps.Map(document.getElementById("map-canvas"),

        {
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom: 5,
            center: loc

        });

    var marker = new google.maps.Marker({
        position: loc,
        draggable: true,
        map: map


    });

    google.maps.event.addListener(marker, 'dragend', function (event) {
        var result = "";
        var lat = marker.getPosition().lat();
        var long = marker.getPosition().lng();
        console.log();



        (function() {
            $.get("http://api.openweathermap.org/data/2.5/forecast/", {
                APPID: "7b9952426a6933c9c25736a27a18907d",
                lat: lat,
                lon: long,
                units: "imperial"
            }).done(function(data) {
                console.log(data);

               result = data.city.name;
                $("box1").append(result);
                console.log(result);


            });

        })();

    });

})();

