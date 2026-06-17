const wallpapers = [

    "uwp4962248.jpeg",

    "uwp5003329.png",

    "wp11697464-rgb-room-wallpapers.jpg",

    "wp12531994-astronaut-4k-desktop-wallpapers.jpg",

    "wp13508917-black-and-white-galaxy-wallpapers.jpg",

    "wp14448617-landscape-4k-aesthetic-wallpapers.jpg",

    "wp16052499-lords-of-the-fallen-2-wallpapers.jpg",

    "wp7716162-fps-games-wallpapers.jpg"
];

const container =
document.getElementById("wallpaperContainer");

function loadWallpapers() {

    container.innerHTML = "";

    wallpapers.forEach(image => {

        container.innerHTML += `

        <div class="card">

            <img
            src="${image}"
            alt="Wallpaper">

            <a
            href="${image}"
            download>

            Download

            </a>

        </div>
        `;
    });
}

function showRandomWallpaper() {

    const random =
    wallpapers[
        Math.floor(
            Math.random()
            * wallpapers.length
        )
    ];

    window.open(random);
}

loadWallpapers();
