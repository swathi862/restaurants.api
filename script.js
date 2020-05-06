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

                    if(restaurantName.includes(searchInput) === false){
                        return;
                    }

                    document.querySelector("#restaurant-list").innerHTML += createCard(restaurantsArray, createRestarauntList(restaurant.restaurant.url, restaurant.restaurant.name, restaurant.restaurant.location.address, restaurant.restaurant.user_rating.aggregate_rating, restaurant.restaurant.average_cost_for_two), restaurant.restaurant.menu_url)

                    })
                })
        
    }

function createResultsContainer() {
    document.querySelector("#restaurant-container").innerHTML += `<div id = "restaurant-list"></div>`
}

function removeResults() {
    document.querySelector("#restaurant-list").innerHTML = ""
}

function createRestarauntList(restarauntURL, name, address, userRating, avgCost) {
    const restaurantHTMLString = `<a href="${restarauntURL}"><h3>${name}</h3></a>
    <p>Address: ${address}<p>
    <p>User Rating: ${userRating}</p>
    <p>Average Cost for Two: $${avgCost}</p>`

    return restaurantHTMLString;
}

function createCard(restarauntArray, restaurantString, menuURL) {
    for (let i = 0; i < restarauntArray.length; i++) {
        return `
        <article class="card" id="card-restaurant">
            <div>${restaurantString}</div>
            <div>
            <a href="${menuURL}"><button>View Menu</button></a>
            </div>
        </article>`
    }
}

function createSearchBar() {
    document.querySelector("#search-bar").innerHTML += `<input id = "searchText" type="text" placeholder = "Enter a restaurant name">
    <button id = "search-btn" type="submit">Search</button>`
}
