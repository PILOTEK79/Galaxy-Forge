const gallery = document.getElementById("gallery");

const wallpapers = [
"images/wp12531994-astronaut-4k-desktop-wallpapers.jpg",
"images/wp14448617-landscape-4k-aesthetic-wallpapers.jpg",
"images/wp16052499-lords-of-the-fallen-2-wallpapers.jpg",
"images/wp7716162-fps-games-wallpapers.jpg",
"images/wp11697464-rgb-room-wallpapers.jpg",
"images/uwp5003329.png"
];

function loadGallery(){

gallery.innerHTML="";

wallpapers.forEach(img=>{

gallery.innerHTML += `
<div class="wallpaper-card">
<img src="${img}">
</div>
`;

});

}

loadGallery();

document.getElementById("randomBtn")
.addEventListener("click",()=>{

const random =
wallpapers[Math.floor(
Math.random()*wallpapers.length
)];

window.open(random,"_blank");

});

window.addEventListener("load",()=>{

let loader =
document.getElementById("loader");

let bar =
document.getElementById("progress-bar");

let text =
document.getElementById("progress-text");

let progress=0;

let interval = setInterval(()=>{

progress++;

bar.style.width =
progress+"%";

text.innerHTML =
progress+"%";

if(progress>=100){

clearInterval(interval);

loader.style.transform =
"scale(1.3)";

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

}

},20);

});
