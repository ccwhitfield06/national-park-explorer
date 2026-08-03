const favoriteButtons = document.querySelectorAll(".park-card button:not(.visit-button)");
const visitButtons = document.querySelectorAll(".visit-button");


favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".park-card");
        const parkName = card.querySelector("h2").textContent;


        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


        if (!favorites.includes(parkName)) {

            favorites.push(parkName);

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

            button.textContent = "Saved!";

        }

    });

});




visitButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".park-card");
        const parkName = card.querySelector("h2").textContent;


        let visited = JSON.parse(localStorage.getItem("visited")) || [];


        if (!visited.includes(parkName)) {

            visited.push(parkName);

            localStorage.setItem(
                "visited",
                JSON.stringify(visited)
            );

            button.textContent = "Visited!";

        }

    });

});





const searchBar = document.getElementById("searchBar");


if (searchBar) {

    const parks = document.querySelectorAll(".park-card");


    searchBar.addEventListener("keyup", () => {

        const searchText =
        searchBar.value.toLowerCase();


        parks.forEach(park => {

            const name =
            park.querySelector("h2")
            .textContent
            .toLowerCase();


            if(name.includes(searchText)) {

                park.style.display = "block";

            } else {

                park.style.display = "none";

            }

        });

    });

}
