<template>
  <div class="wp-pop-mask" :style="{ zIndex: mask_index }" :class="mask_show"></div>
  <div class="wp-pop-wrap" :style="{ zIndex : wrap_index, borderRadius: borderRadius+'px' }" :class="wrap_show">
    <div class="wp-pop-title-closed">
      <div class="wp-pop-title">{{title}}</div>
      <div class="wp-pop-closed" @click="pop_close">
        <svg t="1646636960355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2069" width="18" height="18"><path d="M967.81435 106.836237 917.16274 56.18565 512 461.34839 106.836237 56.18565 56.184627 106.836237 461.34839 512 56.184627 917.163763 106.836237 967.815373 512 562.65161 917.16274 967.815373 967.81435 917.163763 562.650587 512Z" p-id="2070"></path></svg>
      </div>
    </div>
    <div class="wp-pop-container" :style="{ width: width+'px', height: height+'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wp-pop",
  props: {
    zIndex : { type : [String,Number], default : 999 },
    maskColor : { type : String, default: 'rgba(0,0,0,0.5)' },
    title : { type : String, default : '' },
    width : { type : [String,Number], default : 900 },
    height : { type : [String,Number], default : 700 },
    borderRadius : { type : [String,Number], default : 5 },
  },
  model: {},
  emits: ['close'],
  data() {
    return {
      mask_index : this.zIndex,
      mask_show : '',
      wrap_index : parseInt(this.zIndex) + 1,
      wrap_show : '',
    }
  },
  mounted: async function () {
    try {
      setTimeout(()=>{
        this.mask_show = 'mask-show';
        this.wrap_show = 'wrap-show';
      },200);
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  methods: {
    pop_close : function (){
      this.mask_show = '';
      this.wrap_show = '';
      setTimeout(()=>{
        this.$emit('close',true);
      },600);
    },
  },
}
</script>

<style scoped>
.wp-pop-mask { position: fixed; background: rgba(0,0,0,0.2); left: 0; top: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s; }
.mask-show { opacity: 1; }
.wp-pop-wrap { background: #ffffff; overflow: hidden; position: fixed; left: 50%; top: 50%; transform: translateX(-50%) translateY(-20%); opacity: 0; transition: all 0.5s ease-in-out; box-shadow: 0 0 20px #999999; }
.wrap-show { opacity: 1; transform: translateX(-50%) translateY(-50%);  }
.wp-pop-title-closed { padding: 15px 20px; display: flex; height: 20px; line-height: 20px; border-bottom: 1px solid #DCDFE650; }
.wp-pop-title { padding-right: 20px; font-size: 16px; line-height: 20px; flex: 1; color: #666666; }
.wp-pop-closed { width: 18px; height: 18px; padding: 1px; overflow: hidden; cursor: pointer; color: #999999; }
.wp-pop-closed svg path { fill: #999999; }
.wp-pop-closed:hover svg path { fill: #409EFF; }
.wp-pop-container { overflow-x: hidden; overflow-y: auto; }
.wp-pop-container::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(240, 240, 240, 1);
}

/*定义滚动条轨道 内阴影+圆角*/
.wp-pop-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0 rgba(240, 240, 240, .5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, .5);
}

/*定义滑块 内阴影+圆角*/
.wp-pop-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0 rgba(240, 240, 240, .5);
  background-color: #409EFF;
}
</style>