<template>
  <div class="package">
    <div class="package-title">wp-page</div>
    <div class="package-wrap">
      <wp-page></wp-page>
    </div>
  </div>

  <div class="package">
    <div class="package-title">wp-pop</div>
    <div class="package-wrap">
      <el-button type="success" @click="show_pop">显示弹出窗口</el-button>
      <wp-pop title="弹出窗口" @close="show_pop" v-if="is_pop"></wp-pop>
    </div>
  </div>

  <div class="package">
    <div class="package-title">wp-form-row</div>
    <div class="package-wrap" style="padding: 20px; background:#ffffff;">
      <el-form>
        <wp-form-row title="标题内容" tip="提示内容">
          <el-form-item label="标题">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input></el-input>
          </el-form-item>
        </wp-form-row>
        <wp-form-row is-button title="" tip="">
          <el-form-item>
            <el-button type="success">确定提交</el-button>
          </el-form-item>
        </wp-form-row>
      </el-form>
    </div>
  </div>

  <div class="package">
    <div class="package-title">wp-page-size</div>
    <div class="package-wrap" style="padding: 20px; background:#ffffff;">
      <wp-page-size :total="100" :page-size="20"></wp-page-size>
    </div>
  </div>

  <div class="package">
    <div class="package-title">wp-wrap</div>
    <div class="package-wrap" style="padding: 20px; background:#ffffff;">
      <wp-wrap>
        <template #menu>
          11111111111
        </template>
        4444444444444444
      </wp-wrap>
    </div>
  </div>

  <div class="package">
    <div class="package-title">wp-line wp-line-item</div>
    <div class="package-wrap" style="padding: 20px; background:#ffffff;">
      <el-form>
        <el-form-item label="标题">
          <wp-form-line>
            <wp-form-line-item label="标题">
              <el-input style="width: 200px;"></el-input>
            </wp-form-line-item>
            <wp-form-line-item label="标题">
              <el-input style="width: 200px;"></el-input>
            </wp-form-line-item>
            <wp-form-line-item label="">
              <el-input style="width: 200px;"></el-input>
            </wp-form-line-item>
          </wp-form-line>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <div class="package">
    <div class="package-title">wp-form-upload</div>
    <div class="package-wrap" style="padding: 20px; background:#ffffff;">
      <wp-form-upload files="http://localhost/service_api/qrcode/9/1720/qrcode_399747.png"></wp-form-upload>
    </div>
  </div>

</template>

<script>
import WpFormRow from "../packages/wp-form-row.vue";
import WpPageSize from "../packages/wp-pagesize.vue";
import WpFormLineItem from "../packages/wp-form-line-item.vue";
import WpFormUpload from "../packages/wp-form-upload.vue";
export default {
  name: "index",
  components: {WpFormUpload, WpFormLineItem, WpPageSize, WpFormRow},
  props: {},
  model: {},
  emits: [],

  data() {
    return {
      is_pop : false,
    }
  },
  mounted: async function () {

  },
  methods: {
    show_pop : function (){
      this.is_pop = !this.is_pop
    },
  },
}
</script>

<style scoped>
.link { display: inline-block; border: 1px solid #42b983; padding: 15px 20px; border-radius: 5px; font-size: 18px; color: #666666; text-decoration: none; margin-right: 20px; margin-bottom: 20px; background: #ffffff; }
.package { width: 100%; margin-bottom: 20px; box-sizing: border-box; }
.package-title { padding-bottom: 20px; font-size: 26px; }
</style>