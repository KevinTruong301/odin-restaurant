import "./styles.css";
import { InsertMenu } from "./menu.js";
import { InsertHome } from "./home.js";
import { InsertContact } from "./contact.js";


//Initial Load
InsertHome();

//button assignment
let homeButton = document.querySelector("#home");
homeButton.addEventListener("click", InsertHome);

let menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", InsertMenu);

let contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", InsertContact);