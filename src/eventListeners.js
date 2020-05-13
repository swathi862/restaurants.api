import apiManager from "./apiManager.js"
import DOMPrinter from "./DOMPrinter.js"

const eventListeners = {
    searchForRestaurant (){
        DOMPrinter.createResultsContainer()
        const searchInput = document.querySelector("#searchText").value.toLowerCase()
        DOMPrinter.removeResults()
    
        apiManager.findRestaurant(searchInput) 
    },
    addRestaurant(){           
        DOMPrinter.createResultsContainer()
        DOMPrinter.removeResults()

        apiManager.addNewRestaurant()
    },
    deleteRestaurant(){
        apiManager.deleteNewRestaurant()
    },
    editRestaurant(){
        const editID = event.target.id.split("-")[2]

        apiManager.editNewRestaurant(editID)
    },
    saveRestaurant(){
        const saveID = event.target.id.split("-")[2]

        apiManager.saveNewRestaurant(saveID)
    } 
}


export default eventListeners