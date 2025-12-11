document.addEventListener("mousemove", function(event) {
    const follower = document.getElementById("follower");
    follower.style.left = event.clientX + "px";
    follower.style.left = event.clientY + "px";
});


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        console.log("right")
    }
    if (event.key === "ArrowUp") {
        console.log("Up")
    }
    if (event.key === "ArrowDown") {
        console.log("Down")
    }
    if (event.key === "ArrowLeft") {
        console.log("left")
    }



});
