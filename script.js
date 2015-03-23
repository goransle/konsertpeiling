$(document).ready(function(){
	//Starter geoposisjonering
	watchFunc();
	//
	$("#hi").click(function () {
		$("#resultat").empty();
		var coords = $("#locationInfo").text();
		console.log(coords);
		var splits = coords.split(", ");
		var lat = splits[0];
		var long = splits[1];

		var kvarteretlat = 60.389923;
		var kvarteretlong = 5.321825;

		var a = getDistanceFromLatLonInKm(lat, long, kvarteretlat, kvarteretlong);
		$("#resultat").append(a.toFixed(2) + " km");
	});
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1);
	var a =
		Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
		Math.sin(dLon/2) * Math.sin(dLon/2)
	;
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180);
}
function successCallback(position)
{

	if (position.coords.latitude === 0 && position.coords.longitude === 0) {
		document.getElementById("locationInfo").innerHTML = ('Unable to acquire your location');
	}

	document.getElementById("locationInfo").innerHTML =
		position.coords.latitude + ", " + position.coords.longitude;
}
function errorCallback(error)
{
	var errorInfo = document.getElementById("locationInfo");

	switch (error.code)
	{
		case error.PERMISSION_DENIED:
			errorInfo.innerHTML = "User denied the request for Geolocation.";
			break;
		case error.POSITION_UNAVAILABLE:
			errorInfo.innerHTML = "Location information is unavailable.";
			break;
		case error.TIMEOUT:
			errorInfo.innerHTML = "The request to get user location timed out.";
			break;
		case error.UNKNOWN_ERROR:
			errorInfo.innerHTML = "An unknown error occurred.";
			break;
	}
}
function watchFunc()
{
	if (navigator.geolocation)
	{
		watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);
	}
	else
	{
		document.getElementById("locationInfo").innerHTML = "Geolocation is not supported.";
	}
}
function stopWatchFunc() 
{
	if (navigator.geolocation) 
	{
		navigator.geolocation.clearWatch(watchId);
	} 
	else 
	{
		document.getElementById("locationInfo").innerHTML = "Geolocation is not supported.";
	}
}  