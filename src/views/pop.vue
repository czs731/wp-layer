<template>
  <div>
    <div class="el-button" @click="show_pop">点击打开</div>
  </div>
  <wp-pop title="标题" v-if="is_pop" @close="show_pop"></wp-pop>
</template>

<script>
export default {
  name: "pop",
  components: {},
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
    show_pop : async function (){
      this.is_pop = !this.is_pop;
    },
  },
}
</script>

<style scoped>
.el-button { padding: 15px 20px; background: #42b983; color: #ffffff; display: inline-block; cursor: pointer; }
</style>