import cryptoJs from 'crypto-js';
import Qs from 'qs';

console.log(cryptoJs);

const Tools = {
  $log : function (){
    let _arg = arguments;
    if (typeof _arg == 'object') {
      for (let i = 0; i < _arg.length; i++) {
        console.log(_arg[i],new Date().getTime());
      }
    } else {
      console.log(_arg,new Date().getTime());
    }
  },
  $base64Encode : function (str=''){
    if(!str){
      return '';
    }
    str = cryptoJs.enc.Utf8.parse(str);
    return cryptoJs.enc.Base64.stringify(str);
  },
  $base64Decode : function (str=''){
    if(!str){
      return '';
    }
    str = cryptoJs.enc.Base64.parse(str);
    return cryptoJs.enc.Utf8.stringify(str);
  },
  /**
   * md5加密
   * @param str
   * @param len
   * @returns {string|*|string}
   */
  $md5 : function (str='',len=32){
    if(!str){
      return '';
    }
    str = cryptoJs.enc.Utf8.parse(str);
    str = cryptoJs.MD5(str).toString();
    if(len == 32){
      return str;
    }
    return  str.substr(8,16);
  },
  /**
   * sha1加密
   * @param str
   * @returns {string|*}
   */
  $sha1 : function (str=''){
    if(!str){
      return '';
    }
    str = cryptoJs.enc.Utf8.parse(str);
    return cryptoJs.SHA1(str).toString();
  },
  /**
   * 数组转为json
   * @param data
   * @returns {string}
   */
  $dataToJson : function (data){
    let keys = Object.keys(data);
    let json = '';
    if(keys && keys.length){
      json = JSON.stringify(data,function (key,val){
        if (typeof val=='boolean') {
          if (val) {
            return 1;
          } else {
            return 0;
          }
        } else if (typeof val == 'number') {
          let point = String(val).indexOf('.')+1;
          let len = String(val).length - point;
          if (point && len>6) {
            return val.toFixed(6).toString;
          } else {
            return val.toString();
          }
        }else{
          return val;
        }
      })
    }
    return json;
  },
  /**
   * 数组转qs
   * @param data
   * @returns {string}
   */
  $dataToQs : function (data){
    let query = {};
    let keys = Object.keys(data);
    let json = '';
    if(keys && keys.length){
      query = this.$dataSort(data);
      json = Qs.stringify(query,{encoder : function (val){
          if (typeof val=='boolean') {
            if (val) {
              return 1;
            } else {
              return 0;
            }
          } else if (typeof val == 'number') {
            let point = String(val).indexOf('.')+1;
            let len = String(val).length - point;
            if (point && len>6) {
              return val.toFixed(6).toString;
            } else {
              return val.toString();
            }
          }else{
            return encodeURIComponent(val);
          }
        }})
    }
    return json;
  },
  $dataSort: function (data) {
    if (!data) {
      return '';
    }
    // let query = data.constructor === Object ? {  } : (data.constructor===Array ? [] : '');
    let query = Object.prototype.toString.call(data) === '[object Object]' ? {} : (Object.prototype.toString.call(data) === '[object Array]' ? [] : '');
    if (data != null) {
      if (Object.prototype.toString.call(data) === '[object Object]') {
        let keys = Object.keys(data);
        keys.sort();
        keys.map((val) => {
          let item = data[val];
          if (item == null) {
            query[val] = item;
          } else {
            if (Object.prototype.toString.call(item) === '[object Object]') {
              query[val] = this.$dataSort(item);
            } else if (Object.prototype.toString.call(item) === '[object Array]') {
              query[val] = this.$dataSort(item);
            } else {
              query[val] = item;
            }
          }
        })
      } else if (Object.prototype.toString.call(data) === '[object Array]') {
        data.map((val, key) => {
          let item = val;
          if (item == null) {
            query[key] = item;
          } else {
            if (Object.prototype.toString.call(item) === '[object Object]') {
              query[key] = this.$dataSort(item);
            } else if (Object.prototype.toString.call(item) === '[object Array]') {
              query[key] = this.$dataSort(item);
            } else {
              query[key] = item;
            }
          }
        })
      } else {
        return data;
      }
      return query;
    } else {
      return data;
    }
  },
  $aseEncode : function (str='',set_key=''){
    if(!str){
      return false;
    }
    if(!set_key){
      set_key = window.navigator.userAgent;
    }
    let enKey = this.$md5(set_key,16);
    let iv = this.$md5(enKey,16)
    enKey = cryptoJs.enc.Utf8.parse(enKey);
    iv = cryptoJs.enc.Utf8.parse(iv);
    str = cryptoJs.enc.Utf8.parse(str);
    let encrypted = cryptoJs.AES.encrypt(str, enKey, { iv: iv });
    return cryptoJs.enc.Base64.stringify(encrypted.ciphertext);
  },
  $aseDecode : function (str ='', set_key=''){
    if(!str){
      return false;
    }
    if(!set_key){
      set_key = window.navigator.userAgent;
    }
    let enKey = this.$md5(set_key,16);
    let iv = this.$md5(enKey,16);
    enKey = cryptoJs.enc.Utf8.parse(enKey);
    iv = cryptoJs.enc.Utf8.parse(iv);
    // let encryptedHexStr = cryptoJs.enc.Hex.parse(str);
    // console.log(encryptedHexStr,4444);
    // let srcs = cryptoJs.enc.Base64.parse(encryptedHexStr);
    // eslint-disable-next-line no-undef
    // console.log(srcs,5555);
    let decrypt = cryptoJs.AES.decrypt(str, enKey, { iv: iv });
    return decrypt.toString(cryptoJs.enc.Utf8)
  },
  $getSession : function (key,isJson=true){
    if(!key){
      return false;
    }
    key = this.md5(key);
    let data = sessionStorage.getItem(key);
    if(!data){
      return false;
    }
    data = this.$aseDecode(data);
    if(!data){
      return false;
    }
    data = this.$base64Decode(data);
    if(!data){
      return false;
    }
    if (isJson) {
      return JSON.parse(data);
    } else {
      return data;
    }
  },
  $setSession : function (key,val,isJson=true){
    if(!key || !val || Object.keys(val)==0){
      return false;
    }
    let data;
    if (isJson) {
      data = JSON.stringify(val);
    } else {
      data = val;
    }
    data = this.$base64Encode(data);
    data = this.$aseEncode(data,window.navigator.userAgent);
    key = this.$md5(key);
    sessionStorage.setItem(key,data);
  },
  $removeSession : function (key){
    if(!key){
      return false;
    }
    key = this.$md5(key);
    sessionStorage.removeItem(key);
    return true;
  },
  $clearSession : function (){
    sessionStorage.clear();
    return true;
  },
  $setLocal : function (key,val,isJson=true){
    if(!key || !val || Object.keys(val)==0){
      return false;
    }
    let data;
    if (isJson) {
      data = JSON.stringify(val);
    } else {
      data = val;
    }
    data = this.$base64Encode(data);
    data = this.$aseEncode(data,window.navigator.userAgent);
    key = this.$md5(key);
    localStorage.setItem(key,data);
  },
  $getLocal : function (key,isJson=true){
    if(!key){
      return false;
    }
    key = this.$md5(key);
    let data = localStorage.getItem(key);
    if(!data){
      return false;
    }
    data = this.$aseDecode(data);
    if(!data){
      return false;
    }
    data = this.$base64Decode(data);
    if(!data){
      return false;
    }
    if (isJson) {
      return JSON.parse(data);
    } else {
      return data;
    }
  },
  $removeLocal : function (key){
    if(!key){
      return false;
    }
    key = this.$md5(key);
    localStorage.removeItem(key);
    return true;
  },
  $clearLocal : function (){
    localStorage.clear();
    return true;
  },
  $is_array : function  (data){
    return Array.isArray(data);
  },
  $in_array: function  (data,val){
    if (!this.is_array(data)){
      return -1;
    }
    return data.indexOf(val)
  },
  $unset : function  (data,key){
    data.splice(key,1);
    return data;
  },
  $timeFormat : function (time='',format='yyyy-MM-dd'){
    let date;
    if(!time){
      date = new Date();
    }else{
      date = new Date().setTime(parseInt(time) * 1000);
    }
    var o = {
      "M+" : date.getMonth()+1,         //月份
      "d+" : date.getDate(),          //日
      "h+" : date.getHours(),          //小时
      "m+" : date.getMinutes(),         //分
      "s+" : date.getSeconds(),         //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S" : date.getMilliseconds()       //毫秒
    };
    if(/(y+)/.test(format))
      format=format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
      if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return format;
  },
  /**
   * 用于 lodop 毫米转为px
   * @param mm
   * @returns {number}
   */
  $lodopMmToPX : function (mm=0){
    if(!mm){
      return 0 ;
    }
    let px = parseFloat(mm) * 3.78;
    return parseFloat(px.toFixed(2));
  },
  $strToNumber : function (str,isInt =false){
    if (str.constructor == String) {
      if (isInt) {
        return !isNaN(parseInt(str)) ? parseInt(str) : 0;
      } else {
        return !isNaN(parseFloat(str)) ? parseFloat(str) : 0;
      }
    }

    if(str.constructor == Array){
      let post = [];
      for (let i = 0; i < str.length; i++) {
        if (str[i].constructor == String) {
          if (isInt) {
            post[i] = !isNaN(parseInt(str[i])) ? parseInt(str[i]) : str[i];
          } else {
            post[i] = !isNaN(parseFloat(str[i])) ? parseFloat(str[i]) : str[i];
          }
        } else if (str[i].constructor == Array) {
          post[i] = this.$strToNumber(str[i]);
        }else if (str[i].constructor == Object){
          post[i] = this.$strToNumber(str[i]);
        }else{
          post[i] = str[i];
        }
      }
      return post;
    }

    if(str instanceof Object){
      let keys = Object.keys(str);
      let post = { };
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if(str[key].constructor == String){
          if (isInt) {
            post[key] = !isNaN(parseInt(str[key])) ? parseInt(str[key]) : str[key];
          } else {
            post[key] = !isNaN(parseFloat(str[key])) ? parseFloat(str[key]) : str[key];
          }
        }else if (str[key].constructor == Array){
          post[key] = this.$strToNumber(str[key]);
        }else if (str[key].constructor == Object){
          post[key] = this.$strToNumber(str[key]);
        }else{
          post[key] = str[key];
        }
      }
      return post;
    }
    return str;
  },
}

export default Tools;