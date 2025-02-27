import { jumble } from './models/jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jumble = [
    new jumble({
      name: `🐒 Mike `, body: `monkey go's bananas`
    }),

    new jumble({ name: `🦒 Jeff`, body: `loves them leaves` }),
    new jumble({ name: `🐻 Berry`, body: `time for fish` }),
  ]

  activeJumble = null

}
export const AppState = createObservableProxy(new ObservableAppState())