function DoTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var T = h + ":";
    if(m<=9) {
	T = T + "0" + m;
    } else {
	T = T + m;
    }
    document.getElementById('timeButton').innerHTML = T;
}

function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
function validateName() {
    var x = document.getElementById('fname').value;
    var y = getCookieValue("username");
    if(x==y) {
	document.getElementById('rName').innerHTML = "Welcome, " + y + "!";
	return 0;
    }
    //var x = document.forms["myForm"]["fname"].value;
    if(x=="") { // Name is empty
	alert("Name must be filled out");
	return false;
    } else { // Name is not empty
	document.getElementById('rName').innerHTML = "Welcome, " + x + "!";
	document.cookie = "username=" + x; // Create a cookie with name "username" and value x.
    }
}

function validateNote() {
    var x = document.getElementById('noteArea').value;
    if(x=="") { // Note is empty.
	alert("Please fill in some content.");
	return false;
    } else {
	document.getElementById('status').innerHTML = "Note saved.";
	document.getElementById('note').innerHTML = x + '<br><p style="color: #ff0000;" onclick="return deleteNote()">[X]</p>';
	document.cookie = "note=" + x;
    }
}
function deleteNote() {
    document.cookie = "note=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.getElementById('note').remove();
    document.getElementById('status').innerHTML = "Note deleted.";
}

function bootStrap() {
    if(getCookieValue("username")!="") {
    } else {
	window.location = "./setup.html";
    }
    setTheme("");
    if(getCookieValue("note")!="") {
	document.getElementById('note').innerHTML = getCookieValue("note") + '<br><p style="color: #ff0000;" onclick="return deleteNote()">[X]</p>';
    } else {
	document.getElementById('note').innerHTML = '<p>Add new Note:</p><textarea id="noteArea" rows="4" cols="50">Lorem Ipsum dolor sit amet.</textarea><br><br><div class="button" onclick="return validateNote()">Submit</div>';
    }
    document.getElementById('title').innerHTML = getCookieValue("username") + "'s Dashboard";
    document.getElementById('h2').innerHTML = getCookieValue("username") + "'s Dashboard";
}

function setTheme(x) {
    if(x=="") {
	var theme = getCookieValue("theme");
    } else {
	var theme = x; // This is needed for the testing out of different Themes.
    }
    //var theme = getCookieValue("theme");
    //console.log(theme);

    if(theme=="WolkenJPEG") { document.getElementById('body').style = "background-image: url(img/bg.jpg);background-size:cover;font-family:sans-serif;"; }
    if(theme=="WolkenSVG") { document.getElementById('body').style = "background-image: url(img/clouds.svg);background-size:cover;font-family:sans-serif;"; }
    if(theme=="SkySVG") { document.getElementById('body').style = "background-image: url(img/sky.svg);background-size:cover;font-family:sans-serif;"; }

    if(x!="") {
	document.getElementById('status').innerHTML = "Theme set!";
	document.getElementById('themeChoose').remove();
	document.getElementById('goBack').innerHTML = "<div class=\"button\" onclick=\"window.location = './index.html';\">Go Back</div>";
    }
}

function removeAll() {
    alert("Removing all Data...");
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "note=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert("All User Data removed! You will be moved to the Installer!");
    window.location = "./setup.html";
}
