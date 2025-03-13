$(document).ready(function () {
    console.log("WHATEVER YOU DO, DO NOT HOLD YOUR MOUSE OVER THE BIG SEAL IN THE ABOUT PAGE FOR 10 SECONDS!!!!!");
   });

   function handleMouseOver(imgElement, callback) {
    let timer;
//   timer start
    imgElement.addEventListener("mouseover", function() {
      timer = setTimeout(callback, 10000);
      console.log("ITS NOT TOO LATE!! TURN BACK NOW!!!");
    });
//  timer stop
    imgElement.addEventListener("mouseout", function() {
      clearTimeout(timer);
      console.log("You are safe!");
    });
  }
  
  // Easter egg
  const myImage = document.getElementById("easterEgg");
  
  handleMouseOver(myImage, function() {
    // Code to execute after 10 seconds of hovering
    console.log("GET SEALED!!!!!!!!!!!");
    myImage.src = "images/sealReact.png";
    
  });