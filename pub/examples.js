/* JS Library usage examples */
"use strict";


// Circle Generator
const nev = new makeNevBar();
const side = new makeSideBar();
addNevBarContent('Cat1', "cat_demo.html");
addNevBarContent('Cat2', "cat_demo.html");
addNevBarContent('Cat3', "cat_demo.html");


addSideBarContent('Cat1', "cat_demo.html");
addSideBarContent('Cat2', "cat_demo.html");
addSideBarContent('Cat3', "cat_demo.html");
var img = "<img src='food.jpg' class = 'center'>"
for(var i = 0; i < 10; i++){
	const d = document.createElement("div");
	d.innerHTML = img;
	$('body').append(d)
}


