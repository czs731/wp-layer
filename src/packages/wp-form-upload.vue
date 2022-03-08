<template>
  <template v-if="!isButton">
    <template v-if="!isServer">
      <el-upload action="" :accept="accept" :before-upload="upload_check" :http-request="uploadMethod">
        <template v-if="isSelf">
          <template v-if="files">
            <div class="upload-icon">
              <img :src="files" alt="">
            </div>
          </template>
          <template v-if="!files">
            <div class="upload-icon">
              <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
            </div>
          </template>
        </template>
        <template v-if="!isSelf">
          <div class="upload-icon">
            <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
          </div>
        </template>
      </el-upload>
    </template>
    <template v-if="isServer">
      <div class="upload-icon">
        <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
      </div>
    </template>
  </template>



</template>

<script>
export default {
  name: "wp-form-upload",
  props: {
    isButton : { type : Boolean, default : false },
    isSelf : { type : Boolean, default : true },
    isServer : { type : Boolean, default: false },
    files : { type : [String, Array], default : '' },
    uploadType : { type : String, default : '' },
    uploadMethod : { type : Function , default : false },
    rules : { type : Object, default : ()=>{return {width : 0, height : 0, minWidth : 0, minHeight : 0, maxWidth : 0, maxHeight : 0, scale : ''}}},
  },
  model: {},
  emits: ['update:files'],
  data() {
    return {
      is_list : false,
      accept : '',
      is_server : false,
      list : [],
      dir : [],
    }
  },
  mounted: async function () {
    try {
      if(this.uploadType == 'image'){
        this.accept = '.jpg,.jpeg,.png,.gif';
      }
      if(this.uploadType == 'video'){
        this.accept = '.mp4'
      }
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  methods: {
    upload_file : async function (){
      
    },
    upload_check : function (){
      
    },
    upload_del : function (){
      
    },
    show_server : async function (){
      
    },
    get_list : async function (){
      
    },
    submit : function (){
      
    },
    dir_change : async function (){
      
    },
    dir_back : async function (){
      
    },
    option_choose : function (){
      
    },
    option_del : function (){
      
    },
  },
}
</script>

<style scoped>
.upload-icon { width: 100px; height: 100px; border: 1px solid #dcdfe6; border-radius: 5px; overflow: hidden; transition: all 0.5s; }
.upload-icon svg { width: 50px; height: 50px; fill: #dcdfe6; margin: 25px; transition: all 0.5s; }
.upload-icon:hover { border-color: #409EFF; }
.upload-icon:hover svg { fill: #409EFF; }
.upload-icon img { width: 100%; margin-top: 50%; transform: translateY(-50%); }
</style>