console.log("JS Loaded");
const gallery = document.getElementById("gallery");

const wallpapers = [

{
name:"Astronaut",
category:"space",
file:"wp12531994-astronaut-4k-desktop-wallpapers.jpg"
},

{
name:"Galaxy",
category:"space",
file:"uwp5003329.png"
},

{
name:"FPS",
category:"gaming",
file:"wp7716162-fps-games-wallpapers.jpg"
},

{
name:"Lords Of The Fallen",
category:"gaming",
file:"wp16052499-lords-of-the-fallen-2-wallpapers.jpg"
},

{
name:"Landscape",
category:"aesthetic",
file:"wp14448617-landscape-4k-aesthetic-wallpapers.jpg"
},

{
name:"RGB Room",
category:"aesthetic",
file:"wp11697464-rgb-room-wallpapers.jpg"
}

];

function loadGallery(items = wallpapers){

gallery.innerHTML="";

items.forEach(w=>{

gallery.innerHTML += `
<div class="wallpaper-card">
<img src="${w.file}">
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

window.open(random.file,"_blank");

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

document.body.style.overflow="auto";
loader.remove();

},1000);

}

},20);

});

console.log(document.getElementById("allBtn"));
console.log(document.getElementById("spaceBtn"));
console.log(document.getElementById("gamingBtn"));
console.log(document.getElementById("aestheticBtn"));
console.log(document.getElementById("search"));

// Search

const search =
document.getElementById("search");

search.addEventListener("input",()=>{

const value =
search.value.toLowerCase();

const filtered =
wallpapers.filter(w=>

w.name.toLowerCase()
.includes(value)

);

loadGallery(filtered);

});

// Filters

document.getElementById("allBtn")
.onclick = ()=> loadGallery(wallpapers);

document.getElementById("spaceBtn")
.onclick = ()=> loadGallery(

wallpapers.filter(
w=>w.category==="space"
)

);

document.getElementById("gamingBtn")
.onclick = ()=> loadGallery(

wallpapers.filter(
w=>w.category==="gaming"
)

);

document.getElementById("aestheticBtn")
.onclick = ()=> loadGallery(

wallpapers.filter(
w=>w.category==="aesthetic"
)

);
