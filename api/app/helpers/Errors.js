class BaseError {
    constructor(msg,type,data) {
        console.log("ERROR: ",msg, type, data);
        let err = new Error(msg);
        if (data) {
            err.data = {
                type: type,
                msg: msg,
                data: data
            } 
        } 
        else 
        {
            err.data = {
                type: type,
                msg: msg,
            } 
        }
        return err;
    }
}

module.exports = {};