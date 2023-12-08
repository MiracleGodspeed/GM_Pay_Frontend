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
        return axios.post(`/Merchant/CreateMerchant`, data, headers)
    },

    createCustomer: (data) => {
        return axios.post(`/Customer/CreateCustomer`, data, headers)
    },
    
    getCustomerTransactionHistory: (data) => {
        return axios.get(`/Customer/TransactionsByCustomerId?customerId=${data}`, headers)
    },
   
    
   
};

export default Endpoint