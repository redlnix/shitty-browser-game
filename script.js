document.getElementById("daniel123").onclick = function() {
    alert("you clicked");
}

document.getElementById("thomas123").onclick = function() {
    document.body.classList.toggle("bomb");
}

setInterval(()=> {
const goom = document.getElementById('goominput').checked
let speed = ''
if (goom) {
speed = 1
} else {
speed = 20
}

document.getElementById('goom').style.transform = `rotate(${(Date.now() / speed) % 360}deg)`
})