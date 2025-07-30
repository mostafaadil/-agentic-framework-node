# agentic-framework-node

A modular Agentic AI framework built with Node.js, powered by DeepSeek. Create autonomous agents that can reason, collaborate, and execute tasks using language models.

## 🚀 Features

- Modular agent structure (roles, tools, memory)
- DeepSeek LLM integration (chat & reasoning)
- Task orchestration with multi-agent crews
- Memory handling for agent recall

## 📦 Installation

```bash
npm i agentic-framework
```

## 🧠 Usage

```js
const ReasoningAgent = require('agentic-framework/agents/reasoningAgent');
const DeepSeekLLM = require('agentic-framework/tools/deepSeekLLM');
const CrewManager = require('agentic-framework/crew/crewManager');

const strategist = new ReasoningAgent("Eli", "Strategist", [DeepSeekLLM]);
const crew = new CrewManager([strategist]);

crew.runMission("Create a 3-step market entry strategy for an AI product in the EU.");
```

> ✅ Make sure to set your DeepSeek API key in a `.env` file:

```
DEEPSEEK_API_KEY=your-api-key-here
```

## 📁 Project Structure

```
agentic-framework-node/
├── agents/
├── tools/
├── crew/
├── .env
├── index.js
└── package.json
```

## 📜 License

MIT
