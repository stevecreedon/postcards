html = new Array()
html.push("<form id='postcard-form'");
html.push("<p><input style='width: 100%;' placeholder='your email address' type='text' id='from' /></p>");
html.push("<p><input style='width: 100%;' placeholder='email this postcard to' type='text' id='to' /></p>");
html.push("<p><textarea style='width: 100%; height: 100px;' placeholder='your message' id='message'></textarea></p>");
html.push("</form>");

$("#postcard-form").html(html.join(""));

$(' [placeholder] ').defaultValue();
