import axios from 'axios';

const url = 'http://localhost:5000/api/payments';
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;
export const fetchpayments = () => axios.get(url);
export const createpayment = (newPayment) => {
    return axios.post(url, {...newPayment},
    {
       headers: {
            'Content-Type': 'application/json',
            authorization: `anirban ${userAuthFromStorage.token}`,
            }
    });
}
export const approvepayment = (id) => axios.delete(`${url}/${id}`);  


