import axios from 'axios';

const url = 'http://localhost:5000/api/blogs';
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;
export const fetchblogs = () => axios.get(url);
export const createblog = (newPost) => {
   return axios.post(url, {...newPost},{
        headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userAuthFromStorage.token}`,
            }
    });
}
export const likeblog = (id) => axios.patch(`${url}/${id}/likeBlog`);
export const updateblog = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteblog = (id) => axios.delete(`${url}/${id}`);
