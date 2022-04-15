<template>

  <wp-page title="基本应用"></wp-page>


  <wp-page is-route></wp-page>

  <wp-page :is-back="false" title="无背景颜色"></wp-page>

  <wp-page title="自定义背景颜色" back-color="#f40"></wp-page>


  <wp-page title="slots">
    <template #btn>1111</template>
    <template #frm>1111111</template>
    <template #button>111111111</template>
    <template #form>22222222</template>
  </wp-page>

  <div class="g-caption">Props</div>
  <div class="g-wrap">
    <el-table :data="props" border stripe style="margin-top: 20px;">
      <el-table-column label="属性" prop="name"></el-table-column>
      <el-table-column label="说明" prop="title"></el-table-column>
      <el-table-column label="类型" prop="type"></el-table-column>
      <el-table-column label="默认值" prop="auto"></el-table-column>
      <el-table-column label="可用参数" prop="val"></el-table-column>
      <el-table-column label="备注" prop="remark"></el-table-column>
    </el-table>
  </div>

  <div class="g-caption">Slots</div>
  <div class="g-wrap">
    <el-table :data="slots" border stripe style="margin-top: 20px;">
      <el-table-column label="属性" prop="name"></el-table-column>
      <el-table-column label="说明" prop="title"></el-table-column>
      <el-table-column label="备注" prop="remark"></el-table-column>
    </el-table>
  </div>



</template>

<script>
export default {
  name: "wp-page-show",
  props: {},
  model: {},
  emits: [],
  data() {
    return {
      props : [
        { name : 'title', title : '标题', type : 'String', auto:'空', remark:'可不填写' },
        { name : 'isRoute', title : '是否使用配置路由名称', type : 'Boolean', auto:'false', remark:'' },
        { name : 'backColor', title : '背景颜色', type : 'String', auto:'#ffffff', remark:'使用16进制 / rgba' },
        { name : 'isBack', title : '是否使用背景颜色', type : 'Boolean', auto:'true', remark:'false,背景透明' },
        { name : 'borderRadius', title : '圆角', type : 'String,Number', auto:'5', remark:'' },
        { name : 'isLoad', title : '加载动画', type : 'Boolean', auto:'false', remark:'' },
        { name : 'pagePadding', title : '内填充', type : 'String,Number', auto:'20', remark:'' },
      ],
      slots : [
        { name : 'btn', title : '', remark:'' },
        { name : 'frm', title : '',  remark:'' },
        { name : 'button', title : '',  remark:'' },
        { name : 'form', title : '',  remark:'' },
      ],
    }
  },
  mounted: async function () {

  },
  methods: {},
}
</script>

<style scoped>

</style>