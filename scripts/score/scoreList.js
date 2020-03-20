import { scoreHTML } from "./scoreHTML.js"

const contentTarget = document.querySelector("#container")

export const scoreMaker = () => {
    contentTarget.innerHTML += scoreHTML()
}