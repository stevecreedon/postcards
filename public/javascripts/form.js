html = new Array()
html.push("<form id='postcard-form'");
html.push("<p><input style='width: 100%;' type='text' id='from' /></p>");
html.push("<p><input style='width: 100%;' type='text' id='to' /></p>");
html.push("<p><textarea style='width: 100%; height: 100px;'  id='message'></textarea></p>");
html.push("</form>");

$("#postcard-form").html(html.join(""));

alert($('#to').length)

$('#to').defaultValue({ defVal: 'email this postcard to' });
$('#from').defaultValue({ defVal: 'your email address' });
$("#message").defaultValue({ defVal: 'your message' });