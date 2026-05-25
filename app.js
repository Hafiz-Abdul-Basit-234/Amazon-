
const images = [
    "./assets/hero.jpg",
    "./assets/hero-2.jpg",
    "./assets/hero-3.jpg",
    "./assets/hero-4.jpg"
];

let index = 0;
const hero = document.querySelector(".hero-img");

// show image function
function showImage(i) {
    hero.style.backgroundImage = `url(${images[i]})`;
}

// initial image
showImage(index);

// arrows create (no HTML change)
const left = document.createElement("div");
left.innerHTML = "&#10094;";
left.classList.add("slider-arrow", "left-arrow");

const right = document.createElement("div");
right.innerHTML = "&#10095;";
right.classList.add("slider-arrow", "right-arrow");

hero.appendChild(left);
hero.appendChild(right);

// click events
left.addEventListener("click", () => {
    index--;
    if (index < 0) index = images.length - 1;
    showImage(index);
});

right.addEventListener("click", () => {
    index++;
    if (index === images.length) index = 0;
    showImage(index);
});
