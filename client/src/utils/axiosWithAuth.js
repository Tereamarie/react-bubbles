import axios from 'axios';

export const axiosWithAuth=()=>{
 return axios.create({
    headers: {
        authorization: localStorage.getItem('token')
    },
    baseURL: 'https://localhost:5000'
   })
}