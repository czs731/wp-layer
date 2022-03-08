<template>
  <div>
    <wp-form-row title="标题内容" tip="提示内容提示内容提示内容提示内容提示内容">
      111111111
    </wp-form-row>
  </div>
  <div style="padding-top: 100px;">
    <wp-page-size total="100" :current-page="page" @change="page_change"></wp-page-size>
  </div>
</template>

<script>
export default {
  name: "form-row",
  props: {},
  model: {},
  emits: [],
  data() {
    return {
      page : 2,
    }
  },
  mounted: async function () {

  },
  methods: {
    page_change : function (e){
      this.page = e;
    },
  },
}
</script>

<style scoped>

</style>