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

    
function playVid() { 
 
  if (vid.style.display == 'none') {
    vid.style.display = 'block';
    vid.play();
  } else {
  
    vid.style.display = 'none';
    vid.pause();
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
