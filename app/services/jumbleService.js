
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

  createCheckSubmit() {
    if (document.getElementById(`content`).value == AppState.activeJumble.body) {
      console.log(`you win`);

    }

    else {
      console.log(`you lose`);

    }

  }
}

export const jumbleServices = new JumbleServices()