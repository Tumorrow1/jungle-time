import { AppState } from "../AppState.js";
import { jumbleServices } from "../services/jumbleService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JumbleController {
  constructor() {
    AppState.on(`jumble`, this.drawJumbleList)
    console.log(`hi`);
    this.drawJumbleList()
  }
  drawJumbleList() {
    const jumbles = AppState.jumble
    let jumblesContent = ``
    jumbles.forEach(jumble => jumblesContent += jumble.jumbleListHTML)
    document.getElementById(`jumbleList`).innerHTML = jumblesContent

  }
  createJumble() {
    event.preventDefault()
    const formElm = event.target
    const jumbleData = getFormData(formElm)
    console.log(`jungle data`, jumbleData);
    jumbleServices.createJumble(jumbleData)



  }
}