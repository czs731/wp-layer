<template>
  <div class="wp-wrap" :style="{ paddingBottom: paddingBottom+'px', paddingLeft: paddingLeft+'px', paddingTop: paddingTop+'px',paddingRight: paddingRight+'px' }">
    <div class="wp-wrap-menu" :style="{ width : menuWidth+'px', paddingRight : menuRight+'px', borderColor: borderColor }" v-if="$slots.menu && isMenu">
      <slot name="menu"></slot>
    </div>
    <div class="wp-wrap-container" :style="{ paddingLeft : menuRight+'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wp-wrap",
  props: {
    paddingTop : { type : [String,Number], default : 0 },
    paddingRight : { type : [String,Number], default : 0 },
    paddingLeft : { type : [String,Number], default : 0 },
    paddingBottom : { type : [String,Number], default : 0 },
    borderColor : { type : String, default : '#dcdfe6' },
    isMenu : { type : Boolean, default : true },
    menuWidth : { type : [String,Number], default : 150 },
    menuRight : { type : [String,Number], default : 30 },
  },
  model: {},
  emits: [],
  data() {
    return {

    }
  },
  mounted: async function () {

  },
  methods: {},
}
</script>

<style scoped>
.wp-wrap { width: 100%; height: auto; display: flex; box-sizing: border-box; }
.wp-wrap-menu { border-right: 1px solid #dcdfe6; overflow: hidden; }
.wp-wrap-container { flex: 1; overflow: hidden; }
</style>