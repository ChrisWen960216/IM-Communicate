import axios from 'axios';
import { Toast }from 'antd-mobile';

axios.interceptors.request.use(function(config){
  Toast.loading('加载中...');
  return config;
});

axios.interceptors.response.use(function(config){
  setTimeout(() => {Toast.hide();}, 2000);
  return config;
});