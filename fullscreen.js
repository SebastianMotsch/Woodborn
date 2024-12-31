const galleryItems = document.querySelectorAll(".gallery-item");
const fullscreenViewer = document.getElementById("fullscreen-viewer");
const fullscreenImage = document.getElementById("fullscreen-image");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let currentIndex = 0;

function showFullscreen(index) {
  currentIndex = index;
  const selectedItem = galleryItems[currentIndex];
  const imgSrc = selectedItem.querySelector("img").src;
  fullscreenImage.src = imgSrc;
  fullscreenViewer.style.display = "flex";
}

function hideFullscreen() {
  fullscreenViewer.style.display = "none";
}

function navigateFullscreen(direction) {
  currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
  showFullscreen(currentIndex);
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showFullscreen(index));
});

leftArrow.addEventListener("click", () => navigateFullscreen(-1));
rightArrow.addEventListener("click", () => navigateFullscreen(1));
fullscreenViewer.addEventListener("click", hideFullscreen);