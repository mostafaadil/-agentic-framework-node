class CrewManager {
  constructor(agents) {
    this.agents = agents;
  }

  async runMission(task) {
    for (const agent of this.agents) {
      const result = await agent.think(task);
      console.log(`${agent.name} (${agent.role}) responded:`, result);
    }
  }
}

module.exports = CrewManager;
