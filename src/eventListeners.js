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
        DOMPrinter.createResultsContainer()
        DOMPrinter.removeResults()
        
        apiManager.deleteNewRestaurant()
    } 
}


export default eventListeners