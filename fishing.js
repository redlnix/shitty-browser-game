const bar = document.getElementById('fishing-fill')
let progress = 0
let Barheight = 70
let BarY = 0
let Mouse = false
let MomentumY = 0
let Fishheight = 50
let FishMomentum = 0
let FishStats = {speedran: 4, speedbase: 4, timeran: 40, timebase: 30}


function UpdateBar() {
BarY = Math.min(BarY, 600 - Barheight)
if (BarY <= 0) MomentumY = Math.abs(MomentumY * 0.8)
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

UpdateFish()

const Fish = document.getElementById('fish')

const FishY = parseInt(Fish.style.bottom)

if (FishY + Fishheight >= BarY && FishY <= BarY + Barheight) {
console.log('touch')
}

}, 20)


function UpdateFish() {
const Fish = document.getElementById('fish')

if (Number(Fish.dataset.timer) < 1) {

let direction = -1
if (Math.floor(Math.random() * 2) == 1) {
direction = 1;
}
if (parseInt(Fish.style.bottom) < 100) {
direction = 1;
} else if (parseInt(Fish.style.bottom) > 500) {
direction = -1;
}

Fish.dataset.momentum = (Math.random() * FishStats.speedran + FishStats.speedbase) * direction
Fish.dataset.timer = Math.random() * FishStats.timeran + FishStats.timebase
}


Fish.dataset.momentum = Number(Fish.dataset.momentum) * 0.97

let momentum = Number(Fish.dataset.momentum)

let fishY = parseInt(Fish.style.bottom) || 0

fishY = fishY + momentum

fishY = Math.max(fishY, 0)
fishY = Math.min(fishY, 600 - Fishheight)

fish.style.bottom = fishY + 'px'

Fish.dataset.timer--;
}