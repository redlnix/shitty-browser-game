const bar = document.getElementById('fishing-bar')
let progress = 30
let Barheight = 70
let BarY = 0
let Mouse = false
let MomentumY = 0
let FishMomentum = 0
let FishStats = {name: '', speedran: 4, speedbase: 4, timeran: 40, timebase: 30, price: 10}
let FishList = [{name: 'Bass', speedran: 3, speedbase: 2, timeran: 60, timebase: 40, rarity: 5, minrod: 1, maxrod: 5, price: 10},
{name: 'Minnow', speedran: 2, speedbase: 2, timeran: 50, timebase: 35, rarity: 3, minrod: 1, maxrod: 1, price: 7},]
let IncreaseRate = 0.2
let DecreaseRate = 0.1
let Rod = 1;
let Fishing = 0;
let Waiting = 1;
let Pause = 0;
let FishWait = Math.round(Math.random() * 80 + 200);
let WaitRan = 80;
let WaitBase = 120;
let AlertTime = 0;

const currencysend = new CustomEvent("send currency to shop", {
  detail: {
    direction: "left",
    time: Date.now()
  }
});

function UpdateBar() {
BarY = Math.min(BarY, 600 - Barheight)
if (BarY <= 0) MomentumY = Math.abs(MomentumY * 0.8)
BarY = Math.max(BarY, 0)

bar.style.bottom = BarY + 'px'
}

document.addEventListener('mousedown',()=> {
Mouse = true;
})
document.addEventListener('mouseup',()=> {
Mouse = false;
})


document.getElementById('fishing-back').style.display = 'none'
document.getElementById('progress-bar').style.display = 'none'

setInterval(()=> {
///////////////////////////////////////////////////////////////////////
if (Fishing) {
MomentumY += Mouse * 0.9
MomentumY *= 0.94
MomentumY -= 0.4

MomentumY = Math.min(MomentumY, 8)
MomentumY = Math.max(MomentumY, -8)

BarY += MomentumY

UpdateBar()

UpdateFish()

if (progress >= 100) {
FishCatch()
}

const Fish = document.getElementById('fish')

const FishY = parseInt(Fish.style.bottom)

if (FishY + 50 >= BarY && FishY <= BarY + Barheight) {
progress += IncreaseRate;

} else {
progress -= DecreaseRate;
}

let t;
let color1;
let color2
if (progress <= 33) {
color1 = { r:255, g:0, b:0 };
color2 = { r:255, g:165, b:0 };
t = progress / 33
} else if (progress <= 66) {
color1 = { r:255, g:165, b:0 };
color2 = { r:255, g:255, b:0 };
t = (progress - 33) / 33
} else {
color1 = { r:255, g:255, b:0 };
color2 = { r:0, g:255, b:0 };
t = (progress - 66) / 33
}

const newcolor = GradientSelect(color1, color2, t);

document.getElementById('progress-fill').style.backgroundColor = `rgb(${newcolor.r},${newcolor.g},${newcolor.b})`
document.getElementById('progress-fill').style.width = `${progress}%`

///////////////////////////////////////////////////////////////////////
} else if (Waiting) {
FishWait -= 0.5;

if (FishWait <= 0 && AlertTime == 0) {
document.getElementById('click').style.display = 'block'
AlertTime = 60;

let W = setInterval(()=> {
if (Mouse) {
FishBite()

clearInterval(W);
}

AlertTime--;
if (AlertTime <= 0) {
FishWait = Math.round(Math.random() * WaitRan + WaitBase)
AlertTime = 0;
document.getElementById('click').style.display = 'none'
clearInterval(W);
}
}, 10)
}
///////////////////////////////////////////////////////////////////////
} else if (Pause) {

}

}, 20)

function FishBite() {

document.getElementById('click').style.display = 'none'

document.getElementById('fishing-back').style.display = 'block';
document.getElementById('progress-bar').style.display = 'block';
Fishing = true;
Waiting = false;
document.getElementById('fish').style.bottom = '250px';
progress = 30;

let stats = FishRandom(FishList)
FishStats.name = stats.name;
FishStats.speedran = stats.speedran;
FishStats.speedbase = stats.speedbase;
FishStats.timeran = stats.timeran;
FishStats.timebase = stats.timebase;
FishStats.price = stats.price;

console.log(FishStats.name)
}

function FishCatch() {
Fishing = false;
Pause = true;
document.getElementById('fishing-back').style.display = 'none';
document.getElementById('progress-bar').style.display = 'none';
document.dispatchEvent(currencysend);



const animate = document.createElement('img');
animate.src = '/shitty-browser-game/images/fishing/Fish2.jpg';
animate.className = 'Animate';
document.getElementById('container').appendChild(animate);
let animateX = 0;
let animateY = 0;
let momentumY = 30;
let gravity = 2.5;
let A = setInterval(()=>{

animateX += 9;
animateY += momentumY;
animateY -= gravity;
momentumY *= 0.95;
gravity *= 1.04;

animate.style.bottom = animateY + 'px'
animate.style.left = animateX + 'px'

if (animateY <= 10) {
clearInterval(A)
setTimeout(()=> {
document.getElementById('menu').style.display = 'block'
animate.remove()
HideChar()
}, 1000)

}
},30)
ShowChar(500, 0)

}


function ShowChar(x, y) {
const char = document.getElementById('Char')
char.style.display = 'block'
char.style.left = x + 'px'
char.style.bottom = y + 'px'

}

function HideChar() {
const char = document.getElementById('Char')
char.style.display = 'none'
}

function FishRandom(list) {
let total = 0;

list.forEach(item => {
if (Rod >= item.minrod && Rod <= item.maxrod)
total += item.rarity
});

let rand = Math.random() * total;

for (let item of list) {
    if (rand < item.rarity) return item;
    rand -= item.rarity;
}
}

function GradientSelect(c1, c2, t) {
return {
r: c1.r + (c2.r - c1.r) * t,
g: c1.g + (c2.g - c1.g) * t,
b: c1.b + (c2.b - c1.b) * t
};
}


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
fishY = Math.min(fishY, 600 - 50)

fish.style.bottom = fishY + 'px'

Fish.dataset.timer--;
}