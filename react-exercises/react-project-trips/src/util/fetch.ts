export const customFetch = async (url:string, method:string, body:string = '', authorization:string = '') => {
    let response;
    if(method === 'GET'){
        response = await fetch(`http://127.0.0.1:3000/api/${url}`);

    }else if(method === 'POST' || method === 'PUT' || method === 'DELETE'){
        response = await fetch(`http://127.0.0.1:3000/api/${url}`, {
            method,
            body,
            headers:{
                "Content-Type": "application/json",
                authorization,
            }
        });
    }

    return response;
};
