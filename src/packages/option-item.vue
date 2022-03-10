<template>
  <div class="option-item">
    <div class="option-icon" :class="[iconFather, icon]" :style="{ fontSize : iconSize+'px' }" v-if="icon"></div>
    <div class="option-image" :style="{ backgroundImage : 'url('+image+')' }" v-if="image"></div>
    <div class="option-name" v-if="name">{{name}}</div>
    <div class="option-label" v-if="label">{{label}}</div>
  </div>
</template>

<script>
export default {
  name: "option-item",
  props: {
    iconFather : { type : String, default :'iconfont' },
    iconSize : { type : [String,Number] , default : 22 },
    icon : { type : String, default : '' },
    image : { type : String, default : '' },
    name : { type : String, default : '' },
    label : { type : String, default : '' },
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
.option-item { display: flex; height: 32px; line-height: 32px; padding: 2px 0; }
.option-icon { font-size: 22px; }
.option-image { width: 30px; height: 30px; border-radius: 5px; overflow: hidden; background: #f2f2f2 no-repeat center; background-size: cover; }
.option-name { flex: 1; padding-left: 10px; }
.option-label { padding-left: 10px; color: #999999; }
</style>