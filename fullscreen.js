const projects = {
  cabinet: ["images/cabinet1.jpg"],
  patio: [
    "images/patio1.jpg",
    "images/patio2.jpg",
    "images/patio3.jpg",
    "images/patio4.jpg",
    "images/patio5.jpg",
    "images/patio6.jpg",
    "images/patio7.jpg",
    "images/patio8.jpg",
    "images/patio9.jpg",
  ],
  bookcase: ["images/bookcase1.jpg", "images/bookcase2.jpg"],
  curved: ["images/curved1.jpg", "images/curved2.jpg", "images/curved3.jpg"],
  kitchen: [
    "images/kitchen1.jpg",
    "images/kitchen2.jpg",
    "images/kitchen3.jpg",
    "images/kitchen4.jpg",
    "images/kitchen5.jpg",
    "images/kitchen6.jpg",
  ],
};

let currentProject = null;
let currentIndex = 0;

const fullscreenViewer = document.getElementById("fullscreen-viewer");
const fullscreenImage = document.getElementById("fullscreen-image");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const indicator = document.createElement("div");
indicator.id = "image-indicator";
fullscreenViewer.appendChild(indicator);

function showFullscreen(project, index) {
  currentProject = project;
  currentIndex = index;
  fullscreenImage.src = projects[project][index];
  updateIndicator();
  fullscreenViewer.style.display = "flex";
}

function hideFullscreen() {
  fullscreenViewer.style.display = "none";
}

function navigateFullscreen(direction) {
  const totalImages = projects[currentProject].length;
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  fullscreenImage.src = projects[currentProject][currentIndex];
  updateIndicator();
}

function updateIndicator() {
  const totalImages = projects[currentProject].length;
  indicator.textContent = `${currentIndex + 1} / ${totalImages}`;
}

// Add event listeners
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const project = item.dataset.project;
    const index = 0; // Start from the first image of the project
    showFullscreen(project, index);
  });
});

leftArrow.addEventListener("click", () => navigateFullscreen(-1));
rightArrow.addEventListener("click", () => navigateFullscreen(1));
fullscreenViewer.addEventListener("click", (e) => {
  if (e.target === fullscreenViewer) hideFullscreen();
});