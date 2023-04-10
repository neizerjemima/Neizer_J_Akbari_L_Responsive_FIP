(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/



// History Section  
  // Function to play video on button click
//   function playVideo(videoId) {
// 	let video = document.getElementById(videoId);
// 	if (video.style.display == 'none') {
// 	video.style.display = 'block';
// 	video.play();
//   } else {
// 	video.style.display = 'none';
//     video.pause();
//   }
// }

let vid = document.getElementById("video-1"),
	vide = document.getElementById("video-2"),
	video = document.getElementById("video-3");
	icon = document.querySelector(".fa.fa-play");

    
function playVid() { 
 
  if (vid.style.display == 'none') {
    vid.style.display = 'block';
    vid.play();
	icon.className = "fa fa-close";
  } else {
  
    vid.style.display = 'none';
    vid.pause();
	icon.className = "fa fa-play";
 }

} 

function playVide() { 
 
	if (vide.style.display == 'none') {
	  vide.style.display = 'block';
	  vide.play();
	} else {
	
	  vide.style.display = 'none';
	  vide.pause();
   }
  
}


function playVideo() { 
 
	if (video.style.display == 'none') {
	  video.style.display = 'block';
	  video.play();
	} else {
	
	  video.style.display = 'none';
	  video.pause();
   }
  
}

// function playVideo() { 
 
// 	if (vid.style.display == 'none') {
// 	  vid.style.display = 'block';
// 	  vid.play();
// 	} else {
	
// 	  vid.style.display = 'none';
// 	  vid.pause();
//    }
  
// }

// vid.addEventListener('click', playVid)
// vide.addEventListener('click', playVide)
// video.addEventListener('click', playVideo)


let zimaBox = document.querySelectorAll(".pro a"),
    lightbox = document.querySelector('#lightbox');



function loadZima() {
	lightbox.querySelector(".zimaImg").src = fruitName[this.dataset.zima].main;
    lightbox.querySelector(".zimaName").textContent = fruitName[this.dataset.zima].name;
    lightbox.querySelector(".description").textContent = fruitName[this.dataset.zima].description;
    lightbox.querySelector(".ingredient").textContent = fruitName[this.dataset.zima].ingredient;
    
    // lightbox.querySelector(".package").textContent = fruitName[this.dataset.fruit].pack;

    lightbox.querySelector(".pack").src = fruitName[this.dataset.zima].pack;
    // lightbox.querySelector(".totaLprice").textContent = fruitName[this.dataset.fruit].totaLprice;
}


let fruitName = {
	original : {
		main: "images/popup-original.png",
		name: "ZIMA ORIGINAL",
		description: "Zima Original is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
		ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
		pack: "images/original-pack.png",
	},
	lemon : {
	  main: "images/popup-lemon.png",
	  name: "ZIMA LEMON",
	  description: "Zima Lemon is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
	  ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
	  pack: "images/lemon-pack.png",
  	},
	saffron: {
	  main: "images/popup-saffron-blueberry.png",
	  name: "ZIMA SAFFRON BLUEBERRY",
	  description: "Zima Saffron Blueberry is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
	  ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
	  pack: "images/blueberry-pack.png",
	},
	rose : {
		main: "images/popup-rose-apple.png",
		name: "ZIMA ROSE APPLE",
		description: "Zima Rose Apple is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
		ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
		pack: "images/rose-pack.png",
	},

	grapefruit : {
		main: "images/popup-grapefruit.png",
		name: "ZIMA GRAPEFRUIT",
		description: "Zima Grapefruit is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
		ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
		pack: "images/grapefruit-pack.png",
	},
	
	mint : {
		main: "images/popup-mint-lemon.png",
		name: "ZIMA MINT LEMON",
		description: "Zima lemon with a hint of mint is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
		ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
		pack: "images/mint-pack.png",
	},

	orange : {
		main: "images/popup-orange.png",
		name: "ZIMA ORANGE",
		description: "Zima Orange is the only alcohol beverage with zero calories   and maximum Zima taste! 500Ml - Just the right size to grab and go!",
		ingredient: " Every effort is taken to ensure that the ingredients and nutritional information listed on our website is accurate, however, this information may change from time to time. Please always refer to the product package for the most current and accurate ingredient and nutrition information. If you require further assistance, please contact our Consumer Relations team. ZERO CALORIES.",
		pack: "images/orange-pack.png",
	},

	applelemon : {
		main: "images/popup-mint-lemon.png",
		name: "Zima APPLE LEMON",
		description: "COMING SOON",
		pack: "images/orange-pack.png",
	},

	coconut : {
		main: "images/popup-mint-lemon.png",
		name: "ZIMA COCNUT ORANGE",
		description: "COMING SOON",
		pack: "images/grapefruit-pack.png",
	},

	blood : {
		main: "images/popup-mint-lemon.png",
		name: "ZIMA CINNAMON Lime",
		description: "COMING SOON",
		pack: "images/orange-pack.png",
	},

	vodka : {
		main: "images/popup-mint-lemon.png",
		name: "ZIMA MINT LEMON",
		description: "COMING SOON",
		pack: "images/grapefruit-pack.png",
	},

  
  }
  


	zimaBox.forEach(drink => drink.addEventListener('click', loadZima));