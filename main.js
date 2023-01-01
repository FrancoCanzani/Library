const button = document.getElementById("submitButton");
const form = document.querySelector(".form");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const bookshelf = document.querySelector(".bookshelf");
const ratingInput = document.querySelector('input[name="star"]:checked');
const addBook = document.querySelector(".addBook");

let myLibrary = [];

// constructor function for creating new Book objects

function book(title, author, pages, date, read, star) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
  this.star = star;
}

// Main function triggered when the form is submitted. Adds values to the book item, pushes to array and resets the form

function createBook() {
  let newBook = new book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.date.value,
    form.read.value,
    form.star.value
  );
  myLibrary.push(newBook);
  addBookToLibrary();
  title.value = "";
  author.value = "";
  date.value = "";
  pages.value = "";
  yes.checked = false;
  no.checked = false;
  closeForm();
}

function addBookToLibrary() {
  // Create all the divs
  const bookBox = document.createElement("div");
  const top = document.createElement("div");
  const imgBox = document.createElement("div");
  const content = document.createElement("div");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const titleDisplay = document.createElement("div");
  const authorDisplay = document.createElement("div");
  const pagesDisplay = document.createElement("div");
  const dateDisplay = document.createElement("div");
  const ratingDisplay = document.createElement("div");
  const readDisplay = document.createElement("button");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const deleteButton = document.createElement("button");
  const deleteBtn = document.createElement("img");

  // We add the respective classes
  bookBox.classList.add("bookBox");
  top.classList.add("top");
  content.classList.add("content");
  imgBox.classList.add("imgBox");
  titleDisplay.classList.add("titleDisplay");
  authorDisplay.classList.add("authorDisplay");
  pagesDisplay.classList.add("pagesDisplay");
  dateDisplay.classList.add("dateDisplay");
  ratingDisplay.classList.add("ratingDisplay");
  deleteButton.classList.add("delete");
  deleteBtn.classList.add("deleteBtn");

  // We append each div to its parent
  bookshelf.appendChild(bookBox);
  bookBox.appendChild(top);
  bookBox.appendChild(content);
  content.appendChild(titleDisplay);
  content.appendChild(authorDisplay);
  content.appendChild(pagesDisplay);
  content.appendChild(dateDisplay);
  content.appendChild(ratingDisplay);
  content.appendChild(readDisplay);
  top.appendChild(imgBox);
  imgBox.appendChild(svg);
  svg.appendChild(path);
  deleteButton.appendChild(deleteBtn);
  content.appendChild(deleteButton);

  // Attributes for the SVG logo and delete img
  svg.setAttribute("style", "width: 64px; height: 64px");
  svg.setAttribute("viewBox", "0 0 24 24");
  path.setAttribute("fill", "currentColor");
  path.setAttribute(
    "d",
    "M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"
  );
  deleteBtn.setAttribute("src", "images/trash.svg");
  deleteBtn.setAttribute("alt", "delete");

  // We display the form inputs
  titleDisplay.textContent = `Title: ${form.title.value}`;
  authorDisplay.textContent = `Author: ${form.author.value}`;
  pagesDisplay.textContent = `Pages: ${form.pages.value}`;
  dateDisplay.textContent = `Publication date: ${form.date.value}`;
  ratingDisplay.textContent = `Rating: ${form.star.value}/5`;

  if (form.read.value === "yes") {
    readDisplay.textContent = "Finished";
    readDisplay.classList.add("readDisplayFinished");
  } else {
    readDisplay.textContent = "Not Finished";
    readDisplay.classList.add("readDisplayUnfinished");
  }

  readDisplay.addEventListener("click", function () {
    this.classList.toggle("readDisplayFinished");
    this.classList.toggle("readDisplayUnfinished");

    if (this.textContent === "Finished") {
      this.textContent = "Not Finished";
    } else {
      this.textContent = "Finished";
    }
  });

  // Delete the div when clicked on the icon
  deleteButton.addEventListener("click", function () {
    const index = myLibrary.findIndex(
      (book) => book.title === titleDisplay.textContent
    );

    // Remove the book object from the myLibrary array
    myLibrary.splice(index, 1);
    bookBox.remove();
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); /* Prevents the window from refreshing */
  createBook();
});

// Open and close Pop Up div
function openForm() {
  document.getElementById("myForm").style.visibility = "visible";
}

function closeForm() {
  document.getElementById("myForm").style.visibility = "hidden";
}
