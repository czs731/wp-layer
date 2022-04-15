import { useRouter,useRoute } from "vue-router";

const route = useRouter();
const router = useRoute();
const history = {
  $goto : function (url='',time=0){
    if(!url){
      return false;
    }
    if (time) {
      setTimeout(()=>{
        route.push(url);
      },time);
    } else {
      route.push(url);
    }
  },
  $back : function (url='',time=0){
    if (!url) {
      if (time) {
        setTimeout(()=>{
          route.back()
        },time);
      } else {
        route.back();
      }
    } else {
      if (time) {
        setTimeout(()=>{
          route.replace(url);
        },time)
      } else {
        route.replace(url);
      }
    }
  },
  $reload : function (url='',time=0){
    if (url) {
      if (time) {
        setTimeout(()=>{
          route.replace(url)
        },time)
      } else {
        route.replace(url);
      }
    } else {
      if (time) {
        setTimeout(()=>{
          route.replace(router.fullPath)
        },time)
      } else {
        route.replace(router.fullPath)
      }
    }
  },
}

export default history;