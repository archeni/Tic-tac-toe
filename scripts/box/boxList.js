import { Box } from "./box.js"

const contentTarget = document.querySelector("#container")

export const boxList = () => {
    contentTarget.innerHTML = Box()
}
