import { jumble } from './models/jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jumble = [
    new jumble({
      name: `🐒`, body: `monkey go's bananas`
    }),

    new jumble({ name: `🦒`, body: `loves them leaves` }),
    new jumble({ name: `🐻`, body: `time for fish` }),
  ]

}
export const AppState = createObservableProxy(new ObservableAppState())