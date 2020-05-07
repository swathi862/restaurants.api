createSearchBar()

document.querySelector("#search-btn").addEventListener("click", function () {
    if(event.target.id === "search-btn"){
        findRestaurant()
    } 
})

document.querySelector("#search-bar").addEventListener("keypress", function (e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        findRestaurant()
    }
})

function findRestaurant(){

        createResultsContainer()

        const searchInputValue = document.querySelector("#searchText").value
        const searchInput = searchInputValue.toLowerCase()

        removeResults()
       
        fetch(`http://localhost:8088/restaurants?q=${searchInput}`)
            .then(r => r.json())
            .then(restaurantsArray => {
                console.log(restaurantsArray)
                
                restaurantsArray.forEach(restaurant => {

                    const restaurantName = restaurant.restaurant.name.toLowerCase()

                    if(restaurantName.includes(searchInput) === true){
                        document.querySelector("#restaurant-list").innerHTML += createRestarauntCard(restaurant)
                    }

                })
            })
        
    }

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
