/** Classe responsável por coordenar ações das rotas /tools/ */
export default class ToolsAPI {

    /**
     * Recebe uma instância axios para consultar o endpoint /tools/.
     * @param {Axios} instance - Instância axios criada através do comando axios.create({...})
    */
    constructor(instance) {
        this.instance = instance;
    }

    /**
     * Método responsável por listar todos os registros da entidade Tools.
     * @return {Promise} Promise com a resposta da requisição.
    */
    list() {
        const call = this.instance.get('/tools/');
        return call;
    }

    /**
     * Método responsável por buscar registros baseando-se na query string enviada.
     * @param {JSON} query - Objeto JSON que será transformado na query string de consulta.
     * Ex.: {chave:valor} -> ?chave=valor
     * @return {Promise} Promise com a resposta da requisição.
    */
    search(query) {
        const call = this.instance.get('/tools/', {params : query});
        return call;    
    }

    /**
     * Método responsável por retornar um registro específico da Entidade Tools baseando-se no ID.
     * @param {Number} id - Identificador único da Entidade Tools.
     * @return {Promise} Promise com a resposta da requisição.
    */
    find(id) {
        const call = this.instance.get(`/tools/${id}/`);
        return call;
    }

    /**
     * Método responsável criar um novo registro da entidade Tools.
     * @param {JSON} body - Json com as informações de cadastro da entidade Tools.
     * @return {Promise} Promise com a resposta da requisição.
    */
    create(body) {
        const call = this.instance.post(`/tools/`, body);
        return call;
    }

    /**
     * Método responsável atualizar um registro da entidade Tools.
     * @param {Number} id - Identificador único da Entidade Tools.
     * @param {JSON} body - Json com as informações para atualização da entidade Tools.
     * @return {Promise} Promise com a resposta da requisição.
    */
    update(id, body) {
        const call = this.instance.put(`/tools/${id}/`, body);
        return call;
    }

    /**
     * Método responsável remover um registro da entidade Tools através do ID.
     * @param {Number} id - Identificador único da Entidade Tools.
     * @return {Promise} Promise com a resposta da requisição. 
    */
    remove(id) {
        const call = this.instance.delete(`/tools/${id}/`);
        return call;
    }
}