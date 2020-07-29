import axios from 'axios';
import ToolsAPI from './tools/tools.api';

// Cria uma instância da api Axios cuja url base é http://localhost:3000 
const vuttrAPI = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: { 
        'Content-Type' : 'application/json',
    }
});

// Cria uma instância da classe ToolsAPI responsável por consultar o endpoint /tools/
const instanceToolsAPI = new ToolsAPI(vuttrAPI);

// Exporta todas as instâncias de APIs cadastradas e utilizadas pelo projeto
export { instanceToolsAPI };