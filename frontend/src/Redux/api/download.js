import axios from 'axios';

const url = 'http://localhost:5000/api/downloads';
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;
export const fetchdownload = () => axios.get(url);
export const createdownload = (newDownload) => {
    return axios.post(url, {...newDownload},
    {
       headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userAuthFromStorage.token}`,
            }
    });
}
  


