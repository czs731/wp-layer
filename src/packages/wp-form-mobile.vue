<template>
  <div class="wp-form-mobile">
    <div class="wp-form-mobile-mobile" :style="{ width : mobileWidth+'px', height : mobileHeight+'px', borderColor: borderColor, backgroundColor : mobileBack }" v-if="$slots.mobile">
      <div class="wp-form-mobile-header">
        <div class="wp-form-mobile-header-face" :style="{ backgroundColor : borderColor }"></div>
      </div>
      <div class="wp-form-mobile-wrap" :style="{ width: mobileWidth+'px', height: (mobileHeight-44)+'px' }">
        <slot name="mobile"></slot>
      </div>
    </div>
    <div class="wp-form-mobile-form">
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wp-form-mobile",
  props: {
    mobileWidth : { type : [String,Number], default : 375 },
    mobileHeight : { type : [String,Number], default: 750 },
    mobileBack : { type : String , default : '#f2f2f2' },
    borderColor : { type : String, default : '#DCDFE6' },
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
.wp-form-mobile { display: flex; }
.wp-form-mobile-mobile { border: 1px solid #dcdfe6; border-radius: 30px; overflow: hidden; margin-right: 30px;  }
.wp-form-mobile-header { position: relative; height: 44px; }
.wp-form-mobile-header-face { height: 34px; width: 50%; margin: auto; border-radius: 0 0 20px 20px; }
.wp-form-mobile-wrap { position: relative; overflow-x: hidden; overflow-y: auto; }
.wp-form-mobile-wrap::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: rgba(240, 240, 240, 1);
}


.wp-form-mobile-wrap::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0 rgba(240, 240, 240, .5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, .5);
}


.wp-form-mobile-wrap::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0 rgba(240, 240, 240, .5);
  background-color: #409EFF;
}

.wp-form-mobile-form { padding-left: 30px; flex: 1; }
</style>