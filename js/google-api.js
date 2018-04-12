var lat = 29.429447;
var long = -98.491623;
var info = [];


var loc = { lat: lat , lng: long };

// function weatherLoader(){
//     var weatId = (data.list["0"].weather[0].id);
//     switch (weatId){
//         case
//
// }
function ut(loc, data) {
    $(loc).empty();
    var result = data;
    return $(loc).append(result);
}
function weatherCatcher(lat,long) {













    // todo finish the data inputs
    // todo todo clean it up and make it look better
    // todo figure out why the icon isnt working
    $.get("http://api.openweathermap.org/data/2.5/forecast/", {
        APPID: "7b9952426a6933c9c25736a27a18907d",
        lat: lat,
        lon: long,
        units: "imperial"
    }).done(function(data) {
        console.log(data);

          var i = 0;
          var it = ["0", "7", "13", 5];
          var iti = 0;


        var city = data.city.name;
        var latlng = lat+","+long;

        while (iti < 3) {
            console.log(iti);


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
                console.log("iti: " + it[iti]);
                i++;
                iti++;
        }
        console.log(info);
        var iconLocation = (data.list["0"].weather[0].icon);
        var iconaddress = "http://openweathermap.org/img/w";

        // $.get(iconaddress/*"http://openweathermap.org/img/w/" + iconLocation + ".png"*/)
        //     .done(function(icon) {
        //         console.log(icon);
        //         ut("#temp1",icon);

            // });
        $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
            + latlng +"&key=AIzaSyCEjkCN41HBxCX8VFdtLANlIiyqbVmBz54")
            .done(function(data) {

                var state = "" + data.results[3].address_components["0"].long_name;

                state = "" + state;
                ut("#name-box", city  + ", " + state);
                ut("#temp1",info[0]  + "°/ " + info[1] + "°");
                ut("#type1", info[2] + ": ");
                ut("#extype1", info[3]);
                ut("#humidity1","humidity: " + info[4]);
                ut("#wind1", info[5]);
                ut("#pressure1", info[6]);
                ut("#temp2",info[7]  + "°/ " + info[8] + "°");
                ut("#type2", info[9] + ": ");
                ut("#extype2", info[10]);
                ut("#humidity2","humidity: " + info[11]);
                ut("#wind2", info[12]);
                ut("#pressure3", info[13]);
                ut("#temp3",info[14]  + "°/ " + info[15] + "°");
                ut("#type3", info[16] + ": ");
                ut("#extype3", info[17]);
                ut("#humidity3","humidity: " + info[18]);
                ut("#wind3", info[19]);
                ut("#pressure3", info[20]);



                // <div class=" temp" id="temp1" ></div>
                // <div class=" " id="type1"></div>
                // <div class=" " id="extype1"></div>
                // <div class=" " id="humidity1"></div>
                // <div class=" " id="wind1"></div>
                // <div class=" " id="pressure1"></div>

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

