const bar = document.getElementById('fishing-fill')
let Barheight = 70
let BarY = 0
let Mouse = false
let MomentumY = 0
let Fishhight = 50
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

}, 20)