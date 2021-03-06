import wpPage from "./wp-page.vue";
import wpPop from "./wp-pop.vue";
import wpFormRow from "./wp-form-row.vue";
import wpPageSize from "./wp-pagesize.vue";
import wpWrap from "./wp-wrap.vue";
import wpFormLine from "./wp-form-line.vue";
import wpFormLineItem from "./wp-form-line-item.vue";
import wpFormUpload from "./wp-form-upload.vue";
import wpFormMobile from "./wp-form-mobile.vue";
import optionItem from "./option-item.vue";
import wpQqMap from "./wp-qq-map.vue";

export default {
  install : function (app) {
    app.component(wpPage.name,wpPage);
    app.component(wpPop.name,wpPop)
    app.component(wpFormRow.name,wpFormRow)
    app.component(wpPageSize.name,wpPageSize)
    app.component(wpWrap.name,wpWrap)
    app.component(wpFormLine.name,wpFormLine)
    app.component(wpFormLineItem.name,wpFormLineItem)
    app.component(wpFormUpload.name,wpFormUpload)
    app.component(wpFormMobile.name,wpFormMobile)
    app.component(optionItem.name,optionItem)
    app.component(wpQqMap.name,wpQqMap)
  }
}