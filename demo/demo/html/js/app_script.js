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

function product_select(product){
  $("#"+product).on('click', function(){
	location.href = 'watch.htm'
    // alert('ChangeApps/'+app_name);
    select_effect(product);
    session.raiseEvent('demo/product', product);
  });
}

function select_effect(product){
  var audio = document.getElementById("audio");
  audio.play();
  document.getElementById(product).style.color = "#ff7900";
  // document.getElementById(app_name).style.textDecoration = "underline";
}

$(document).ready(function(){
  session.raiseEvent('demo/ready', 1);

  product_select("smartband");
  product_select("smartwatch");

});
