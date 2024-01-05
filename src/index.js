import { contentLoader } from "./contentLoader";
import { menu } from "./menu";
import { contact } from "./contact";
import './style.css';

const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const menuLink = document.getElementById("menu-link");
const content = document.getElementById("content");


aboutLink.addEventListener("click", () => {
    // Handle about link click event
    content.innerHTML = "";
    contentLoader();
    
});

contactLink.addEventListener("click", () => {
    // Handle contact link click event
    content.innerHTML = "";
    contact();
});

menuLink.addEventListener("click", () => {
    // Handle menu link click event
    content.innerHTML = "";
    menu();
});


console.log("works!")
