<template>
  <div class="wp-form-row">
    <div class="wp-form-row-title-tip" :style="{ borderRight : isButton ? 'none' : '1px solid #dcdfe6;' }">
      <div class="wp-form-row-title">{{title}}</div>
      <div class="wp-form-row-tip">{{tip}}</div>
    </div>
    <div class="wp-form-row-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wp-form-row",
  props: {
    isButton : { type : Boolean, default : false },
    title : { type : String, default: '' },
    tip : { type : String, default : '' },
  },
  model: {},
  emits: [],
  data() {
    return {}
  },
  mounted: async function () {

  },
  methods: {},
}
</script>

<style scoped>
.wp-form-row { width: 100%; height: auto; margin-bottom: 20px; display: flex; }
.wp-form-row-title-tip { padding-right: 20px; width: 120px; border-right: 1px solid #dcdfe6; transition: border-right-color 0.5s; }
.wp-form-row-title { line-height: 32px; font-size: 16px; color: #222222; transition: color 0.5s; }
.wp-form-row-tip { font-size: 12px; line-height: 1.5; color: #999999; transition: color 0.5s; }
.wp-form-row-container { padding-left: 20px; flex: 1; }
.wp-form-row:hover .wp-form-row-title-tip { border-color: #409EFF; }
.wp-form-row:hover .wp-form-row-title { color: #409EFF; }
.wp-form-row:hover .wp-form-row-tip { color: #666666; }


</style>