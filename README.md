
# gpt chat

a casual cli chatgpt tool to quickly interact with gpt-3.5-turbo from the terminal, might add cool features in the future.



## Tech 

Node, Typescript and openai liberary

## Installation

run the following commands to build the project:

```bash
  git clone https://github.com/HANNACHI-Seif/gpt_chat.git
  cd gpt_chat
  npm i
  npm run build

```
### env

you need to setup a .env file containing the api key of your chatgpt account(you can generate one easily in your openai account) in the root directory 

```bash
    touch .env
    echo "API_KEY=YOUR_API_KEY_HERE" > .env
```

now you can execute the program by running:
```bash
    npm start

```
## add to /usr/local/bin

to run the program from anywhere

```bash
    chmod +x ./dist/index.js
    ln -s /path/to/index.js /usr/local/bin/gpt
```

finally you can execute the program simply using:
```bash
    gpt
```
you should see:

```bash
    welcome to the gpt chatbot program!
    you can start chatting right away

    /q or quit to exit
    /s or save to save current chat to a text file
    /r or restart to restart the conversation
    /c or clear to clear the console/h or help to display commands

    You:| 
```