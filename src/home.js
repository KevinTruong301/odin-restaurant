export function InsertHome()
{
    //Create Menu div that contains menu Info
    let homeDiv = document.createElement("div");
    homeDiv.className = "home-content";

    let menuItem1 = document.createElement("p")
    homeDiv.className = "home-item";
    homeDiv.textContent = "THIS IS HOME";

    homeDiv.appendChild(menuItem1);

    //Get the div
    let contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    //insert whatever info
    contentDiv.appendChild(homeDiv);
}