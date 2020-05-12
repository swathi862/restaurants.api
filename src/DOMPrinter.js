const DOMPrinter = {
    createResultsContainer(){
        document.querySelector("#restaurant-container").innerHTML += `<div id = "restaurant-list"></div>`
    },
    removeResults(){
        document.querySelector("#restaurant-list").innerHTML = ""
    },
    createRestaurantCard(restaurant){
        const restaurantHTMLString = `<article class="card" id="card-restaurant">
        <a href="${restaurant.url}"><h3>${restaurant.name}</h3></a>
        <p>Address: ${restaurant.address}<p>
        <p>User Rating: ${restaurant.averageUserRating}</p>
        <p>Average Cost for Two: $${restaurant.averageCostPerTwo}</p>
        <a href="${restaurant.menuURL}"><button>View Menu</button></a>
        <button id="delete-btn-${restaurant.id}">Delete</button>
        </article>`

        return restaurantHTMLString;
    },
    createSearchBar(){
        document.querySelector("#search-bar").innerHTML += `<input id = "searchText" type="text" placeholder = "Enter a restaurant name">
        <button id = "search-btn" type="submit">Search</button>`
    },
    createNewRestaurant(){
        const nameInput = document.querySelector("#restaurant-name").value
        const urlInput = document.querySelector("#restaurant-URL").value
        const menuURLInput = document.querySelector("#restaurant-menuURL").value
        const ratingInput = document.querySelector("#restaurant-userRating").value
        const costInput = document.querySelector("#restaurant-cost").value
        const addressInput = document.querySelector("#restaurant-address").value

        const restaurantObject = {
            url: urlInput,
            menuURL: menuURLInput,
            name: nameInput,
            averageUserRating: ratingInput,
            averageCostPerTwo: costInput,
            address: addressInput
        }

        return restaurantObject;
    } 
}

export default DOMPrinter