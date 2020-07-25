/**
 * Recebe um objeto JSON e transforma em uma query string. 
 * @Example 
 * let querystring = Json2QueryString({ q: 'teste', v: 'asc' });
 * console.log(querystring);
 * "?q=teste&v=asc" 
*/
export function Json2QueryString(json) {
    let querystring = [];
    
    for(let key in json) {
        querystring.push(`${key}=${json[key]}`);
    }

    return '?' + querystring.join('&');
}