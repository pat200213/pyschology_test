import axios from "axios";

// Axios to make HTTP requests to interact with your backend application or any remote API
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
}) 

/* interceptor is a function that can be used to intercept 
 and modify requests or responses before they are handled by the application.*/

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axiosClient.interceptors.response.use((res) => {
    
    return res;

}, (error) => {
    const {res} = error;

    if(res.status === 401){
        // Handle token expiration or invalid token
        localStorage.removeItem('ACCESS_TOKEN');
    }
    
    throw error;
})

export default axiosClient;