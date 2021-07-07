const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id === "TableBox") {
        const playerChoseEvent = new CustomEvent("playerChose")
    }
    
    eventHub.dispatchEvent(playerChoseEvent)
})