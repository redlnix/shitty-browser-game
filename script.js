//random number generator
let ranum = 0;

document .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
       ranum = Math.floor(Math.random() * 4) + 1;
    //
        console.log("num is ", ranum)
    }
})
//


// DEBUG STUFF

//hiding the skill checks or whatever {
document .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    document.getElementById("left").style.display = "none";
     document.getElementById("right").style.display = "none";
      document.getElementById("up").style.display = "none";
       document.getElementById("down").style.display = "none";    

const event = new CustomEvent("hide", {
    detail: {
        direction: "hidden",
        time: Date.now()
        
    }
})













       ///////////////////////////////////////////////////////
//    if (ranum === 1) {
//        console.log("ranum is left")
//        document.getElementById("left").style.display = "block";
//    }
//    else if (ranum === 2) {
//        console.log("ranum is right")
//        document.getElementById("right").style.display = "block";
//    }
//   else if (ranum === 3) {
//        console.log("ranum is up")
//
//    }    
}})     







// debugging things
    document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        console.log("Right")
    }
    if (event.key === "ArrowUp") {
        console.log("Up")
    }
    if (event.key === "ArrowDown") {
        console.log("Down")
    }
    if (event.key === "ArrowLeft") {
        console.log("Left")
    }
});
//
