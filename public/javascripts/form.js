html = new Array()
html.push("<p>send postcard to:<br/><input style='width: 100%;' type='text' id='message-to' /></p>")
html.push("<p>message:<br/><textarea style='width: 100%;'  id='message-text'></textarea></p>")

$("#postcard-form").html(html.join(""))