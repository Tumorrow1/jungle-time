import { generateId } from "../utils/GenerateId.js"

export class jumble {

  /**
   * @param {{ name: string; body: string; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
  }
  get jumbleListHTML() {
    return `
    <div>
                <span class="mt-2">
                  <button onclick="app.jumbleController.selectActiveJumble('${this.id}')">start</button>
                </span>
                <span>${this.name}</span>
                <span>${this.body}</span>
              </div>
    `
  }
}