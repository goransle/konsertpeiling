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
	$("#lydAv").click(function(){
		addStorage();
	});
	$("#lydPa").click(function(){
		localStorage.removeItem("lydAv");
		sessionStorage.removeItem("loaded");
	});
}
function addStorage() {
	var key = "test";
	var data = "test";
	/* Set the session storage item */
	if ("localStorage" in window) 
	{
		localStorage.setItem("lydAv", "yes");
	} 
}