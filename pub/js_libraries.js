/* JS Libraries */
"use strict";
const contentID = [];
let nevBarBottom = 0
let materialsBottom = 0
function makeNevBar(){
	const nevBar = document.createElement('div')
	nevBar.style = '' +
		'position: relative; ' +
		'top: 10px; ' +
		'width: 80%;' +
		' height: 200px; ' +
		'margin: auto; ' +
		'background-color: Aqua;' +
		'border: solid 2px purple;'
	const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
	$(nevBar).attr('id', 'nevBar');
	body.append(nevBar);



}

function makeSideBar(){
	const sideBar = document.createElement('div')
	let toTop = "<button id='toTop' onclick='goToTop()' style='margin-left: 12px;'>Go To Top</button>";
	sideBar.style = '' +
		'position: fixed; ' +
		'top: 15%; ' +
		'right: 50px; ' +
		'width: 100px;' +
		' height: 500px; ' +
		'margin: 10px; ' +
		'background-color: Aqua;' +
		'visibility: hidden;'
	const body = $('body') 
	$(sideBar).attr('id', 'sideBar');
	body.append(sideBar);
	sideBar.innerHTML = toTop;
}

function goToTop(){
	//alert("toTop");
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function makeSideStepBar(title){
	const sideStepBar = document.createElement('div')
	let toTop = "<button id='toTop' onclick='goToTop()' style='margin-left: 72px;'>" + title + "</button>";
	let add = "<button id='add' onclick='addSupplies()' style='margin-left: 72px;'>" + "ADD" + "</button>";

	sideStepBar.style = '' +
		'position: fixed; ' +
		'top: 15%; ' +
		'right: 50px; ' +
		'width: 200px;' +
		' height: 500px; ' +
		'margin: 10px; ' +
		'background-color: Aqua;' +
		'visibility: hidden;'
	const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
	$(sideStepBar).attr('id', 'sideStepBar');
	body.append(sideStepBar);
	sideStepBar.innerHTML = toTop + add;
	
}

//=========================Checking if rolled out===================================

window.addEventListener('scroll', this.scrollHandle, true);

function scrollHandle () {
	try {
		const nevBar = document.getElementById('nevBar').getBoundingClientRect();
		nevBarBottom = nevBar.bottom;
	}catch(e){
		console.log("materials");
	}

	try {
		const materials = document.getElementById('materials').getBoundingClientRect();
		materialsBottom = materials.bottom;
	}catch(e){
		console.log("nevBar");
	}
	if (nevBarBottom != 0){							//this mean nevBar is focused
		if (nevBarBottom > -10) {
			//console.log('Top nevBar available');
			//$('#sideBar').css("visibility", "hidden");
			$('#sideBar').fadeOut()
		} else {
			$('#sideBar').css("visibility", "visible");
			$('#sideBar').fadeIn()
		}
	}
	if(materialsBottom != 0){
		if (materialsBottom > -10) {
			//console.log('Top nevBar available');
			//$('#sideStepBar').css("visibility", "hidden");
			$('#sideStepBar').fadeOut();
		} else {
			$('#sideStepBar').css("visibility", "visible");
			$('#sideStepBar').fadeIn();
		}
	}

}

//==================================Add Stuff==================================
function addNevBarContent(name, href){				//add content to sideBar
	const content = document.createElement('a');
	content.style = '' +
		'height: 50%;' +
		'margin-top: 30px;' +
		'margin-left:11%;' +
		'margin-right: 11%;' + 
		'display: inline-block;'
	content.setAttribute("href", href);
	content.innerHTML = name;
	$('#nevBar').append(content);

}



function addSideBarContent(name, href){				//add content to sideBar
	const content = document.createElement('a');
	content.style = '' +
		'height: 40px;' +
		'margin-top: 10px;' +
		'text-align:center;'
	content.setAttribute("href", href);
	content.innerHTML = name;
	$('#sideBar').append(content);

}

function addSideStepBarContent(name){				//add content to sideBar
	let click = 0;
	const content = document.createElement('p');
	content.style = '' +
		'text-align:center;' +
		'cursor: default;'
	content.innerHTML = name;
	content.onclick = function(){
		click++;
		if(click == 1){
			setTimeout(function(){
				if(click == 1){
					console.log("clicked");
					content.innerHTML = name.strike();
				}else{
					console.log("dbclicked")
					content.innerHTML = name;
				}
				click = 0
			}, 250)
		}
		
	}
	
	$('#sideStepBar').append(content);

}

function getContent(){
	const container = document.getElementById("materials");
	//alert(container.children.length);
	for(let i = 0; i < container.children.length; i++){
		//alert(container.children[i].innerHTML);
		addSideStepBarContent(container.children[i].innerHTML);
	}

}

function addSupplies() {
  var supply = prompt("Please add your custom material", "ADDING...");
  if (supply != null) {
	  addSideStepBarContent(supply);
  }
}






