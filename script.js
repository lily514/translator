
var buttonSelected = 'australian'; //default. null is a bad value to set it to

var setButton = function(selected){
	buttonSelected = selected;
	//console.log("selected: "+ selected)
	console.log("button: "+ buttonSelected)
}

$(document).ready(function(){ // im pretty sure there's a way to pass a parameter from the html to the js function so we can differentiate what button is selected right now
	$("#inputField").keyup(function(e){
		console.log("input: " + $("#inputField").val());
		e.preventDefault();
		var myurl = "http://api.funtranslations.com/translate/" + buttonSelected + ".json?text=" +$("#inputField").val();
		$.ajax({
			url: myurl,
			dataType: "json",
			success: function(json){
				console.log("data: " + json);

				$.each(json,function(key, value){
					console.log("key " +key+ " value "+value)
					$.each(value, function(key,value){
						console.log("key " +key+ " value "+value)
					})
				})
				//var everything = contents[translation]; //not exactly sure that gets it
				var everything ="";
				$("translatedField").html(everything);
			}
		})
	})
})

