
var buttonSelected = null;

var setButton = function(selected){
	buttonSelected = selected;
	//console.log("selected: "+ selected)
	console.log("button: "+ buttonSelected)
}

$(document).ready(function(){
	$("#inputField").keyup(function(e){
		console.log("input: " + $("#inputField").val());
		e.preventDefault();
		var myurl = "http://api.funtranslations.com/translate/" + buttonSelected + ".json?text=" +$("#inputField").val();
		$.ajax({
			url: myurl,
			dataType: "json",
			success: function(json){
				console.log("data: " + json);
				//var everything = contents[translation]; //not exactly sure that gets it
				var everything ="";
				$("translatedField").html(everything);
			}
		})
	})
})

