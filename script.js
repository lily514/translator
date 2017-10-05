$(document).ready(function(){ // im pretty sure there's a way to pass a parameter from the html to the js function so we can differentiate what button is selected right now
	$("#inputField").keyup(function(){
		var url = "http://api.funtranslations.com/translate/?" //+ whatever button is clicked
			+$("#inputField").val();
		$.getJSON(url,function(data){
			var everything = contents[translation]; //not exactly sure that gets it
			$("translatedField").html(everything);
		})
	})
})
