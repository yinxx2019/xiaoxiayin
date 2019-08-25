var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 47.6062, lng: -122.3321},
       zoom: 1,
       mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    map.data.addListener('click', function(event) {
       var pos = event.feature.getProperty("position");
       var comp = event.feature.getProperty("company");
       var time = event.feature.getProperty("time");
       var learn = event.feature.getProperty("learn");
       infowindow.setContent('<h2>' + pos + '</h2>' + '<h3>' + comp + '</h3>' + '<h3>' + time + '</h3>' + '<a href=' + learn + '>Learn more about my experience at ' + comp + '</a>' );
       infowindow.setPosition(event.feature.getGeometry().get());
       infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
       infowindow.open(map);
    });

    map.data.loadGeoJson('geo.json');
    map.data.setStyle(function(feature) {
        return {icon: feature.getProperty('icon')};
    });
};
