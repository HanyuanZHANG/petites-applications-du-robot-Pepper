session.subscribeToEvent("Dialog/Answered", function(text) {
	console.log('Bot: '+text);
	// alert('tts:' + text);
	var res = text.replace(" ' ", "'");
	res = res.replace(" - ", "-");
	res = res.replace(" , ", ", ");
	res = res.replace(" . ", ". ");
  session.raiseEvent('chg_lng/tts', res);
});

session.subscribeToEvent("Dialog/LastInput", function(text) {
	console.log('Human: '+text);
	if (text!==''){
		// alert('stt:' + text);
		var res = text.replace(" ' ", "'");
		res = res.replace(" - ", "-");
		session.raiseEvent('chg_lng/stt', res);
	}
});

function language_select(language){
  $("#"+language).on('click', function(){
    // alert('ChangeApps/'+app_name);
    select_effect(language);
    session.raiseEvent('chg_lng/Lng', language);
  });
}

function select_effect(language){
  var audio = document.getElementById("audio");
  audio.play();
  document.getElementById(language).style.color = "#ff7900";
  // document.getElementById(app_name).style.textDecoration = "underline";
}

$(document).ready(function(){
  session.raiseEvent('chg_lng/ready', 1);

  language_select("French");
  language_select("English");

});
