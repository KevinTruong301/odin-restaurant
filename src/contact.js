export function InsertContact()
{
    //Create Menu div that contains menu Info
    let contactDiv = document.createElement("div");
    contactDiv.className = "food-menu";

    let menuItem1 = document.createElement("p")
    contactDiv.className = "menu-item";
    contactDiv.textContent = "THIS IS CONTACT";

    contactDiv.appendChild(menuItem1);

    //Get the div
    let contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    //insert whatever info
    contentDiv.appendChild(contactDiv);
}