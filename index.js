var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 11
});

var places = new google.maps.places.Autocomplete(document
            .getElementById('position'));
}
    

document.getElementById('position').addEventListener('keyup',function(){
    var input = document.getElementById('position').value;
    var geocoder = new google.maps.Geocoder();
    setCenter(geocoder, input);
    return false;
  
});

function setCenter(geocoder, address) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: results[0].geometry.location
      });
      if (results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport);
console.log(results[0].geometry);
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
      
    }
  });
}