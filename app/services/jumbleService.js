import { AppState } from "../AppState.js"
import { jumble } from "../models/jumble.js"

class JumbleServices {
  createJumble(jumbleData) {
    AppState.jumble.push(new jumble(jumbleData))
  }
}

export const jumbleServices = new JumbleServices()