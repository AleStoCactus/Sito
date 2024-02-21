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
	alert("sono le ore di quest'ora e il giorno di oggi");
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
function contatti() {
	window.location.assign("./contatti/contatti.html");
}
function storia() {
	window.location.assign("../storia.html");
}


// contatti

function ivy() {
	alert("Lo sviluppo del sito web è stato ultimato e soddisfa pienamente i criteri stabiliti.");
}
function ryl() {
	alert("Lo sviluppo del sito web è stato ultimato ma non soddisfa pienamente i criteri stabiliti.");
}
function anm() {
	alert("Lo sviluppo del sito web non è stato ultimato e non soddisfa pienamente i criteri stabiliti.");
}
function bjm() {
	alert("Lo sviluppo del sito web non è stato ultimato o non è stato implementato correttamente.");
}