function validator(object) {
    let isValid = true;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialChars = ['<', '>', '&', '\'', '"', '\\'];
    if (!validMethods.includes(object.method)) {
        isValid = false;
        console.log('Invalid request header: Invalid Method');
    }

    if (!uriPattern.test(object.uri)) {
        isValid = false;
        console.log('Invalid request header: Invalid Uri');
    }

    if (!validVersions.includes(object.version)) {
        isValid = false;
        console.log('Invalid request header: Invalid Version');
    }

    if (!isValidMessage(object.message)) {
        isValid = false;
        console.log('Invalid request header: Invalid Message');
    }

    function isValidMessage(message) {
        if (message == '') {
            return true;
        }

        if(specialChars.includes(message)) {
            return false;
        }
    }

    if (isValid) {
        console.log(object);
    }
}


validator({

    method: 'GET',
    
    uri: 'svn.public.catalog',
    
    version: 'HTTP/1.1',
    
    message: ''
    
    })