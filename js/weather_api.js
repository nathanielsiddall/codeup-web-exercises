
var lat = 29.429447;
var long = -98.491623;
var info = [];
var loc = { lat: lat , lng: long };

function addressGrabber() {

    var address = $("#text-box").val();
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ "address": address }, function(results, status) {

        if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map
            });

            var infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent
            });
            infoWindow.open(map, marker);

            loc = results[0].geometry.location;
        } else {
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
}
function ut(loc, data) {
    $(loc).empty();
    var result = data;
    return $(loc).append(result);
}
function weatherCatcher(lat,long) {

    $.get("https://api.openweathermap.org/data/2.5/forecast/",
        {
            APPID: "7b9952426a6933c9c25736a27a18907d",
            lat: lat,
            lon: long,
            units: "imperial"
         }
    ).done(function(data) {

        var i = 0;
        var it = ["0", "7", "13", 5];
        var iti = 0;
        var city = data.city.name;
        var latlng = lat+","+long;

        while (iti < 3) {

            info[i] = data.list[it[iti]].main.temp_min;
            i++;
            info[i] = data.list[it[iti]].main.temp_max;
            i++;
            info[i] = data.list[it[iti]].weather["0"].main;
            i++;
            info[i] = data.list[it[iti]].weather["0"].description;
            i++;
            info[i] = data.list[it[iti]].main.humidity;
            i++;
            info[i] = data.list[it[iti]].wind.speed;
            i++;
            info[i] = data.list[it[iti]].main.pressure;
            i++;
            info[i] = data.list[it[iti]].weather[0].icon;
            i++;

            iti++;
        }
        $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
            + latlng +"&key=AIzaSyCEjkCN41HBxCX8VFdtLANlIiyqbVmBz54")
            .done(function(data) {

               try { var state = "" + data.results[3].address_components["0"].long_name;}
               catch (x) {
                   state = null;
                   y = "We don't have any data for that place. try again";
                   alert(y);
               }
                state = "" + state;
                ut("#name-box", city  + ", " + state);
                ut("#temp1",info[0]  + "°/ " + info[1] + "°");
                ut("#type1", info[2] + ": ");
                ut("#extype1", info[3]);
                ut("#humidity1","humidity: " + info[4]);
                ut("#wind1","wind Speed: " + info[5]);
                ut("#pressure1","Barometric Pressure: " + info[6]);
                ut("#temp2",info[8]  + "°/ " + info[9] + "°");
                ut("#type2", info[10] + ": ");
                ut("#extype2", info[11]);
                ut("#humidity2","humidity: " + info[12]);
                ut("#wind2","wind Speed: " + info[13]);
                ut("#pressure2","Barometric Pressure: " + info[14]);
                ut("#temp3",info[16]  + "°/ " + info[17] + "°");
                ut("#type3", info[18] + ": ");
                ut("#extype3", info[19]);
                ut("#humidity3","humidity: " + info[20]);
                ut("#wind3", "wind Speed: " + info[21]);
                ut("#pressure3","Barometric Pressure: " +  info[22]);
                img = "https://openweathermap.org/img/w/" + info[7] + ".png";
                $("#image1").attr("src",img);
                var img2 = "https://openweathermap.org/img/w/" + info[15] + ".png";
                $("#image2").attr("src",img2);
                var img3 = "https://openweathermap.org/img/w/" + info[23] + ".png";
                $("#image3").attr("src",img3);

            });});}
(function () {
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        {
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom: 5,
            center: loc
        });
    var marker = new google.maps.Marker(
        {
            position: loc,
            draggable: true,
            map: map
    });
    google.maps.event.addListener(marker, 'dragend', function () {
        var lat = marker.getPosition().lat();
        var long = marker.getPosition().lng();
        weatherCatcher(lat, long);
    });})();
$("#btn").click(function () {
    addressGrabber()
});
weatherCatcher(lat, long);