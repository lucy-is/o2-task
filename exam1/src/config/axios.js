/**
 * @description axios base url 설정
 */
import axios from 'axios';

// env 호출
const LOCALHOST = process.env.VUE_APP_API_URL;

axios.defaults.baseURL = LOCALHOST;

export default axios;
