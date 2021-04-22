import axios from 'axios';
import { BASE_URL } from '../../config/constants';

class AuthService {

    handleLogin(credentials){
        return axios.post(`${BASE_URL}/authenticate`, credentials);
    }

    setUserInfo(credentials){
        return localStorage.setItem("userInfo", credentials);
    }

    getUserInfo(){
        return localStorage.getItem("userInfo");
    }

}

export default new AuthService();