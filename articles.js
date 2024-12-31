const articles = [
  {
    image: "images/article1.jpg",
    title: "5 Ways Carpentry Transforms Homes",
    description: "Discover how skilled carpentry can add value and charm to your living space.",
    link: "https://example.com/article1"
  },
  {
    image: "images/article2.jpg",
    title: "Restoring Historic Woodwork",
    description: "Learn about preserving the beauty and history of wooden structures in Media.",
    link: "https://example.com/article2"
  },
  {
    image: "images/article3.jpg",
    title: "Top Carpentry Trends in 2024",
    description: "Stay updated with the latest carpentry trends shaping homes this year.",
    link: "https://example.com/article3"
  }
];

const articleGrid = document.querySelector(".article-grid");

articles.forEach(article => {
  const articleCard = document.createElement("div");
  articleCard.classList.add("article-card");
  articleCard.innerHTML = `
    <img src="${article.image}" alt="${article.title}">
    <h2>${article.title}</h2>
    <p>${article.description}</p>
    <a href="${article.link}" target="_blank" class="read-more">Read More</a>
  `;
  articleGrid.appendChild(articleCard);
});