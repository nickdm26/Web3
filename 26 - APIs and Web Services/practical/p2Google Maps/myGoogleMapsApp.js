function initMap() {
    var myLatLng = {lat: -45.8788, lng: 170.5028};

    var map = new google.maps.Map(document.getElementById('divMapCanvas'), {
        zoom: 14,
        center: myLatLng
    });
		
	map.addListener('click', function(e){
		marker = new google.maps.Marker({
			position: e.latLng,
			map: map,
			title: document.getElementById('txtMarkerCaption').value
		});
	});
}