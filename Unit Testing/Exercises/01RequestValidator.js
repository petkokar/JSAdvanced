function validator(object) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialChars = ['<', '>', '&', `'`, '\\', `"`];
    if (!validMethods.includes(object.method)) {
        // console.log('Invalid request header: Invalid Method');
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!object.uri || !object.uri == "*" || !object.uri.match(uriPattern)) {
        // console.log('Invalid request header: Invalid Uri');
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(object.version)) {
        // console.log('Invalid request header: Invalid Version');
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!object.hasOwnProperty("message")) {
        // console.log('Invalid request header: Invalid Message');
        throw new Error('Invalid request header: Invalid Message');
    }

    for(let char of object.message) {
        if (specialChars.includes(char)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return object;
}


validator({

    method: 'OPTIONS',
    
    uri: 'git.master',
    
    version: 'HTTP/1.1',
    
    message: '-recursive'
    
    })