const { SlashCommandBuilder } = require('discord.js');
const chatgpt = import("chatgpt").then(gpt => gpt);
require('dotenv').config();

// Create an instance of ChatGPTAPI outside of the command handler
// this maintains that only a single instance of the API connection is running
const apiPromise = chatgpt.then(gpt => new gpt.ChatGPTAPI({ apiKey: process.env.OPENAI_TOKEN }));
let conversationId = '';
let parentMessageId = '';
module.exports = {
    data: new SlashCommandBuilder()
        .setName('send')
        .setDescription('Send a request to ChatGPT')
        .addStringOption(option => option.setName('prompt').setDescription('prompt you want to send chatgpt').setRequired(true)),       
    async execute(interaction) {
        try {
            const prompt = interaction.options.getString('prompt'); // receive input as string
            await interaction.deferReply(); // defer reply to fully receive response from API
            const api = await apiPromise;
            const response = await api.sendMessage(prompt, {
                conversationId: conversationId, // 
                parentMessageId: parentMessageId
              })
            conversationId = response.conversationId; // record ID of last conversation for future followups
            parentMessageId = response.id; // likewise for parent message ID
            await interaction.editReply(response.text); // send reply back to user after response is fully generated
        }
        catch(err) {
            console.log(err)
        }
    }
}