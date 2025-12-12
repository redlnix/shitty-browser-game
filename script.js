//random number generator
let ranum = Math.floor(Math.random() * 4) + 1;

document .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    //let is used to declare a variable, to change do : ranum = Math.floor(Math.random() * 4) + 1
        let ranum = Math.floor(Math.random() * 4) + 1;
    //
        console.log("num is ", ranum)
    }
})


//hiding the skill checks or whatever
document .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    document.getElementById("left").style.display = "none";
     document.getElementById("right").style.display = "none";
      document.getElementById("up").style.display = "none";
       document.getElementById("down").style.display = "none";    
        console.log(ranum)
    }   
    if (ranum === 1) {
        console.log("left")
    }
}    
 ) 
//



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
