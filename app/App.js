import { ExampleController } from './controllers/ExampleController.js';
import { JumbleController } from './controllers/jumbleController.js';

class App {
  jumbleController = new JumbleController()
}

window['app'] = new App()


