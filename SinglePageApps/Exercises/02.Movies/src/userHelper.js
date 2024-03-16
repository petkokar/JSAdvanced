function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function getUserToken() {
    const userData = getUserData();
    return userData?.accessToken;
}

function getUserId() {
    const userData = getUserData();
    return userData?._id;
}

async function clear(){
    return sessionStorage.removeItem('userData')
}


export {
    setUserData,
    getUserData,
    getUserToken,
    getUserId,
    clear
};