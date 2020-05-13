import DOMPrinter from "./DOMPrinter.js"

//function findRestaurantWithAPI uses full text search by passing parameter into the URL; cons: selects the restaurant if the search input exists ANYWHERE in each restaurant object's values-not just their names

const apiManager = {
    findRestaurantWithAPI(searchInput){
        return fetch(`http://localhost:8088/restaurants?q=${searchInput}`)
        .then(r => r.json())
        .then(restaurantsArray => {

            restaurantsArray.forEach(restaurant => {

                document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestaurantCard(restaurant)

            })
        }) 
    },
    findRestaurant (searchInput){
        return fetch(`http://localhost:8088/restaurants`)
        .then(r => r.json())
        .then(restaurantsArray => {
            console.log(restaurantsArray)
            restaurantsArray.forEach(restaurant => {

                const restaurantName = restaurant.name.toLowerCase()

                if(restaurantName.includes(searchInput) === true){
                    document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestaurantCard(restaurant)
                }

            })

        }) 
    },
    addNewRestaurant(){
        fetch("http://localhost:8088/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(DOMPrinter.createNewRestaurant())
        }).then(() => {
            fetch("http://localhost:8088/restaurants")
                .then(response => response.json())
                .then(parsedRestaurants => {
                
                    DOMPrinter.createResultsContainer()
                    DOMPrinter.removeResults()

                    parsedRestaurants.forEach(singleRestaurant => { 
                        document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestaurantCard(singleRestaurant)
                    })
                })
        })
    },
    deleteNewRestaurant(){
        const primaryKey = event.target.id.split("-")[2];
      // Use id to make a fetch call w/ a DELETE method to the database
        fetch(`http://localhost:8088/restaurants/${primaryKey}`, {
            method: "DELETE",
        }).then(() => {
            fetch("http://localhost:8088/restaurants")
                .then(response => response.json())
                .then(parsedRestaurants => {
                    DOMPrinter.createResultsContainer()
                    DOMPrinter.removeResults()
                    parsedRestaurants.forEach(singleRestaurant => {
                        
                        console.log(singleRestaurant)
                        document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestaurantCard(singleRestaurant)
                    })
                })
        }) 
    },
    editNewRestaurant(id){
        return fetch(`http://localhost:8088/restaurants/${id}`)
        .then(r => r.json())
        .then(restaurantToBeEdited => {
                
            console.log(`card-restaurant-${id}`)

            document.querySelector(`#card-rest-${id}`).innerHTML = DOMPrinter.buildEditForm(restaurantToBeEdited);
        })
    },
    saveNewRestaurant(id){
        return fetch(`http://localhost:8088/restaurants/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(DOMPrinter.createEditedRestaurantObject(id))
        }).then(() => {
            fetch("http://localhost:8088/restaurants")
                .then(response => response.json())
                .then(parsedRestaurants => {
                    DOMPrinter.createResultsContainer()
                    DOMPrinter.removeResults()
                    parsedRestaurants.forEach(singleRestaurant => {
                        
                        console.log(singleRestaurant)
                        document.querySelector("#restaurant-list").innerHTML += DOMPrinter.createRestaurantCard(singleRestaurant)
                    })
                })
        }) 
    }
}

export default apiManager
