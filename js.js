// websites object
const websites = [
  {
    name: "Facebook",
    linkText: "Visit Facebook",
    url: "https://facebook.com"
  },
  {
    name: "Instagram",
    linkText: "Visit Instagram",
    url: "https://instagram.com"
  },
  {
    name: "Twitter",
    linkText: "Visit Twitter",
    url: "https://twitter.com"
  },
  {
    name: "Reddit",
    linkText: "Visit Reddit",
    url: "https://reddit.com"
  }
];

container = document.getElementById("link-container");

for (let i = 0; i < websites.length; i++) {
  // Create the article element
  const article = document.createElement("article");
  article.classList.add("link-box");

  // Create the paragraph element and add the incrementing number
  const p = document.createElement("p");
  p.textContent = `${i + 1}. `; // This makes it "1. ", "2. ", etc.

  // Create the anchor link element
  const link = document.createElement("a");
  link.href = websites[i].url;
  link.textContent = websites[i].name; // Using .name to get "Facebook"
  link.target = "_blank";

  // Nest everything: link goes inside paragraph, paragraph goes inside article
  p.appendChild(link);
  article.appendChild(p);

  // Append the complete article to the main container
  container.appendChild(article);
}