import apiManager from "./apiManager.js"
import DOMPrinter from "./DOMPrinter.js"

const searchForRestaurant = () => {
    DOMPrinter.createResultsContainer()
    const searchInput = document.querySelector("#searchText").value.toLowerCase()
    DOMPrinter.removeResults()

    apiManager.findRestaurant(searchInput) 
}

export default searchForRestaurant