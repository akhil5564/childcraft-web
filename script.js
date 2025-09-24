// Example: Book list
const books = [
  { title: "The Adventures of Tom Thumb", author: "Author A" },
  { title: "Magic Forest", author: "Author B" },
  { title: "Learning ABC", author: "Author C" },
];

const bookList = document.getElementById("bookList");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
  bookList.appendChild(div);
});

// Example: Shop Now button alert
document.getElementById("shopNowBtn").addEventListener("click", () => {
  alert("Welcome to our online shop!");
});

// Example: Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});
