let todoBien = true;


export const customFetch = (timeout, data) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if (todoBien) {
                resolve(data);
            }else{
                reject("todoMal");
            }
        }, timeout)
    });
};

