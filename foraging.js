const hide = new CustomEvent("hide", {
    detail: {
        direction: "hidden",
        time: Date.now()
}})
let hideTrigger = true;
let ranum = 0;
let state = "active"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
       ranum = Math.floor(Math.random() * 4) + 1;
    //
        console.log("num is ", ranum)
    }
})
//
//hiding the skill checks or whatever {
document.addEventListener("keydown", (event) => 

)


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
