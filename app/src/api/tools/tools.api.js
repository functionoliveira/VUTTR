export default class ToolsAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/tools/');
        return call;
    }

    search(query) {
        const call = this.instance.get('/tools/', {params : query});
        return call;    
    }

    find(id) {
        const call = this.instance.get(`/tools/${id}/`);
        return call;
    }

    create(body) {
        const call = this.instance.post(`/tools/`, body);
        return call;
    }

    update(id, body) {
        const call = this.instance.put(`/tools/${id}/`, body);
        return call;
    }

    remove(id) {
        const call = this.instance.delete(`/tools/${id}/`);
        return call;
    }
}