import axios from 'axios';
import ToolsAPI from './tools/tools.api';

const vuttrAPI = axios.create({
    baseURL: "http://localhost:3000",
    headers: { 
        'Content-Type' : 'application/json',
    }
});
const instanceToolsAPI = new ToolsAPI(vuttrAPI);

export { instanceToolsAPI };