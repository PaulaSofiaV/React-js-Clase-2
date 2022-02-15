let todoBien = true;


export const customFetch = (timeout, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if (todoBien) {
                resolve(task);
            }else{
                reject("todoMal");
            }
        }, timeout)
    });
};

