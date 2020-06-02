import { getData } from "./data.js"
import { showCards } from "./ui.js"


getData().then(results => {
    showCards(results)
    console.log(results);
})





