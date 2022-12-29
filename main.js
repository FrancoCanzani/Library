const button = document.getElementById("submitButton");
const form = document.querySelector(".form");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

let myLibrary = [];

// constructor function for creating new Book objects

function book(title, author, pages, date, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
}

// Main function triggered when the form is submitted. Adds values to the book item, pushes to array and resets the form

function createBook() {
  let newBook = new book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.date.value,
    form.read.value
  );
  myLibrary.push(newBook);
  console.log(myLibrary);
  title.value = "";
  author.value = "";
  date.value = "";
  pages.value = "";
  yes.checked = false;
  no.checked = false;
  closeForm();
}

function addBookToLibrary() {
  const div = document.createElement("div");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createBook();
});

// Open and close Pop Up div

function openForm() {
  document.getElementById("myForm").style.visibility = "visible";
}

function closeForm() {
  document.getElementById("myForm").style.visibility = "hidden";
}
