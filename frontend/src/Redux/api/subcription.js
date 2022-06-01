import axios from 'axios';

const url = 'http://localhost:5000/api/subcriptions';
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;
export const fetchsubcription = () => axios.get(url);
export const createsubcription = (newSubcription) => {
    return axios.post(url, {...newSubcription},
    {
       headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userAuthFromStorage.token}`,
            }
    });
}
export const approvesubcribe = (id) => axios.delete(`${url}/${id}`);  
  


