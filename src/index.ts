#!/usr/bin/env node
import openai from "./config"
import readLineSync from 'readline-sync'
import colors from 'colors'
import fs from 'fs'

type history_entry = {
    role: 'user' | 'assistant'
    content: string
}

let chat_history: history_entry[] = [];

const display_help = () => {
    console.log()
    let message = '/q or quit to exit\n'
    message += '/s or save to save current chat to a text file\n'
    message += '/r or restart to restart the conversation\n'
    message += '/c or clear to clear the console'
    message += '/h or help to display commands'
    console.log(colors.cyan(message))
}

const handleCommand = (user_input: string) => {
    user_input = user_input.toLowerCase();
    switch (user_input) {
        case '/q':
        case '/quit':
            console.log(colors.red('Bye :D'))
            process.exit(0)
            return true;

        case '/s':
        case '/save':
            let file_name = readLineSync.question(colors.bold('Enter the file name: '))
            let data = chat_history.map(entry => `${entry.role}: ${entry.content}`).join('\n\n');
            fs.writeFileSync(`${file_name}.txt`, data);
            console.log(colors.green(`Chat history saved to ${file_name}`));
            return true;

        case '/r':
        case '/restart':
            chat_history = [];
            console.log(colors.bold('the conversation was reset'));
            return true;

        case '/c':
        case '/clear':
            console.clear();
            return true;

        case '/h':
        case '/help':
            display_help();
            return true;

        default:
            return false;
    }
}



(async () => {
    console.log(colors.cyan('welcome to the gpt chatbot program!'))
    console.log(colors.cyan('you can start chatting right away'))
    display_help()
    console.log()

    while (true) {
        let user_input = readLineSync.question(colors.yellow('You: '))
        let result = handleCommand(user_input)
        if (result) continue

        try {
            chat_history.push({role: 'user', content: user_input})

            let chat = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: chat_history
            })
            let answer = chat.data.choices[0].message?.content
            console.log(colors.green('gpt: ') + answer)

            chat_history.push({role: 'assistant', content: answer!})
        } catch (error) {
            console.error(error)
        }
    }
    
})()
