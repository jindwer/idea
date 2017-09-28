/*
* axios的基本配置
*/
import axios from 'axios'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 15000;

export default axios
