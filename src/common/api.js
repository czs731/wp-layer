import request from "./request.js";

request.baseUrl = 'http://192.168.0.121/service_api/api_v5/manage.php';

const api = {
  upload_file : async function (file,dir=''){
    try {
      if(!file){
        return {
          errcode : 1000,
          errmsg : 'cancel',
          style : 'cancel'
        }
      }
      return await request.upload(file, dir, 'upload', 'file');
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  upload : async function (method,data={}){
    try {
      if(!method){
        return {
          errcode : 1000,
          errmsg : 'cancel',
          style : 'cancel'
        }
      }
      return await request.post('upload', method, data);
    }catch (e) {
      console.log(e);
      return false;
    }
  },
}

export default api;