const BaseAgent = require('./baseAgent');

class ReasoningAgent extends BaseAgent {
  async think(task) {
    const llmTool = this.tools.find(t => t.name === "DeepSeekLLM");
    const prompt = `You are a ${this.role}. Complete the following task: ${task}`;
    const result = await llmTool.execute(prompt);
    this.remember(result);
    return result;
  }
}

module.exports = ReasoningAgent;
