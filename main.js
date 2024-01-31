function auth() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "12345" && password == "admin") {
		alert("Login Successfully");
		window.location.assign("storia.html");
	}
	else {
		alert("Invalid Information");
		document.title = "Caught your pay-card xd";
		return;
	}
}
function ale() {
	var immagini = document.getElementById("ale");
	if (immagini.style.display != "none") {
		immagini.style.display = "none";
	} else {
		immagini.style.display = "block";
	}
}
function lobotomia() {
	alert("sono le ore di quest'ora e il giorno di oggi\n\nFIRE IN THE HOLE");
}
function lag() {
	alert("Non e'.. poss.. ch... sono.. riusc. to.. a.. fare... quest.. sito..")
}
function forgot() {
	alert("Username: 12345, Password: admin")
}
function home() {
	window.location.assign("index.html");
}
function storia() {
	window.location.assign("../storia.html");
}