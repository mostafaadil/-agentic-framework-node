const axios = require('axios');
require('dotenv').config();

module.exports = {
  name: 'DeepSeekLLM',
  execute: async (prompt) => {
    try {
      const response = await axios.post(
        'https://api.deepseek.com/v1/chat/completions',
        {
          model: 'deepseek-chat',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (err) {
      console.error('DeepSeek error:', err.response?.data || err.message);
      return 'Error fetching result from DeepSeek.';
    }
  }
};
