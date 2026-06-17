const wallpapers = [

{
name:"Astronaut",
category:"space",
image:"wp12531994-astronaut-4k-desktop-wallpapers.jpg"
},

{
name:"Galaxy",
category:"space",
image:"wp13508917-black-and-white-galaxy-wallpapers.jpg"
},

{
name:"Landscape",
category:"aesthetic",
image:"wp14448617-landscape-4k-aesthetic-wallpapers.jpg"
},

{
name:"FPS Gaming",
category:"gaming",
image:"wp7716162-fps-games-wallpapers.jpg"
},

{
name:"RGB Room",
category:"gaming",
image:"wp11697464-rgb-room-wallpapers.jpg"
},

{
name:"Lords Of The Fallen",
category:"gaming",
image:"wp16052499-lords-of-the-fallen-2-wallpapers.jpg"
},

{
name:"Cyber Space",
category:"space",
image:"uwp4962248.jpeg"
},

{
name:"Neon Space",
category:"space",
image:"uwp5003329.png"
}

];

const gallery =
document.getElementById("gallery");

function loadWallpapers(data){

gallery.innerHTML="";

data.forEach(item=>{

gallery.innerHTML += `

<div class="card">

<img
src="${item.image}"
onclick="openPreview('${item.image}')"
>

<h3 style="margin-top:10px">
${item.name}
</h3>

<a
href="${item.image}"
download
class="download-btn">

Download

</a>

</div>
`;
});
}

function filterWallpapers(category){

if(category==="all"){

loadWallpapers(wallpapers);
return;
}

const filtered =
wallpapers.filter(
item=>item.category===category
);

loadWallpapers(filtered);
}

function searchWallpaper(){

const search =
document
.getElementById("searchInput")
.value
.toLowerCase();

const filtered =
wallpapers.filter(item=>
item.name
.toLowerCase()
.includes(search)
);

loadWallpapers(filtered);
}

function openPreview(image){

document.getElementById(
"previewImg"
).src=image;

document.getElementById(
"preview"
).style.display="flex";
}

function closePreview(){

document.getElementById(
"preview"
).style.display="none";
}

function showRandomWallpaper(){

const random =
wallpapers[
Math.floor(
Math.random()
* wallpapers.length
)
];

openPreview(random.image);
}

loadWallpapers(wallpapers);

window.addEventListener("load", () => {

const loader =
document.getElementById(
"loading-screen"
);

const progress =
document.querySelector(
".loader-progress"
);

const text =
document.getElementById(
"loading-text"
);

const messages = [

"Initializing Universe...",
"Loading Wallpapers...",
"Activating Space Engine...",
"Generating Galaxies...",
"Preparing Launch..."
];

let width = 0;
let step = 0;

const interval =
setInterval(() => {

width++;

progress.style.width =
width + "%";

if(width % 20 === 0 &&
step < messages.length){

text.textContent =
messages[step];

step++;
}

if(width >= 100){

clearInterval(interval);

loader.classList.add(
"morph-out"
);

setTimeout(() => {

loader.style.display =
"none";

},1200);
}

},25);

});
