<template>
  <wp-pop title="选择地址" @close="map_close">
    <iframe id="mapPage" width="100%" height="100%" frameborder=0
            :src="'https://apis.map.qq.com/tools/locpicker?search=1&type=1&key='+qqMapKey+'&referer='+referer">
    </iframe>
  </wp-pop>
</template>

<script>
export default {
  name: "wp-qq-map",
  props: {
    qqMapKey : { type : String, default : 'I7EBZ-Z6QKI-VVEGQ-5YNQ2-MCLJ7-4FFDX' },
    referer : { type : String, default : 'weipai' },
  },
  model: {},
  emits: ['close','submit'],
  data() {
    return {

    }
  },
  mounted: async function () {
    this.map_listener();
  },
  methods: {
    map_close : function (){
      this.$emit('close',true);
    },
    map_listener : function (){
      window.addEventListener('message', this.map_location)
    },
    map_location : function (e){
      console.log(e);
      let location = e.data || false;
      if(location){
        window.removeEventListener('message',this.map_location);
        this.$emit('submit',{lat : location.latlng.lat, lng : location.latlng.lng, city : location.cityname, address :location.poiaddress})
      }
    },
  },
}
</script>

<style scoped>

</style>