// JavaScript Document
let page0=document.getElementById("page0");
let page1=document.getElementById("page1");
let a_page0=document.getElementById("a_page0");
let a_page1=document.getElementById("a_page1");




function clickl(){
	console.log("gauche");
	page0.src="images/page0.png";
	page1.src="images/page1.png";
	a_page0.href="site.html#Book Pres";
	a_page1.href="BookArtistique.html#Book Pj1";
	a_page0.onclick="return false;";
}
function clickr(){
	console.log("droite");
	page0.src="images/page2.png";
	page1.src="images/page3.png";
	a_page0.href="BookArtistique.html#Book Pj2";
	a_page1.href="BookArtistique.html#Book Pj3";
	a_page0.onclick="";
}
