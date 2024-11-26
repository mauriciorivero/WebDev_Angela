randomizeHeroBackground();
document.getElementById("hero-logo").style.display = "none";
document.getElementById("hero-modal").style.display = "none";

document.getElementById("signup-btn").addEventListener("click", openModal);
document.getElementById("modal-close-btn").addEventListener("click", closeModal);
function openModal(){
    document.getElementById("header").style.display = "none";
    document.getElementById("hero-logo").style.display = "flex";
    document.getElementById("hero-modal").style.display = "flex";
    randomizeHeroBackground();
}

function closeModal(){
    document.getElementById("header").style.display = "flex";
    document.getElementById("hero-logo").style.display = "none";
    document.getElementById("hero-modal").style.display = "none";
    randomizeHeroBackground();
}

function randomizeHeroBackground(){
    let bgImages = [
        "url('img/Astro.jpeg')",
        "url('img/Bloodborne.jpg')",
        "url('img/DaysGone.jpg')",
        "url('img/death-stranding.jpg')",
        "url('img/Detroit.jpg')",
        "url('img/Dreams-1.jpg')",
        "url('img/Dreams-2.jpg')",
        "url('img/Ghost.jpg')",
        "url('img/GodOfWar.jpg')",
        "url('img/Gran-Turismo.jpg')",
        "url('img/Gravity-Rush.jpg')",
        "url('img/Horizon.jpg')",
        "url('img/Infamous.jpg')",
        "url('img/Killzone.jpg')",
        "url('img/Rigs.jpg')",
        "url('img/Spiderman.jpeg')",
        "url('img/TLOU.jpg')",
        "url('img/Uncharted.jpg')"
    ];

    let randomIndex = Math.floor(Math.random() * bgImages.length);
    document.getElementById("hero-1").style.backgroundImage = bgImages[randomIndex];
}