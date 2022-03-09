import { ElLoading, ElMessage,ElNotification,ElMessageBox } from "element-plus";
let loading;

export default {
  $_showLoading : function (message='') {
    loading = ElLoading.service({
      fullscreen : true,
      text : message,
      lock : true,
      background : 'rgba(255,255,255,0.5)'
    });
  },
  $_hideLoading : function (){
    loading.close();
  },
  $_showToast : function  (message='',type='success'){
    if (typeof message == 'object') {
      let m = message.errmsg;
      let t = message.style == 'cancel' ? 'error' : message.style;
      ElMessage({
        message : m,
        type : t
      })
    } else {
      type = type == 'cancel' ? 'error' : type;
      ElMessage({
        message : message,
        type : type
      })
    }
  },
  $_showToastError : function (message){
    ElMessage({
      message : message,
      type : 'error'
    })
  },
  $_showToastInfo : function (message){
    ElMessage({
      message : message,
      type : 'info'
    })
  },
  $_showToastWarning : function (message){
    ElMessage({
      message : message,
      type : 'warning'
    })
  },
  $_showMessage : function (message='',type='success',position='right',title='提示'){
    type = type =='cancel' ? 'error' : type;
    if (position == 'right') {
      position = 'top-right';
    }
    if (position == 'left') {
      position = 'top-left';
    }
    if (position == 'top') {
      position = 'bottom-right';
    }
    if (position == 'bottom') {
      position = 'bottom-left';
    }
    ElNotification({
      title : title,
      message : message,
      type : type,
      duration : 2500,
      position : position,
    })
  },
  $_showMessageError : function (message='',type='error',position='right',title='提示'){
    type = type =='cancel' ? 'error' : type;
    if (position == 'right') {
      position = 'top-right';
    }
    if (position == 'left') {
      position = 'top-left';
    }
    if (position == 'top') {
      position = 'bottom-right';
    }
    if (position == 'bottom') {
      position = 'bottom-left';
    }
    ElNotification({
      title : title,
      message : message,
      type : type,
      duration : 2500,
      position : position,
    })
  },
  $_showMessageInfo : function (message='',type='info',position='right',title='提示'){
    type = type =='cancel' ? 'error' : type;
    if (position == 'right') {
      position = 'top-right';
    }
    if (position == 'left') {
      position = 'top-left';
    }
    if (position == 'top') {
      position = 'bottom-right';
    }
    if (position == 'bottom') {
      position = 'bottom-left';
    }
    ElNotification({
      title : title,
      message : message,
      type : type,
      duration : 2500,
      position : position,
    })
  },
  $_showMessageWarning : function (message='',type='warning',position='right',title='提示'){
    type = type =='cancel' ? 'error' : type;
    if (position == 'right') {
      position = 'top-right';
    }
    if (position == 'left') {
      position = 'top-left';
    }
    if (position == 'top') {
      position = 'bottom-right';
    }
    if (position == 'bottom') {
      position = 'bottom-left';
    }
    ElNotification({
      title : title,
      message : message,
      type : type,
      duration : 2500,
      position : position,
    })
  },
  $_alert : async function (message='',type='info',confirmButtonText='确认',cancelButtonText='取消',title='提示'){
    try {
      let res = await ElMessageBox.alert(message,title,{
        type : type,
        showCancelButton : true,
        confirmButtonText : confirmButtonText,
        showConfirmButton : true,
        cancelButtonText : cancelButtonText,
        showClose : false,
      });
      console.log(res,333333333)
      if (res=='cancel') {
        return false;
      } else {
        return true;
      }
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  $_confirm : async function (message='',confirmButtonText='确认',cancelButtonText='取消',type='info',title='提示'){
    try {
      let res = await ElMessageBox.confirm(message,title,{
        type : type,
        showCancelButton : true,
        confirmButtonText : confirmButtonText,
        showConfirmButton : true,
        cancelButtonText : cancelButtonText,
        showClose : false,
      })
      if (res=='cancel') {
        return false;
      } else {
        return true;
      }
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  $_prompt : async function (message='',inputPlaceholder='',inputType='text',type='info',confirmButtonText='确认',cancelButtonText='取消',title='填写内容'){
    try {
      let res = await ElMessageBox.prompt(message,title,{
        type : type,
        showCancelButton : true,
        confirmButtonText : confirmButtonText,
        showConfirmButton : true,
        cancelButtonText : cancelButtonText,
        showClose : false,
        inputPlaceholder :inputPlaceholder,
        inputType :inputType
      })
      if(res=='cancel'){
        return false;
      }
      if(res.value){
        return res.value
      }
      return false;
    }catch (e) {
      console.log(e);
      return false;
    }
  },
}