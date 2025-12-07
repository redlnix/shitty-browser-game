const bar = document.getElementById('fishing-fill')
let Barheight = 70
let BarY = 0
let Mouse = false
let MomentumY = 0
let Fishheight = 50
let FishY = 300
let FishMomentum = 0

function UpdateBar() {
BarY = Math.min(BarY, 600 - Barheight)
if (BarY <= 0) MomentumY = 0
BarY = Math.max(BarY, 0)

bar.style.bottom = BarY + 'px'

}

document.addEventListener('mousedown',()=> {
Mouse = true
})
document.addEventListener('mouseup',()=> {
Mouse = false
})

setInterval(()=> {
MomentumY += Mouse * 1
MomentumY *= 0.95
MomentumY -= 0.5

MomentumY = Math.min(MomentumY, 8)
MomentumY = Math.max(MomentumY, -8)

BarY += MomentumY
UpdateBar()



const fish = document.getElementById('fish')

if (Number(fish.dataset.timer) < 1) {

let direction = -1
if (Math.floor(Math.random() * 2) == 1) {
direction = 1;
}
if (parseInt(fish.style.bottom) < 100) {
direction = 1;
} else if (parseInt(fish.style.bottom) > 500) {
direction = -1;
}

fish.dataset.momentum = (Math.random() * 4 + 4) * direction
fish.dataset.timer = Math.random() * 40 + 30
console.log(fish.dataset.timer)
console.log(fish.dataset.momentum)
}

let momentum = Number(fish.dataset.momentum)

fish.dataset.momentum = Number(fish.dataset.momentum) * 0.97

let fishY = parseInt(fish.style.bottom) || 0

let newfishY = fishY + momentum
newfishY = Math.max(fishY + momentum, 0)
newfishY = Math.min(fishY + Fishheight, 600)

fish.style.bottom = newfishY + 'px'

console.log(fishY)

fish.dataset.timer--;


}, 20)