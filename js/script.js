$(window).load(function(){
	//Starter geoposisjonering
	watchFunc();
	var coords = $("#locationInfo").text();
	var playedSongs = [""];
	var artister = [""];
	var lokaler = [""];
	var sjangre =[];
	var currentLokale = "";
	var currentTid = "";
	var currentDato = "";
	var currentPris = "";
	var currentBio = "";
	var currentReportasje = "";
	var currentIntervju = "";
	var distanse = 0;
	if (localStorage.getItem("testStorage") !== null) {
		var likte = JSON.parse(localStorage.getItem('testStorage'));
	}
	else{
		var likte = [];
	}
	$(".jp-next, .jp-previous").hide();
	$("#bioKnapp, #reportasje").css("opacity", "0.1");

	if (getQuery('Rock')=="true")
		sjangre.push("Rock"), console.log("ROCKK");
	if (getQuery('Folk')=="true")
		sjangre.push("Folk");
	if (getQuery('Pop')=="true")
		sjangre.push("Pop");
	if (getQuery('Hip-hop')=="true")
		sjangre.push("Hip-hop");
	if (getQuery('Country')=="true")
		sjangre.push("Country");
	if (getQuery('Klassisk')=="true"){
		sjangre.push("Klassisk");
	}
	if(sjangre.length === 0){
		sjangre.push("Folk");
		sjangre.push("Rock");
		sjangre.push("Pop");
		sjangre.push("Klassisk");
		sjangre.push("Hip-hop");
		console.log("tomt for sanger");
		console.log(playedSongs.length);
		console.log(artister.length);
	}


	var currentTrack = $("Intro - The Taxpayers").text();
	var split = currentTrack.split("-");
	var currentArtist = split[2];
	rekalkuler();
	$(".jp-playlist-item-remove").hide();
	clear();
	$(".jp-stop").hide();

	$(".jp-play").click(function() {
		$(".jp-play").hide();
		$(".jp-stop").show();
		$(".jp-next").fadeIn();
		$(".jp-previous").fadeIn();
		rekalkuler();
		console.log(sjangre);
		console.log(artister);
	});
	$("#liker").click(function(){
		if($.inArray(currentArtist, likte) == -1 && currentArtist != null){
			likte.push(currentArtist);
			localStorage.setItem('testStorage', JSON.stringify(likte));
		}

	});
	$("#jp_container_1").bind($.jPlayer.event.play, function(event) {
		updatePoster();
	});
	$("#jp_container_1").bind($.jPlayer.event.ended, function(event) {
		rekalkuler();
	});	
	$(".jp-stop").click(function() {
		$(".jp-stop").hide();
		$(".jp-play").show();
	});
	$(".jp-next").click(function() {
		rekalkuler();
		playSongs();
		$(".jp-play").hide();
		$(".jp-stop").show();
		if(playedSongs.length >= artister.length && playedSongs.length != 1){
			sjangre.push("Folk");
			sjangre.push("Rock");
			sjangre.push("Reggae");
			sjangre.push("Pop");
			sjangre.push("Klassisk");
			sjangre.push("Hip-hop");
			console.log("tomt for sanger");
			console.log(playedSongs.length);
			console.log(artister.length);

		}
	});
	$("#close").click(function() {
		$("#jquery_jplayer_1").jPlayer("play");
		$("#bioLyd audio").trigger("pause");
		$("#bioLyd").empty();
		$("#bioKnapp, #reportasje").css("opacity", "0.1");
		$(".jp-stop").show();
		$(".jp-play").hide();
	});
	//
	$("#hi").click(function () {
		rekalkuler();
		console.log($("#konserter").html());
		console.log(playedSongs);
		console.log(artister);
		console.log(lokaler);
		//console.log(currentArtist);

	});
	$("#info").click(function() {
		if(currentArtist == " Vestlandsfanden" || currentArtist == " Katzenjammer"){
			$("#bioKnapp").css("opacity", "1");
		}
		if(currentArtist == " Egil Olsen"){
			$("#reportasje").css("opacity", "1");
		}
	});
	$("#bioKnapp").click(function() {
		if(currentArtist == " Vestlandsfanden"){
			$("#jquery_jplayer_1").jPlayer("pause");
			$("#bioLyd audio").trigger("pause");
			$("#bioLyd").empty();
			$("#bioLyd").html("<audio src='/lydinnhold/test-vestlandsfanden.mp3' autoplay> </audio>");
		}
		if(currentArtist == " Katzenjammer"){
			$("#jquery_jplayer_1").jPlayer("pause");
			$("#bioLyd audio").trigger("pause");
			$("#bioLyd").empty();
			$("#bioLyd").html("<audio src='/lydinnhold/Katzenjammer.mp3' autoplay> </audio>");
		}
	});
	$("#reportasje").click(function() {
		if(currentArtist == " Egil Olsen"){
			$("#jquery_jplayer_1").jPlayer("pause");
			$("#bioLyd audio").trigger("pause");
			$("#bioLyd").empty();
			$("#bioLyd").html("<audio src='/lydinnhold/Reportasje.mp3' autoplay></audio>");
		}
	});
	$(".infoToggle").click(function () {
		$("#artistInfo, #jp_container_1").slideToggle();
	});

	//bruker jplayer http://jplayer.org/latest/demo-02-jPlayerPlaylist/
	var spilleliste = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Medicines",
			artist:"The Taxpayers",
			mp3:"/media/medicines.mp3",
			poster: "/media/medicines.jpg"
		}
	], {
		playlistOptions: {
			enableRemoveControls: false
		},
		supplied: "mp3, m4a",
		smoothPlayBar: true,
		keyEnabled: true,
		autoPlay: true,
		loopOnPrevious: true,
		audioFullscreen: false,
		optionsAudio: {
			size: {
				width:"360px",
				height:"400px",
				cssClass:""
			}
		}
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

	//Forsøk på funksjon som finner lokaler innen ein viss distanse
	function finnLokaler(posisjon, distanse){
		var splits = posisjon.split(", ");
		var lat = splits[0];
		var long = splits[1];
		//Henter greier ut frå JSON filer
		$.getJSON( "JSON/lokaler.json", function( json ) {
			$.each(json.konserter.lokaler, function( key, value ) {
				var x = getDistanceFromLatLonInKm(lat,long,value.lat,value.long);
				if(x < distanse){
					$("#lokaler").append(value.location + " " + x.toFixed(2) + " km" + "<br />");
					if ($.inArray(value.location, lokaler) == -1){
						lokaler.push(value.location);

					}
				}
				else{
					if($.inArray(value.location, lokaler) == 1){
						lokaler.pop(value.location);
					}
				}

			});
		});
		$.each(lokaler, function(key, value ){
			finnKonserter(lokaler[key]);
		});
	}
	//Finner konserter for et gitt lokale, få inn dato?
	function finnKonserter(lokale){
		$.getJSON( "JSON/lokaler.json", function( json ){
			$.each(json.konserter.konserter, function( key, value ){
				$.each(json.konserter.artister, function( x, y ){
					if(value.lokale == lokale){
						if(value.artist == y.navn){
							$.each(y.sjanger.split(", "), function( i, j ){
								if($.inArray(value.artist, artister) == -1 && $.inArray(j, sjangre) > -1){
									artister.push(value.artist);
								}
							});
						}
					}
				});
			});
		})
	}
	//finner sangene til ein gitt artist
	// får finne ut kva denne faktisk skal gjere
	function finnSanger(artist){
		$.getJSON( "JSON/lokaler.json", function( json ){
			$.each(json.konserter.artister, function( key, value){
				if(value.navn === artist){
					$("#artister").append("<strong>" +value.navn +"</strong>: <br />");
					$.each(value.sanger, function(x, y){
						$("#artister").append("<span class='sang'>" + y.navn + "</span><br />");
					});
				}
			});
		});
	}

	// Legger til sangene til en artist (får finne nærmeste artist i ein annen funksjon) i en spilleliste
	function playSongs(){
		$.getJSON( "JSON/lokaler.json", function( json ){
			$.each(json.konserter.artister, function( key, value){
				$.each(value.sanger, function(x, y){
					if(y.filplassering !== '' && $.inArray(value.navn, artister) == 1  && $.inArray(y.navn, playedSongs) == -1){
						spilleliste.add({
							title: y.navn,
							artist: value.navn,
							mp3: y.filplassering
						});
						playedSongs.push(y.navn);
						console.log(currentTrack);
					}
				});
			});
		});
	}
	function getInfo(artist){
		$.getJSON( "JSON/lokaler.json", function( json ){
			$.each(json.konserter.konserter, function( key, value){
				if(value.artist === artist){
					currentLokale = value.lokale;
					currentTid = value.klokka;
					currentDato = value.dato;
					currentPris = value.pris;
				}
			});
		});
	}
	function clear(){
		$("#resultat").empty();
		$("#lokaler").empty();
		$("#artister").empty();
		$("#konserter").empty();
		$(".hidden").hide();

	}
	function updatePoster(){
		currentTrack = $(".jp-playlist-current").text();
		split = currentTrack.split("  ");
		console.log(split[2]);
		currentArtist = split[2];
		trimmedArtist = currentArtist.replace(/\s/g, '');
		console.log(trimmedArtist);
		$.getJSON( "JSON/lokaler.json", function( json ){
			$.each(json.konserter.konserter, function( key, value){
				if( " " + value.artist == currentArtist){
					currentLokale = value.lokale;
					currentTid = value.klokka;
					currentDato = value.dato;
					currentPris = value.pris;
					degTilKonserten(currentLokale);
					$("#konsertInfo").html("Hvor: " + currentLokale + "<br /> Når: " + currentDato + " " + currentTid + "<br /> CC:" + currentPris)
				}
			});
		});
		$("#poster").attr("src", "/bilde/" + trimmedArtist + ".jpg");

		$("#artistInfo h1").html(currentArtist);
	}
	function degTilKonserten(lokale){
		var splits = coords.split(", ");
		var lat = splits[0];
		var long = splits[1];
		$.getJSON( "JSON/lokaler.json", function( json ){
			$.each(json.konserter.lokaler, function( key, value){
				if(value.location == lokale){

					a = getDistanceFromLatLonInKm(lat, long, value.lat, value.long);
					console.log(a);
					$("#distanse").html("Distanse: " + a.toFixed(2) + " km");
				}
			});
		});
	}
	function rekalkuler(){
		clear();
		//debug koordninater
		coords = "60.388685, 5.326101";
		//coords = $("#locationInfo").text();
		console.log(coords);
		finnLokaler(coords, 10);
		//finnKonserter("Det Akademiske Kvarter");
		//finnSanger("Gatas Parliament");
		playSongs();
		//denne gjer noe som ting til å fungere, baklengs
		artister.shift();
	}
	// Parse URL Queries Method
	function getQuery(query) {
		query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var expr = "[\\?&]"+query+"=([^&#]*)";
		var regex = new RegExp( expr );
		var results = regex.exec( window.location.href );
		if( results !== null ) {
			return results[1];
			return decodeURIComponent(results[1].replace(/\+/g, " "));
		} else {
			return false;
		}
	};
});