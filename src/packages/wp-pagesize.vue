<template>
  <div>
    <el-pagination :total="page_count" :page-size="page_size" :current-page="cursor_page" @current-change="page_change" :pager-count="count_page" background :layout="layout"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "wp-page-size",
  props: {
    total : { type : [String,Number], default : 0 },
    pageSize : { type : [String,Number], default : 20 },
    currentPage : { type : [String,Number], default : 1 },
    count : { type : [String,Number], default : 10 },
    layout : { type : String, default : 'total,prev, pager, next, jumper' },
  },
  model: {},
  emits: ['change'],
  data() {
    return {
      page_count : parseInt(this.total),
      page_size : parseInt(this.pageSize),
      cursor_page : parseInt(this.currentPage),
      count_page : parseInt(this.count),
    }
  },
  watch: {
    total(newValue) {
      this.page_count = parseInt(newValue);
    },
    pageSize(newValue) {
      this.page_size = parseInt(newValue);
    },
    currentPage(newValue) {
      this.cursor_page = parseInt(newValue);
    },
    count(newValue) {
      this.count_page = parseInt(newValue);
    },
  },
  mounted: async function () {

  },
  methods: {
    page_change : function (e){
      console.log(e);
      this.$emit('change',e);
    },
  },
}
</script>

<style scoped>

</style>