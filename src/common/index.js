import element from "./element.js";
import tools from "./tools.js";
import request from "./request.js";

export default {
  install : function (app){
    app.config.globalProperties.$ele = element;
    app.config.globalProperties.$tools = tools;
    app.config.globalProperties.$request = request;
  },
}