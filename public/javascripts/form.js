$(' [placeholder] ').defaultValue();
$("#send-message-button").click(function(){
	$.ajax({
		type: 'POST',
		 url: 'http://www.doglight.co.uk/postcards',
		 data: $('#postcard-data').serialize(),
		 timeout: 10000,
		 success: function(){alert('ok')}
	})
	
})

$.get({
	type: 'GET',
	 url: 'http://www.doglight.co.uk/postcards'
})