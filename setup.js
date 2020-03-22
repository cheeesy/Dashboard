function Setup() {
}

function validateName() {
    var x = document.getElementById('fname').value;
    if(x=="") {
	alert("Name must be filled out");
	return false;
    } else {
	document.cookie = "username=" + x; // Create a cookie with value x
	document.getElementById('rName').innerHTML = "Welcome, " + x + "!\nYour name has been saved!";
	window.setTimeout(console.log("Cookie saved (username)!", 3000));
	document.getElementById('status').innerHTML = "Username set!";
	document.getElementById('demo').remove();
    }
}
function checkTheme() {
    var r1 = document.getElementById('wjpg').checked;
    var r2 = document.getElementById('wsvg').checked;
    var r3 = document.getElementById('sky').checked;
    if(r1==true) { document.getElementById('rTheme').innerHTML = "WolkenJPEG"; }
    if(r2==true) { document.getElementById('rTheme').innerHTML = "WolkenSVG"; }
    if(r3==true) { document.getElementById('rTheme').innerHTML = "SkySVG"; }

    if(r1==true) { document.cookie = "theme=WolkenJPEG"; }
    if(r2==true) { document.cookie = "theme=WolkenSVG"; }
    if(r3==true) { document.cookie = "theme=SkySVG"; }

    document.getElementById('status').innerHTML = "Theme set!";
    document.getElementById('themeChoose').remove();
    document.getElementById('goBack').innerHTML = "<div class=\"button\" onclick=\"window.location = './index.html';\">Go Back</div>";
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
}
