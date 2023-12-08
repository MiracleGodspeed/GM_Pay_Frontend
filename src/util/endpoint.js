import axios from 'axios'

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};


const Endpoint = {
    init: () => {
            axios.defaults.baseURL = "http://localhost:5027/api";
            
        // Intercept 401 HTTP Error code in API
        axios.interceptors.response.use(response => response, (error) => {
            if (!error.response) {
                //No response
            } else if (error.response && error.response.status === 401 && error.response.config.url !== '/') {
                //
            }

            return Promise.reject(error.response);
        });
    },
    

   

    createMerchant: (data) => {
        console.log(data, "dddddd")
        return axios.post(`/Merchant/CreateMerchant`, data, headers)
    },
    
    getUnpublishedBets: (data) => {
        return axios.get(`/Bet/GetUserUnpublishedBets?userId=${data}`, headers)
    },
   
    
   
};

export default Endpoint