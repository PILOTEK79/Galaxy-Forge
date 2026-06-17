console.log("Galaxy Forge Loaded");

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

gallery.innerHTML = "";

items.forEach(w => {

gallery.innerHTML += `
<div class="wallpaper-card">

<img src="${w.file}" alt="${w.name}">

<h3 style="
padding:15px;
text-align:center;
">
${w.name}
</h3>

</div>
`;

});

}

loadGallery();

/* Random Wallpaper */

const randomBtn =
document.getElementById("randomBtn");

if(randomBtn){

randomBtn.addEventListener("click",()=>{

const random =
wallpapers[
Math.floor(
Math.random()*wallpapers.length
)
];

window.open(
random.file,
"_blank"
);

});

}

/* Loader */

window.addEventListener("load",()=>{

const loader =
document.getElementById("loader");

const bar =
document.getElementById("progress-bar");

const text =
document.getElementById("progress-text");

if(!loader || !bar || !text){
return;
}

let progress = 0;

const interval =
setInterval(()=>{

progress++;

bar.style.width =
progress + "%";

text.innerHTML =
progress + "%";

if(progress >= 100){

clearInterval(interval);

loader.style.transition =
"1s";

loader.style.opacity = "0";

setTimeout(()=>{

document.body.style.overflow =
"auto";

loader.remove();

},1000);

}

},20);

});

/* Search */

const search =
document.getElementById("search");

if(search){

search.addEventListener(
"input",
()=>{

const value =
search.value
.toLowerCase();

const filtered =
wallpapers.filter(w=>

w.name
.toLowerCase()
.includes(value)

);

loadGallery(filtered);

});

}

/* Filter Buttons */

const allBtn =
document.getElementById("allBtn");

const spaceBtn =
document.getElementById("spaceBtn");

const gamingBtn =
document.getElementById("gamingBtn");

const aestheticBtn =
document.getElementById("aestheticBtn");

if(allBtn){

allBtn.onclick = ()=>{

loadGallery(
wallpapers
);

};

}

if(spaceBtn){

spaceBtn.onclick = ()=>{

loadGallery(

wallpapers.filter(
w=>w.category==="space"
)

);

};

}

if(gamingBtn){

gamingBtn.onclick = ()=>{

loadGallery(

wallpapers.filter(
w=>w.category==="gaming"
)

);

};

}

if(aestheticBtn){

aestheticBtn.onclick = ()=>{

loadGallery(

wallpapers.filter(
w=>w.category==="aesthetic"
)

);

};

}
