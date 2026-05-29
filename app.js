
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
// ================= AMAZON STYLE CLICK DROPDOWN =================

const acc = document.querySelector(".acc");

// dropdown create
const dropdown = document.createElement("div");

dropdown.innerHTML = `
  <div style="background:white; width:300px; padding:15px; box-shadow:0 5px 15px rgba(0,0,0,0.3); border-radius:5px;">
    
    <button style="
      width:100%;
      padding:10px;
      background:#ffd814;
      border:none;
      border-radius:20px;
      font-weight:bold;
      cursor:pointer;
    ">Sign in</button>

    <p style="font-size:12px; margin-top:10px; text-align:center;">
      New customer? <a href="#">Start here</a>
    </p>

    <hr style="margin:10px 0;">

    <div style="display:flex; justify-content:space-between;">
      <div>
        <h4>Your Lists</h4>
        <p>Create a List</p>
        <p>Find a List</p>
      </div>

      <div>
        <h4>Your Account</h4>
        <p>Account</p>
        <p>Orders</p>
        <p>Wishlist</p>
        <p>Browsing History</p>
      </div>
    </div>

  </div>
`;

// style dropdown box
dropdown.style.position = "absolute";
dropdown.style.top = "60px";
dropdown.style.right = "200px";
dropdown.style.display = "none";
dropdown.style.zIndex = "999";

// add to body
document.body.appendChild(dropdown);

let isOpen = false;

// toggle on click
acc.addEventListener("click", (e) => {
  e.stopPropagation();

  if (isOpen) {
    dropdown.style.display = "none";
    isOpen = false;
  } else {
    dropdown.style.display = "block";
    isOpen = true;
  }
});

// click outside to close
document.addEventListener("click", () => {
  dropdown.style.display = "none";
  isOpen = false;
});const lang = document.querySelector(".sec-3");

// dropdown create
const langDropdown = document.createElement("div");

langDropdown.innerHTML = `
  <div style="
    background:white;
    width:150px;
    padding:10px;
    box-shadow:0 5px 15px rgba(0,0,0,0.3);
    border-radius:5px;
    font-size:14px;
  ">
    <p class="lang-option">🇺🇸 English</p>
    <p class="lang-option">🇵🇰 Urdu</p>
    <p class="lang-option">🇪🇸 Spanish</p>
    <p class="lang-option">🇫🇷 French</p>
  </div>
`;

langDropdown.style.position = "absolute";
langDropdown.style.top = "60px";
langDropdown.style.right = "350px";
langDropdown.style.display = "none";
langDropdown.style.zIndex = "999";

document.body.appendChild(langDropdown);

let langOpen = false;

// toggle on click
lang.addEventListener("click", (e) => {
  e.stopPropagation();

  langOpen = !langOpen;
  langDropdown.style.display = langOpen ? "block" : "none";
});

// close when click outside
document.addEventListener("click", () => {
  langOpen = false;
  langDropdown.style.display = "none";
});