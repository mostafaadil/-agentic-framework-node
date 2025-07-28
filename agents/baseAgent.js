class BaseAgent {
  constructor(name, role, tools = []) {
    this.name = name;
    this.role = role;
    this.tools = tools;
    this.memory = [];
  }

  async think(task) {
    throw new Error("think() must be implemented by subclass.");
  }

  remember(item) {
    this.memory.push(item);
  }

  getMemory() {
    return this.memory;
  }
}

module.exports = BaseAgent;
