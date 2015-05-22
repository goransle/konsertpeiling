window.onload = function () {
	// TODO:: Do your initialization job

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back")
			window.history.back();
	});

	// Sample code
	var textbox = document.querySelector('.contents');
	textbox.addEventListener("click", function(){
		box = document.querySelector('#textbox');
		box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
	});

}
//multiple select box of genres
jQuery.fn.multiselect = function() {
	$(this).each(function() {
		var checkboxes = $(this).find("input:checkbox");
		checkboxes.each(function() {
			var checkbox = $(this);
			// Highlight pre-selected checkboxes
			if (checkbox.prop("checked"))
				checkbox.parent().addClass("multiselect-on");

			// Highlight checkboxes that the user selects
			checkbox.click(function() {
				if (checkbox.prop("checked"))
					checkbox.parent().addClass("multiselect-on");
				else
					checkbox.parent().removeClass("multiselect-on");
			});
		});
	});
};