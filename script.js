createSearchBar()

document.querySelector("#search-btn").addEventListener("click", function () {
    if(event.target.id === "search-btn"){
        searchForRestaurant()
    } 
})

document.querySelector("#search-bar").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        searchForRestaurant()
    }
})
