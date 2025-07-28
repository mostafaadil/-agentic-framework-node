const ReasoningAgent = require('./agents/reasoningAgent');
const DeepSeekLLM = require('./tools/deepSeekLLM');
const CrewManager = require('./crew/crewManager');

const strategist = new ReasoningAgent("Eli", "Strategist", [DeepSeekLLM]);

const crew = new CrewManager([strategist]);
crew.runMission("Create a 3-step market entry strategy for an AI product in the EU.");
