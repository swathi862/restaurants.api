import DOMPrinter from "./DOMPrinter.js"

//function findRestaurantWithAPI uses full text search by passing parameter into the URL; cons: selects the restaurant if the search input exists ANYWHERE in each restaurant object's values-not just their names

const apiManager = {
    findRestaurantWithAPI(searchInput){
        return fetch(`http://localhost:8088/restaurants?q=${searchInput}`)
        .then(r => r.json())
        .then(restaurantsArray => {

            restaurantsArray.forEach(restaurant => {

                document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestarauntCard(restaurant)

            })
        }) 
    },
    findRestaurant (searchInput){
        return fetch(`http://localhost:8088/restaurants`)
        .then(r => r.json())
        .then(restaurantsArray => {

            restaurantsArray.forEach(restaurant => {

                const restaurantName = restaurant.restaurant.name.toLowerCase()

                if(restaurantName.includes(searchInput) === true){
                    document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestarauntCard(restaurant)
                }

            })
        }) 
    } 
}

export default apiManager
