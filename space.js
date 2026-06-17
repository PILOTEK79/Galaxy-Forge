const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.domElement.style.position =
"fixed";

renderer.domElement.style.top = 0;

renderer.domElement.style.left = 0;

renderer.domElement.style.zIndex = "-1";

document.body.appendChild(
renderer.domElement
);

/* Planet */

const geometry =
new THREE.SphereGeometry(
3,
64,
64
);

const material =
new THREE.MeshStandardMaterial({

color:0x38bdf8,

metalness:0.7,

roughness:0.2

});

const planet =
new THREE.Mesh(
geometry,
material
);

scene.add(planet);

/* Light */

const light =
new THREE.PointLight(
0xffffff,
2
);

light.position.set(
5,
5,
5
);

scene.add(light);

/* Stars */

const starGeometry =
new THREE.BufferGeometry();

const starCount = 3000;

const positions = [];

for(let i=0;i<starCount;i++){

positions.push(
(Math.random()-0.5)*300
);

positions.push(
(Math.random()-0.5)*300
);

positions.push(
(Math.random()-0.5)*300
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

size:0.2

});

const stars =
new THREE.Points(
starGeometry,
starMaterial
);

scene.add(stars);

camera.position.z = 10;

/* Mouse Parallax */

let mouseX = 0;
let mouseY = 0;

document.addEventListener(
"mousemove",
event=>{

mouseX =
(event.clientX /
window.innerWidth
-0.5);

mouseY =
(event.clientY /
window.innerHeight
-0.5);

}
);

/* Animation */

function animate(){

requestAnimationFrame(
animate
);

planet.rotation.y += 0.003;

stars.rotation.y += 0.0005;

camera.position.x +=
(mouseX*2
-camera.position.x)
*0.02;

camera.position.y +=
(-mouseY*2
-camera.position.y)
*0.02;

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);
