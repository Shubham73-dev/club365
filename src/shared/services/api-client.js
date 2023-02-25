import axios from "axios";
const apiClient = {
    get(url){
        return axios.get(url)
    },
    post(url,data){
        return axios.post(url,data)
    }
}

export default apiClient