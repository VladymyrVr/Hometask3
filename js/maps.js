function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.730610, -73.935242),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.Screen
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}