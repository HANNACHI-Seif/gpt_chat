
# gpt chat

a casual cli chatgpt tool to quickly interact with gpt-3.5-turbo from the terminal, might add cool features in the future.



## Tech 

Node, Typescript and openai liberary

## Installation

run the following commands to build the project:

```bash
  git clone rep_url
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
