<template>
  <div class="form-line">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wp-form-line",
  props: {},
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
.form-line { display: flex; }
</style>