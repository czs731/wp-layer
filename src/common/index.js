import element from "./element.js";
import tools from "./tools.js";
import history from "./history.js";
export default {
  install : function (app){
    app.config.globalProperties.$ele = element;
    app.config.globalProperties.$tools = tools;
    app.config.globalProperties.$his = history;
  },
}