export function InsertMenu()
{
    //Create Menu div that contains menu Info
    let menuDiv = document.createElement("div");
    menuDiv.className = "food-menu";

    let menuItem1 = document.createElement("p")
    menuDiv.className = "menu-item";
    menuDiv.textContent = "THIS IS MENU 1";

    menuDiv.appendChild(menuItem1);

    //Get the div
    let contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    //insert whatever info
    contentDiv.appendChild(menuDiv);
}