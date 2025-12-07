document.getElementById("daniel123").onclick = function() {
    alert("you clicked");
}

document.getElementById("thomas123").onclick = function() {
    document.body.classList.toggle("bomb");
}

setInterval(()=> {
document.getElementById('goom').style.transform = `rotate(${(Date.now() / 10) % 360}deg)`
})