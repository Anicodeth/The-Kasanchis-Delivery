const TelegramBot = require('node-telegram-bot-api');
const token = '6438028060:AAGGMR5agaRxfcacyWpINJIVQuoKHDewXtE'; // Replace with your bot's API token
const app = require('express')();
// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Implement your logic here based on user messages
  if (text === '/start') {
    bot.sendMessage(chatId, 'Welcome to your delivery app bot! How can I assist you?');
  } else if (text === '/help') {
    bot.sendMessage(chatId, 'You can use commands like /order, /track, and /cancel to interact with our delivery service.');
  } else {
    bot.sendMessage(chatId, 'I don\'t understand that command. Type /help to see available commands.');
  }
});
