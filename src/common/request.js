import axios from "axios";
import tools from "./tools.js";

// let baseUrl;
//
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://192.168.0.121/service_api/erox/';
// } else {
//   baseUrl = 'https://mpuws.itea.mobi/api/';
// }
//
// const Api = 'manage.php'
const deBug = true;

const requestPost  = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
  method: 'post',
  timeout: 60000,
})

// eslint-disable-next-line no-unused-vars
const requestGet = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
  method: 'get',
  timeout: 60000,
})


const request = {
  baseUrl : '',
  deBug : false,
  /**
   * 发起post接口
   * @param port
   * @param method
   * @param data
   * @returns {Promise<{errcode: number, errmsg: string, style: string}|*|boolean>}
   */
  post : async function (port='',method='',data={}){
    try {
      if(!port ||!method){
        return {
          errcode : 1000,
          errmsg : 'error code 1000',
          style : 'cancel'
        }
      }
      let url = await this.setUrl(port,method,data);
      if(!url){
        return {
          errcode : 1001,
          errmsg : 'error code 1001',
          style : 'cancel'
        }
      }
      let keys = Object.keys(data);
      let data_str = '';
      if(keys.length){
        data_str = tools.$dataToJson(data);
        data_str = tools.$base64Encode(data_str);
        data_str = tools.$aseEncode(data_str,url.token);
      }
      requestPost.defaults.headers['Access-Token'] = url.token;
      let post_data;
      if (this.deBug) {
        post_data = {
          m : url.url,
          d : data_str,
          r : JSON.stringify(data),
        }
      } else {
        post_data = {
          m : url.url,
          d : data_str
        }
      }
      let res = await requestPost(this.baseUrl+url.raw, {  data : post_data })
      if (res.status==200) {
        let ase = res.data.ase || false;
        if (ase) {
          let data = tools.$aseDecode(ase,url.token);
          if(data){
            data = JSON.parse(tools.$base64Decode(data));
            return data;
          }else{
            return {
              errcode : 1100,
              errmsg : 'error decode',
              style :'cancel'
            }
          }
        } else {
          return res.data;
        }
      } else {
        return {
          errcode : 1099,
          errmsg : 'error net work',
          style :'cancel'
        }
      }
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  // eslint-disable-next-line no-unused-vars
  get : async function (port='',method='',data={}){

  },
  // eslint-disable-next-line no-unused-vars
  /**
   * 上传单文件接口
   * @param file
   * @param dir
   * @param port
   * @param method
   * @returns {Promise<{errcode: number, errmsg: string, style: string}|*|boolean>}
   */
  upload : async function (file,dir='',port='upload',method='file'){
    try {
      if(!file){
        return {
          errcode : 100,
          errmsg : 'error code 1089',
          style : 'cancel'
        }
      }
      let post_data = { dir : dir }
      let url = await this.setUrl(port,method,post_data);
      if(!url){
        return {
          errcode : 1001,
          errmsg : 'error code 1001',
          style : 'cancel'
        }
      }
      let form = new FormData();
      form.append('file',file);
      form.append('m',url.url);
      if(this.deBug){
        form.append('raw',tools.$dataToJson(post_data));
      }
      post_data = tools.$dataToJson(post_data);
      post_data = tools.$base64Encode(post_data);
      post_data = tools.$aseEncode(post_data,url.token);
      form.append('d',post_data);
      requestPost.defaults.headers['Access-Token'] = url.token;

      let res = await requestPost(this.baseUrl,{ data : form  });
      if (res.status==200) {
        let ase = res.data.ase || false;
        if (ase) {
          let data = tools.$aseDecode(ase,url.token);
          if(data){
            data = JSON.parse(tools.$base64Decode(data));
            return data;
          }else{
            return {
              errcode : 1100,
              errmsg : 'error decode',
              style :'cancel'
            }
          }
        } else {
          return res.data;
        }
      } else {
        return {
          errcode : 1099,
          errmsg : 'error net work',
          style :'cancel'
        }
      }
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  // eslint-disable-next-line no-unused-vars
  uploadList : async function (files,dir='',port='upload',method='file'){
    try {
      if(!files || files.length==0){
        return false;
      }
      let urls = [];
      for (let i = 0; i < files.length; i++) {
        let res = await this.upload(files[i],dir,port,method);
        if(res.errcode == 0){
          urls.push(res.url);
        }
      }
      if (urls.length) {
        return urls;
      } else {
        return false;
      }
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  setUrl : async function (port='',method='',data={}){
    try {
      if(!port || !method){
        return false;
      }
      // eslint-disable-next-line no-unused-vars
      let url,str_1,str_2,str_3;
      let time = new Date().getTime();
      // eslint-disable-next-line no-unused-vars
      let token = tools.$getLocal('token');
      let access_token = token ? token.token : time;
      str_1 = 'port='+port+'&method='+method+'&time='+time;
      let keys = Object.keys(data);
      if (keys.length>0) {
        str_2 = tools.$dataToQs(data);
        str_3 = str_1 + str_2 + access_token;
      } else {
        str_3 = str_1 + access_token;
      }
      if(this.deBug){
        console.log(str_3,'str_3');
      }
      let sign = tools.$md5(str_3);
      let urlData = { port : port, method : method,time :time, sign : sign };
      let urlDataStr = tools.$base64Encode(tools.$dataToJson(urlData));
      return {
        url : tools.$aseEncode(urlDataStr,access_token),
        token : access_token,
        raw : this.deBug ? '?'+str_1 : '',
      }
    }catch (e) {
      tools.$clearLocal();
      console.log(e,2222222222);
      return false;
    }
  },
}

export default request;