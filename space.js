const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
window.devicePixelRatio
);

renderer.domElement.style.position =
"fixed";

renderer.domElement.style.top = "0";

renderer.domElement.style.left = "0";

renderer.domElement.style.zIndex = "-1";

renderer.domElement.style.pointerEvents =
"none";

document.body.appendChild(
renderer.domElement
);

/* PLANET */

const geometry =
new THREE.SphereGeometry(
4.5,
128,
128
);

const material =
new THREE.MeshPhysicalMaterial({

color: 0x3b82f6,

metalness: 0.1,

roughness: 0.35,

clearcoat: 1,

clearcoatRoughness: 0

});

const planet =
new THREE.Mesh(
geometry,
material
);

planet.position.x = 5;

scene.add(planet);

/* ATMOSPHERE */

const glowGeometry =
new THREE.SphereGeometry(
4.8,
128,
128
);

const glowMaterial =
new THREE.MeshBasicMaterial({

color: 0x60a5fa,

transparent: true,

opacity: 0.15

});

const atmosphere =
new THREE.Mesh(
glowGeometry,
glowMaterial
);

atmosphere.position.x = 5;

scene.add(atmosphere);

/* LIGHTING */

const light1 =
new THREE.PointLight(
0xffffff,
3
);

light1.position.set(
10,
5,
10
);

scene.add(light1);

const light2 =
new THREE.PointLight(
0x60a5fa,
2
);

light2.position.set(
-10,
-5,
5
);

scene.add(light2);

const ambient =
new THREE.AmbientLight(
0x404040,
1.5
);

scene.add(ambient);

/* STARS */

const starGeometry =
new THREE.BufferGeometry();

const starCount = 5000;

const positions = [];

for(let i=0;i<starCount;i++){

positions.push(
(Math.random()-0.5)*500
);

positions.push(
(Math.random()-0.5)*500
);

positions.push(
(Math.random()-0.5)*500
);

}

starGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(
positions,
3
)

);

const starMaterial =
new THREE.PointsMaterial({

color: 0xffffff,

size: 0.15

});

const stars =
new THREE.Points(
starGeometry,
starMaterial
);

scene.add(stars);

/* CAMERA */

camera.position.z = 12;

/* PARALLAX */

let mouseX = 0;
let mouseY = 0;

document.addEventListener(
"mousemove",
(event)=>{

mouseX =
(event.clientX /
window.innerWidth
- 0.5);

mouseY =
(event.clientY /
window.innerHeight
- 0.5);

}
);

/* ANIMATION */

function animate(){

requestAnimationFrame(
animate
);

/* Planet Rotation */

planet.rotation.y += 0.002;

atmosphere.rotation.y += 0.001;

/* Floating Motion */

planet.position.y =
Math.sin(
Date.now()*0.001
) * 0.3;

atmosphere.position.y =
planet.position.y;

/* Stars */

stars.rotation.y += 0.0002;

/* Smooth Mouse Parallax */

camera.position.x +=
(mouseX * 3
- camera.position.x)
* 0.03;

camera.position.y +=
(-mouseY * 2
- camera.position.y)
* 0.03;

camera.lookAt(
planet.position
);

renderer.render(
scene,
camera
);

}

animate();

/* Resize */

window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);
