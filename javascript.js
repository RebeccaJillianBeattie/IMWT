//Make disclaimer statement when click on navbar link "Disclaimer"
function disclaimer() {
	alert("The purpose of this website is to explore various types of typographic and layout styles for text documents, as an end-of-course project for the Information Modelling and Web Technologies module of the Masters Degree in Digital Humanities and Digital Knowledge at the University of Bologna, 2021-22, taught by Professor Fabio Vitali.\nThe documents contained in this web site have been selected for their length and complexity. Their publication here is not intended to be an alternative to, or to replace, their original locations, all of which are highlighted in the project's documentation.\nAll copyrights and related rights on the content remain with their original owners. All copyright on the typographic and layout choices are 2022 © Clio & Erato");
}

//Edition1: Sappho of Ancient Greece
//Poem1
function showGreekSappho1() {
	var x = document.getElementById("SapphoTextGreek1");
	var y = document.getElementById("SapphoTextEnglish1");
	x.style.display = "block";
	y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
	$('.sappho1').css('display', 'block');
	$('.indexcompare').css('display', 'none');
}

function hideGreekSappho1(){
	var x = document.getElementById("SapphoGreekText1");
	var y = document.getElementById("SapphoTextEnglish1");
	$('.sappho1').css('display', 'block');
	$('.indexcompare').css('display', 'none');
	x.style.display = "none";
	y.removeAttribute("class");
	$('.indexcompare').css('display', 'none');
}

function compareSappho1() {
	var x = document.getElementById("SapphoGreekText1");
	var y = document.getElementById("SapphoEnglishText1");
	x.style.display = "block";
	y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
	$('.indexcompare').css('display', 'block');
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
function showGreekSappho2() {
	var x = document.getElementById("SapphoTextGreek2");
	var y = document.getElementById("SapphoTextEnglish2");
	x.style.display = "block";
	y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
	$('.sappho2').css('display', 'block');
	$('.indexcompare').css('display', 'none');
}

function hideGreekSappho2(){
	var x = document.getElementById("SapphoGreekText2");
	var y = document.getElementById("SapphoTextEnglish2");
	$('.sappho2').css('display', 'block');
	$('.indexcompare').css('display', 'none');
	x.style.display = "none";
	y.removeAttribute("class");
	$('.indexcompare').css('display', 'none');
}

function compareSappho2() {
	var x = document.getElementById("SapphoGreekText2");
	var y = document.getElementById("SapphoEnglishText2");
	x.style.display = "block";
	y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
	$('.indexcompare').css('display', 'block');
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
function showGreekSappho3() {
	var x = document.getElementById("SapphoTextGreek3");
	var y = document.getElementById("SapphoTextEnglish3");
	x.style.display = "block";
	y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
	$('.sappho3').css('display', 'block');
	$('.indexcompare').css('display', 'none');
}

function hideGreekSappho3(){
	var x = document.getElementById("SapphoGreekText3");
	var y = document.getElementById("SapphoTextEnglish3");
	$('.sappho3').css('display', 'block');
	$('.indexcompare').css('display', 'none');
	x.style.display = "none";
	y.removeAttribute("class");
	$('.indexcompare').css('display', 'none');
}

function compareSappho3() {
	var x = document.getElementById("SapphoGreekText3");
	var y = document.getElementById("SapphoEnglishText3");
	x.style.display = "block";
	y.classList.add("col-sm-6", "col-md-5", "col-lg-6");
	$('.indexcompare').css('display', 'block');
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

