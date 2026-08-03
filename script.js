const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Saved!";
    });
});


const searchBar = document.getElementById("searchBar");
const parks = document.querySelectorAll(".park-card");

searchBar.addEventListener("keyup", () => {
    const searchText = searchBar.value.toLowerCase();

    parks.forEach(park => {
        const parkName = park.querySelector("h2").textContent.toLowerCase();

        if (parkName.includes(searchText)) {
            park.style.display = "block";
        } else {
            park.style.display = "none";
        }
    });
});
