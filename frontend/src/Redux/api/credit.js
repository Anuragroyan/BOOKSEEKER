import axios from 'axios';

const url = 'http://localhost:5000/api/credits';
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;
export const fetchcredit = () => axios.get(url);
export const createcredit = (newCredit) => {
    return axios.post(url, {...newCredit},
    {
       headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userAuthFromStorage.token}`,
            }
    });
}
  


