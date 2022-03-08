<template>
  <div class="wp-form-line-item">
    <div class="wp-form-line-item-label">{{label}}</div>
    <div class="wp-form-line-item-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wp-form-line-item",
  props: {
    label : { type : String, default : '' }
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
.wp-form-line-item { display: flex; }
.wp-form-line-item-label { padding: 0 20px; color: #606266; }
</style>