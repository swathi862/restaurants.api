import DOMPrinter from "./DOMPrinter.js"
import eventListeners from "./eventListeners.js"

DOMPrinter.createSearchBar()

document.querySelector("#search-btn").addEventListener("click", function () {
    if(event.target.id === "search-btn"){
        eventListeners.searchForRestaurant()

    } 
})

document.querySelector("#search-bar").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        eventListeners.searchForRestaurant()
    }
})

document.querySelector("#submit-btn").addEventListener("click", function(){
    if(event.target.id === "submit-btn"){
        eventListeners.addRestaurant()
    }
})

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete-btn")) {
        eventListeners.deleteRestaurant()
    }
})

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("edit-btn")) {
        eventListeners.editRestaurant()
    }
})

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("save-edit")) {
        eventListeners.saveRestaurant()
    }
})
