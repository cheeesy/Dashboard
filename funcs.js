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
}

function setTheme() {
    var theme = getCookieValue("theme");
    console.log(theme);

    if(theme=="WolkenJPEG") { document.getElementById('body').style = "background-image: url(bg.jpg);background-size:cover;font-family:sans-serif;"; }
    if(theme=="WolkenSVG") { document.getElementById('body').style = "background-image: url(clouds.svg);background-size:cover;font-family:sans-serif;"; }
    if(theme=="SkySVG") { document.getElementById('body').style = "background-image: url(sky.svg);background-size:cover;font-family:sans-serif;"; }
}

function bootStrap() {
    setTheme();
    var y = getCookieValue("username");
    if(y!="") { document.getElementById('demo').remove() }
    if(getCookieValue("theme")!="") { document.getElementById('themeChoose').remove() }
}

function removeAll() {
    console.log("Close your browser to delete all cookies! There is no expiry date.");
}
