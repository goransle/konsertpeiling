window.onload = function () {
	// TODO:: Do your initialization job

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back")
			window.history.back();
	});
	function vibrer(){
		navigator.vibrate(70);
	}
	$("a, button, input, tr, .button").click(function() {
		vibrer();
		console.log("vibrerer");
	});
}