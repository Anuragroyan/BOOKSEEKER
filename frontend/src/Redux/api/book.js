import axios from 'axios';

const url = 'http://localhost:5000/api/books';
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;
export const fetchbooks = () => axios.get(url);
export const createbooks = (newPost) => {
    return axios.post(url, {...newPost},{
        headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userAuthFromStorage.token}`,
            }
    });
}
export const likebook = (id) => axios.patch(`${url}/${id}/likeBook`);
export const updatedbook = (id, updatedbook) => axios.patch(`${url}/${id}`,updatedbook);
export const deletebook = (id) => axios.delete(`${url}/${id}`); 


