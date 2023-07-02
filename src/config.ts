import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../.env') })


const config = new Configuration({
    apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(config);

export default openai