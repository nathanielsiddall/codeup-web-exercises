

(function () {

    var loc = { lat: 29.429447, lng: -98.491623 };
var mapOptions = {
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoom:15,
    center: loc
};

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: loc,
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "your face is dumb and your code is too."
    });

    infoWindow.open(map, marker);

})();