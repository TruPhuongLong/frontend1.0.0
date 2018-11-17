import axios from 'axios';

import {KEY_FILE_UPLOAD} from '../libs/constant';

// in axios res.data = res.body

export const get = (url) => {
    return axios.get(url)
        .then(res => res.data)
}

export const post = (url, model) => {
    return axios.post(url, model)
        .then(res => res.data)
}


export const postForm = (url, model, files) => {
    const fd = cookForm(model, files);
    return post(url, fd);
}

export const put = (url, model) => {
    return axios.put(url, model)
        .then(res => res.data)
}

export const putForm = (url, model, files) => {
    const fd = cookForm(model, files)
    return put(url, fd);
}

export const remove = (url) => {
    return axios.delete(url)
        .then(res => res.data)
}

function cookForm (model, files) {
    const fd = new FormData();

    if(files && files.length){
        files.map(file => {
            fd.append(KEY_FILE_UPLOAD, file)
        })
    }

    Object.keys(model).map(key => {
        fd.append(key, model[key]);
    })

    return fd;
}