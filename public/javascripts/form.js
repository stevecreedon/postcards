html = new Array()
html.push("<form id='postcard-data'>");
html.push("<p><input style='width: 100%;' placeholder='your email address' type='text' id='from' /></p>");
html.push("<p><input style='width: 100%;' placeholder='email this postcard to' type='text' id='to' /></p>");
html.push("<p><textarea style='width: 100%; height: 100px;' placeholder='your message' id='message'></textarea></p>");
html.push("</form>");
html.push("<button id='send-message-button'>send postcard</button>");

$("#postcard-form").html(html.join(""));

$(' [placeholder] ').defaultValue();
$("#send-message-button").click(function(){
	consloe.log($('#postcard-data').serialize());
	$.ajax({
		type: 'POST',
		 url: 'http://www.doglight.co.uk/postcards',
		 data: $('#postcard-data').serialize(),
		 success: function(){$.growlUI('Growl Notification', 'your postcard has been sent')}
	})
	
})

$.get({
	type: 'GET',
	 url: 'http://www.doglight.co.uk/postcards'
})