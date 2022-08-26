// Question 1
// Select the h3 element and change its value to Hello instead of Welcome.

const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";

// Question 2
// Select all the h4 elements on the page and change their margin-bottom style to -20px.

const headings = document.querySelectorAll("h4");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.marginBottom = "-20px";
}

// Question 3
// Set the background colour of the second h4 element to red.

headings[1].style.backgroundColor = "red";

// Question 4
// Set the font size of the first paragraph element on the page to 24px and its color to blue.

const paragraphs = document.querySelectorAll("p");

paragraphs[0].style.fontSize = "24px";
paragraphs[0].style.color = "blue";

// Question 5
// Add span tags around the content of the third paragraph element on the page.

paragraphs[2].innerHTML = "<span>" + paragraphs[2].innerHTML + "</span>";

// Question 6
// Add a new paragraph to the div with a class of content. Add the paragraph after the others.
const newParagraph = document.querySelector("div.content");
newParagraph.innerHTML += "<p> hello </p>";

// Question 7
// Add a new class called content-item to each paragraph in the div with a class of content.

const classAdd = document.querySelectorAll(".content p");

for (let i = 0; i < classAdd.length; i++) {
  classAdd[i].classList.add("content-item");
}

// Question 8
// Select the ul element on the page by its id and add a new list item to the beginning of the list.
const addLi = document.querySelector("#services");

addLi.innerHTML = "<li>new item</li>" + addLi.innerHTML;

// Question 9
// Programmatically remove the class from the ul element.

const remove = document.querySelector(".service-list");

remove.classList.remove("service-list");

// Question 10
// Hide the element with the id of hide.
const hide = document.querySelector("#hide");

hide.style.display = "none";
