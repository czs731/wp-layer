<template>
  <wp-page is-route>
    <template #btn>
      11111111
    </template>
    <template #frm>111111111</template>
    <template #button>
      11111111
    </template>
    <template #form>111111111</template>
    111111111111
  </wp-page>
</template>

<script>
import WpPage from "../packages/wp-page.vue";
export default {
  name: "page",
  components: {WpPage},
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

</style>