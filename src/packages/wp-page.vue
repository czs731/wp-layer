<template>
  <div class="wp-page">
    <div class="wp-page-title" v-if="page_title">{{page_title}}</div>
    <div class="wp-page-form-buttons" v-if="$slots.btn ||  $slots.frm">
      <div class="wp-page-button">
        <slot name="btn"></slot>
      </div>
      <div class="wp-page-flex"></div>
      <div class="wp-page-form">
        <slot name="frm"></slot>
      </div>
    </div>
    <div class="wp-page-wrap" :style="{ backgroundColor : isBack ? backColor : 'rgba(0,0,0,0)', borderRadius: borderRadius+'px', boxShadow : isBack ? '0 1px 2px rgba(150, 150, 150, 0.3)':'none' }">
      <div class="wp-page-form-buttons" v-if="$slots.button ||  $slots.form">
        <div class="wp-page-button">
          <slot name="button"></slot>
        </div>
        <div class="wp-page-flex"></div>
        <div class="wp-page-form">
          <slot name="form"></slot>
        </div>
      </div>
      <div class="wp-page-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wp-page",
  props: {
    title : { type : String, default : '' },
    isRoute : { type : Boolean ,default: false},
    backColor: { type : String, default : '#ffffff' },
    isBack : { type : Boolean, default : true },
    borderRadius : { type : [String,Number], default : 5 },
  },
  model: {},
  emits: [],
  data() {
    return {
      page_title : this.title,
    }
  },
  mounted: async function () {
    setTimeout(()=>{
      if(!this.page_title && this.isRoute){
        let route = this.$route;
        console.log(route);
        this.page_title = route.name;
      }
    },200);
  },
  methods: {},
}
</script>

<style scoped>
.wp-page { width: 100%; height: auto; }
.wp-page-title { font-size: 26px; padding-bottom: 20px; }
.wp-page-form-buttons { display: flex; padding-bottom: 20px; }
.wp-page-flex { flex: 1; }
.wp-page-wrap { padding: 20px; }
</style>