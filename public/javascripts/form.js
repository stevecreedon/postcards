html = new Array()
html.push("<p><input style='width: 100%;' type='text' id='message-to' value='your email address' /></p>");
html.push("<p><input style='width: 100%;' type='text' id='message-to' value='email this postcard to'/></p>");
html.push("<p>message:<br/><textarea style='width: 100%; height: 100px;'  id='message-text'>personal message</textarea></p>");

$("#postcard-form").html(html.join(""))