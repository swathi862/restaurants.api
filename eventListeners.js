const searchForRestaurant = () => {

    createResultsContainer()
    const searchInput = document.querySelector("#searchText").value.toLowerCase()
    removeResults()

    findRestaurant(searchInput) 
}