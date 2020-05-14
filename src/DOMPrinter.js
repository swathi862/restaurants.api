const DOMPrinter = {
    createResultsContainer(){
        document.querySelector("#restaurant-container").innerHTML += `<div id = "restaurant-list"></div>`
    },
    removeResults(){
        document.querySelector("#restaurant-list").innerHTML = ""
    },
    createRestaurantCard(restaurant){
        const restaurantHTMLString = `<article class="card" id="card-rest-${restaurant.id}">
        <a href="${restaurant.url}"><h3>${restaurant.name}</h3></a>
        <p>Address: ${restaurant.address}<p>
        <p>User Rating: ${restaurant.averageUserRating}</p>
        <p>Average Cost for Two: $${restaurant.averageCostPerTwo}</p>
        <a href="${restaurant.menuURL}"><button>View Menu</button></a>
        <button id="delete-btn-${restaurant.id}">Delete</button>
        <button id="edit-btn-${restaurant.id}">Edit</button>
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
    },
    buildEditForm (restaurant) {
        const editCard = `
        <form>
            <input id="restaurant-name-edit" type="text" value ="${restaurant.name}" placeholder="Add a restaurant name here" autofocus />
            <input id="restaurant-URL-edit" type="text" value = "${restaurant.url}" placeholder="Add restaurant URL here" autofocus />
            <input id="restaurant-menuURL-edit" type="text" value = "${restaurant.menuURL}" placeholder="Add restaurant menu URL here" autofocus />
            <input id="restaurant-userRating-edit" type="text" value = "${restaurant.averageUserRating}" placeholder="Add average user rating here" autofocus />
            <input id="restaurant-cost-edit" type="text" value = "${restaurant.averageCostPerTwo}" placeholder="Add average cost for two here" autofocus />
            <input id="restaurant-address-edit" type="text" value = "${restaurant.address}" placeholder="Add restaurant's address here" autofocus />
        </form>
            <button id="save-edit-${restaurant.id}">Save Changes</button>
        `
        return editCard
    },
    createEditedRestaurantObject(id){
        const editedRestaurant = {
            id: `${id}`,
            url: document.querySelector("#restaurant-URL-edit").value,
            menuURL: document.querySelector("#restaurant-menuURL-edit").value,
            name: document.querySelector("#restaurant-name-edit").value,
            averageUserRating: document.querySelector("#restaurant-userRating-edit").value,
            averageCostPerTwo: document.querySelector("#restaurant-cost-edit").value,
            address: document.querySelector("#restaurant-address-edit").value
        }

        return editedRestaurant;
    }
}

export default DOMPrinter