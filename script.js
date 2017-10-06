$(document).ready(function(){
	$("#inputField").keyup(function(e){
		console.log("input: " + $("#inputField").val());
		e.preventDefault();
		var myurl = "http://api.funtranslations.com/translate/ermahgerd.json?api_key=9mxYi8zQtGhYZVvFXRLYPweF&text=" +$("#inputField").val();
		//9mxYi8zQtGhYZVvFXRLYPweF 
		// API KEY ^^
		$.ajax({
			url: myurl,
			dataType: "json",
			success: function(json){
				//console.log("data: " + json);
				var trans= json.contents.translated; //not exactly sure that gets it
				$("#translatedField").val(trans);
			}
		})
	})
})

