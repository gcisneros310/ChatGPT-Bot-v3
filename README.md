# **ChatGPT Discord Bot**

This is a basic Discord bot that allows users to communicate with ChatGPT! 

![alt text](https://github.com/gcisneros310/ChatGPT-Bot-v3/blob/master/sample%20images/result.png)

Users can send prompts to the bot using a simple slash command, and the bot will reply quickly within Discord. The bot also tracks conversations and can remember answers from previous prompts.

This bot was developed using an unofficial Node.js package client called chatgpt. For more information on the package and how to integrate it for your own work, please visit the GitHub page [here.](https://github.com/transitive-bullshit/chatgpt-api)


**Table of Contents**
    
- [Prerequisites](#prerequisites)
- [Introduction](#introduction)

<a name="prerequisites"></a>
**Prerequisites**

Before attempting to run this bot locally on your computer, please have a bot application created on your Discord Developer Portal prior to installation. Refer to [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html) for easy instructions.
Also make sure you have the latest version of Node.js installed on your local machine.


<a name="introduction"></a>
**Installation**
1. Download the source code from my repository on GitHub.

2. Open the source code in VS Code or your preferred text editor.

3. Create a .env file in the root directory of the project.

4. Insert the following code into the .env file:

```javascript
DISCORD_TOKEN=your_discord_bot_token_here
OPENAI_TOKEN=your_open_ai_token_here
```

_Note: Replace **your_discord_bot_token_here** and **your_open_ai_token_here** with your actual Discord bot token. 
For help getting an OpenAI API key, please visit [here](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)
For help getting a Discord API key for your bot, refer [here](https://docs.discordbotstudio.org/setting-up-dbs/finding-your-bot-token)_

5. Install the required chatgpt package by running the following command in the terminal:
```terminal
npm install chatgpt
```

6. Before starting the bot, you must deploy the command for sending prompts to the API. You can do this by running this command:
```
node deploy-commands.js
```

This will load the commands to the bot. At the moment there is only one command but if you want to add more functionality, feel free to create your own. I am also receptive to ideas for commands to integrate. 

7. Start the Discord bot by running the following command in the terminal:
```
node index.js
```

Your Discord bot should now be running on your local server! Go ahead and test it out by typing /send in your Discord server. Make sure to fill in the required **prompt** section of the command to receive a response.

![alt text](https://github.com/gcisneros310/ChatGPT-Bot-v3/blob/master/sample%20images/prompt%20sample.png)

_Note: You may need to invite your bot to your Discord server before it can interact with users. To do this, you can follow the instructions in the Discord Developer Portal._
