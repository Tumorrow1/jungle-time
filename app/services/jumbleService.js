
import { AppState } from "../AppState.js"
import { jumble } from "../models/jumble.js"

class JumbleServices {
  createJumble(jumbleData) {
    AppState.jumble.push(new jumble(jumbleData))
  }
  setActiveJumble(id) {
    console.log(AppState.jumble.find(jumblearray => jumblearray.id == id));

    AppState.activeJumble = AppState.jumble.find(jumblearray => jumblearray.id == id)
  }

}

export const jumbleServices = new JumbleServices()