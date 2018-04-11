var lat = 29.429447;
var long = -98.491623


var loc = { lat: lat , lng: long };



function upText(loc, data) {
    $(loc).empty();
    var result = data;
    return $(loc).append(result);
}
function weatherCatcher(lat,long) {

    // todo create a function that checks the time code with the most current time and show that temp
    //todo create a function that grabs the lowest from each dtg and the highest
    // todo finish the data inputs
    //todo clean it up and make it look better
    $.get("http://api.openweathermap.org/data/2.5/forecast/", {
        APPID: "7b9952426a6933c9c25736a27a18907d",
        lat: lat,
        lon: long,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        var city = data.city.name;
        var latlng = lat+","+long;
        var tempLow = data.list["0"].main.temp_min;
        var tempHigh = data.list["0"].main.temp_max;

        $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
            + latlng +"&key=AIzaSyCEjkCN41HBxCX8VFdtLANlIiyqbVmBz54")
            .done(function(data) {



                var state = "" + data.results[3].address_components["0"].long_name;

                state = "" + state;
                upText("#box0", city  + ", " + state);
                upText("#temp1",tempLow  + "°/ " + tempHigh + "°");

            });});}



    (function () {
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
        var lat = marker.getPosition().lat();
        var long = marker.getPosition().lng();
        weatherCatcher(lat, long);
        

});})();
weatherCatcher(lat, long);

