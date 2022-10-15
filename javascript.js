//Make disclaimer statement when click on navbar link "Disclaimer"
function disclaimer() {
	alert("The purpose of this website is to explore various types of typographic and layout styles for text documents, as an end-of-course project for the Information Modelling and Web Technologies module of the Masters Degree in Digital Humanities and Digital Knowledge at the University of Bologna, 2021-22, taught by Professor Fabio Vitali.\nThe documents contained in this web site have been selected for their length and complexity. Their publication here is not intended to be an alternative to, or to replace, their original locations, all of which are highlighted in the project's documentation.\nAll copyrights and related rights on the content remain with their original owners. All copyright on the typographic and layout choices are 2022 © Clio & Erato");
}

//Edition1: Sappho of Lesbos
//Poem1

//If Greek version is showing, hide it
//If index is showing, hide it
function showEnglishSappho1() {
	var x = document.getElementById("SapphoTextGreek1")
	var y = document.getElementById("SapphoIndex")
	if (x.style.display == "block")
		[x.style.display = "none"];
	if (y.style.display == "block")
		[y.style.display = "none"];
}

//If Greek version is hidden, show it
//If Greek version is showing, hide it, letting user toggle
function showGreekSappho1() {
	var x = document.getElementById("SapphoTextGreek1")
	var y = document.getElementById("SapphoIndex")
	if (x.style.display == "none") 
		[x.style.display = "block"];
	if (x.style.display == "block")
		[x.style.display = "none"];
	if (y.style.display == "block")
		[y.style.display = "none"];
}

//If index list is hidden, show it
function compareSappho1() {
	x = document.getElementById("SapphoIndex")
	if (x.style.display == "none")
		[x.style.display = "block"];
}

function showSappho11() {
	$('.sappho1').css('display', 'none');
	$('.stanza1').css('display', 'block');
}
function showSappho12() {
	$('.sappho1').css('display', 'none');
	$('.stanza2').css('display', 'block');	
}
function showSappho13() {
	$('.sappho1').css('display', 'none');
	$('.stanza3').css('display', 'block');
}
function showSappho14() {
	$('.sappho1').css('display', 'none');
	$('.stanza4').css('display', 'block');
}
function showSappho15() {
	$('.sappho1').css('display', 'none');
	$('.stanza5').css('display', 'block');
}
function showSappho16() {
	$('.sappho1').css('display', 'none');
	$('.stanza6').css('display', 'block');
}
function showSappho17() {
	$('.sappho1').css('display', 'none');
	$('.stanza7').css('display', 'block');
}

//Poem2

//If Greek version is showing, hide it
//If index is showing, hide it
function showEnglishSappho2() {
	var x = document.getElementById("SapphoTextGreek2")
	var y = document.getElementById("SapphoIndex")
	if (x.style.display == "block")
		[x.style.display = "none"];
	if (y.style.display == "block")
		[y.style.display = "none"];
}

//If Greek version is hidden, show it
//If Greek version is showing, hide it, letting user toggle
function showGreekSappho2() {
	var x = document.getElementById("SapphoTextGreek2")
	var y = document.getElementById("SapphoIndex")
	if (x.style.display == "none") 
		[x.style.display = "block"];
	if (x.style.display == "block")
		[x.style.display = "none"];
	if (y.style.display == "block")
		[y.style.display = "none"];
}

//If index list is hidden, show it
function compareSappho2() {
	x = document.getElementById("SapphoIndex")
	if (x.style.display == "none")
		[x.style.display = "block"];
}

function showSappho21() {
	$('.sappho2').css('display', 'none');
	$('.stanza1').css('display', 'block');
}
function showSappho22() {
	$('.sappho2').css('display', 'none');
	$('.stanza2').css('display', 'block');	
}
function showSappho23() {
	$('.sappho2').css('display', 'none');
	$('.stanza3').css('display', 'block');
}
function showSappho24() {
	$('.sappho2').css('display', 'none');
	$('.stanza4').css('display', 'block');
}
function showSappho25() {
	$('.sappho2').css('display', 'none');
	$('.stanza5').css('display', 'block');
}
function showSappho26() {
	$('.sappho2').css('display', 'none');
	$('.stanza6').css('display', 'block');
}

//Poem3

//If Greek version is showing, hide it
//If index is showing, hide it
function showEnglishSappho3() {
	var x = document.getElementById("SapphoTextGreek3")
	var y = document.getElementById("SapphoIndex")
	if (x.style.display == "block")
		[x.style.display = "none"];
	if (y.style.display == "block")
		[y.style.display = "none"];
}

//If Greek version is hidden, show it
//If Greek version is showing, hide it, letting user toggle
function showGreekSappho3() {
	var x = document.getElementById("SapphoTextGreek3")
	var y = document.getElementById("SapphoIndex")
	if (x.style.display == "none") 
		[x.style.display = "block"];
	if (x.style.display == "block")
		[x.style.display = "none"];
	if (y.style.display == "block")
		[y.style.display = "none"];
}

//If index list is hidden, show it
function compareSappho3() {
	x = document.getElementById("SapphoIndex")
	if (x.style.display == "none")
		[x.style.display = "block"];
}

function showSappho31() {
	$('.sappho3').css('display', 'none');
	$('.stanza1').css('display', 'block');
}
function showSappho32() {
	$('.sappho3').css('display', 'none');
	$('.stanza2').css('display', 'block');	
}
function showSappho33() {
	$('.sappho3').css('display', 'none');
	$('.stanza3').css('display', 'block');
}
function showSappho34() {
	$('.sappho3').css('display', 'none');
	$('.stanza4').css('display', 'block');
}

