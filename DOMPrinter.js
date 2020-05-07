function createResultsContainer() {
    document.querySelector("#restaurant-container").innerHTML += `<div id = "restaurant-list"></div>`
}

function removeResults() {
    document.querySelector("#restaurant-list").innerHTML = ""
}

function createRestarauntCard(restaurant) {
    const restaurantHTMLString = `<article class="card" id="card-restaurant">
    <a href="${restaurant.restaurant.url}"><h3>${restaurant.restaurant.name}</h3></a>
    <p>Address: ${restaurant.restaurant.location.address}<p>
    <p>User Rating: ${restaurant.restaurant.user_rating.aggregate_rating}</p>
    <p>Average Cost for Two: $${restaurant.restaurant.average_cost_for_two}</p>
    <a href="${restaurant.restaurant.menu_url}"><button>View Menu</button></a>
    </article>`

    return restaurantHTMLString;
}

function createSearchBar() {
    document.querySelector("#search-bar").innerHTML += `<input id = "searchText" type="text" placeholder = "Enter a restaurant name">
    <button id = "search-btn" type="submit">Search</button>`
}