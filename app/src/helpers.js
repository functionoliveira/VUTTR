export function Json2QueryString(json) {
    let querystring = [];
    
    for(let key in json) {
        querystring.push(`${key}=${json[key]}`);
    }

    return '?' + querystring.join('&');
}