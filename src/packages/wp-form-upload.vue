<template>
  <template v-if="!isButton">
    <template v-if="!isServer">
      <el-upload action="" :accept="accept" :before-upload="upload_check" :http-request="upload_file" :multiple="multiple" :show-file-list="false">
        <el-tooltip placement="top">
          <template #content>
            <div v-html="notice"></div>
          </template>
          <template v-if="is_list">
            <div class="upload-icon" v-loading="is_upload">
              <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
            </div>
          </template>
          <template v-if="!is_list">
            <template v-if="isSelf">
              <template v-if="file_list">
                <div class="upload-icon" v-loading="is_upload">
                  <img :src="files" alt="">
                </div>
              </template>
              <template v-if="!file_list">
                <div class="upload-icon" v-loading="is_upload">
                  <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
                </div>
              </template>
            </template>
            <template v-if="!isSelf">
              <div class="upload-icon" v-loading="is_upload">
                <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
              </div>
            </template>
          </template>
        </el-tooltip>
      </el-upload>
    </template>
    <template v-if="isServer">
      <el-tooltip placement="top">
        <template #content>
          <div v-html="notice"></div>
        </template>
        <template v-if="is_list">
          <div class="upload-icon" @click="show_server(true)">
            <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
          </div>
        </template>
        <template v-if="!is_list">
          <template v-if="isSelf">
            <template v-if="!file_list">
              <div class="upload-icon" @click="show_server(true)">
                <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
              </div>
            </template>
            <template v-if="file_list">
              <div class="upload-icon" @click="show_server(true)">
                <img :src="file_list" alt="">
              </div>
            </template>
          </template>
          <template v-if="!isSelf">
            <div class="upload-icon" @click="show_server(true)">
              <svg t="1646712222660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="200" height="200"><path d="M1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-341.312-139.84L512 314.24 341.312 500.48h341.376z m-213.376 0v256h85.376v-256H469.312z"  p-id="2050"></path></svg>
            </div>
          </template>
        </template>
      </el-tooltip>
    </template>
  </template>
  

  <template v-if="isButton">
    <template v-if="!isServer">
      <el-upload action="" :accept="accept" :before-upload="upload_check" :http-request="upload_file" :multiple="multiple" :show-file-list="false">
        <el-tooltip placement="top">
          <template #content>
            <div v-html="notice"></div>
          </template>
          <div class="upload-button" v-loading="is_upload">{{buttonText}}</div>
        </el-tooltip>
      </el-upload>
    </template>
    <template v-if="isServer">
      <el-tooltip placement="top">
        <template #content>
          <div v-html="notice"></div>
        </template>
        <div class="upload-button" @click="show_server(true)">{{buttonText}}</div>
      </el-tooltip>
    </template>
  </template>


  <template v-if="!isButton && !isSelf && file_list && !is_list">
    <div class="upload-items">
      <div class="upload-item">
        <img :src="file_list" alt="">
        <div class="upload-item-del" @click="upload_del(10000)">
          <svg t="1646724450466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6486"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="6487"></path></svg>
        </div>
      </div>
    </div>
  </template>

  <template v-if="isButton && !is_list && file_list">
    <div class="upload-items">
      <div class="upload-item">
        <img :src="file_list" alt="">
        <div class="upload-item-del" @click="upload_del(10000)">
          <svg t="1646724450466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6486"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="6487"></path></svg>
        </div>
      </div>
    </div>
  </template>


  <template v-if="is_list && file_list">
    <div class="upload-items">
      <draggable v-model="file_list" item-key="id">
        <template #item="{element}">
          <div class="upload-item">
            <img :src="element" alt="">
            <div class="upload-item-del" @click="upload_del(element)">
              <svg t="1646724450466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6486"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="6487"></path></svg>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </template>

  <template v-if="is_server">
    <div class="wp-upload-server-mask" :class="mask_show"></div>
    <div class="wp-upload-server-wrap" :class="wrap_show">
      <div class="wp-upload-server-title-close">
        <div class="wp-upload-server-title">服务器 <i>点击图片/视频/文件标题选择</i></div>
        <div class="wp-upload-server-close" @click="show_server(false)">
          <svg t="1646636960355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2069" width="18" height="18"><path d="M967.81435 106.836237 917.16274 56.18565 512 461.34839 106.836237 56.18565 56.184627 106.836237 461.34839 512 56.184627 917.163763 106.836237 967.815373 512 562.65161 917.16274 967.815373 967.81435 917.163763 562.650587 512Z" p-id="2070"></path></svg>
        </div>
      </div>
      <div class="wp-upload-server-container" v-loading="is_load">
        <!-- 返回 -->
        <div class="wp-upload-server-item" title="点击返回" v-if="dir.length>0" @click="dir_back">
          <svg t="1646732047790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40087" width="200" height="200"><path d="M710.153924 8.980397L266.007127 460.692524a81.118646 81.118646 0 0 0 0.861532 114.476097l446.192936 441.050666a26.922883 26.922883 0 0 0 37.853573-38.284339L304.722232 536.884282a27.27288 27.27288 0 0 1-0.323074-38.445877L748.545955 46.726278A26.922883 26.922883 0 1 0 710.180847 9.00732z" p-id="40088"></path></svg>
        </div>
        <template v-for="(val,key) in list" :key="key">
          <template v-if="val.is_dir">
            <!-- 文件夹 -->
            <div class="wp-upload-server-item" :title="'点击进入：'+val.name" @click="dir_change(val.name)">
              <svg t="1646732161423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40960" width="200" height="200"><path d="M81.16 412.073333L0 709.653333V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h253.413334a52.986667 52.986667 0 0 1 37.713333 15.62l109.253333 109.253334a10.573333 10.573333 0 0 0 7.54 3.126666H842.666667a53.393333 53.393333 0 0 1 53.333333 53.333334v74.666666H173.773333a96.2 96.2 0 0 0-92.613333 70.74z m922-7.113333a52.933333 52.933333 0 0 0-42.386667-20.96H173.773333a53.453333 53.453333 0 0 0-51.453333 39.333333L11.773333 828.666667a53.333333 53.333333 0 0 0 51.453334 67.333333h787a53.453333 53.453333 0 0 0 51.453333-39.333333l110.546667-405.333334a52.953333 52.953333 0 0 0-9.073334-46.373333z"  p-id="40961"></path></svg>
              <div class="wp-upload-server-item-title">{{val.name}}</div>
            </div>
          </template>
          <template v-if="val.is_file">
            <!-- 文件 -->
            <div class="wp-upload-server-item" :title="'点击选择：'+val.name">
              <svg t="1646732270442" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="48247" width="200" height="200"><path d="M682.666667 245.333333a10.666667 10.666667 0 0 0 10.666666 10.666667h189.913334c-0.913333-1.066667-1.86-2.12-2.866667-3.126667L685.793333 58.286667c-1.006667-1.006667-2.06-1.953333-3.126666-2.866667z"  p-id="48248"></path><path d="M640 245.333333V42.666667H181.333333a53.393333 53.393333 0 0 0-53.333333 53.333333v832a53.393333 53.393333 0 0 0 53.333333 53.333333h661.333334a53.393333 53.393333 0 0 0 53.333333-53.333333V298.666667h-202.666667a53.393333 53.393333 0 0 1-53.333333-53.333334z m-320 10.666667h170.666667a21.333333 21.333333 0 0 1 0 42.666667H320a21.333333 21.333333 0 0 1 0-42.666667z m384 512H320a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667z m21.333333-234.666667a21.333333 21.333333 0 0 1-21.333333 21.333334H320a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 21.333333 21.333333z"  p-id="48249"></path></svg>
              <div class="wp-upload-server-item-title" @click="option_choose(val.url)">{{val.name}}</div>
              <el-popconfirm title="确定删除？" @confirm="server_del(val.url)" v-if="isDel">
                <template #reference>
                  <div class="wp-upload-server-item-del">
                    <svg t="1646724450466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6486"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="6487"></path></svg>
                  </div>
                </template>
              </el-popconfirm>
            </div>
          </template>
          <template v-if="val.is_image">
            <div class="wp-upload-server-item" :title="'点击选择：'+val.name">
              <img :src="val.url" alt="">
              <div class="wp-upload-server-item-title" @click="option_choose(val.url)">{{val.name}}</div>
              <el-popconfirm title="确定删除？" @confirm="server_del(val.url)" v-if="isDel">
                <template #reference>
                  <div class="wp-upload-server-item-del">
                    <svg t="1646724450466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6486"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="6487"></path></svg>
                  </div>
                </template>
              </el-popconfirm>
            </div>
          </template>
          <template v-if="val.is_video">
            <!-- 媒体图片 -->
            <div class="wp-upload-server-item" :title="'点击选择：'+val.name">
              <svg t="1646732246921" class="icon" viewBox="0 0 1087 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="47377" width="200" height="200"><path d="M768 415.744q0 5.12-10.752 17.92t-23.04 30.208-23.04 37.888-10.752 41.984 10.752 41.472 23.04 36.352 23.04 27.136 10.752 13.824l0 107.52q0 17.408-12.8 39.424t-31.744 41.472-41.984 32.256-43.52 12.8l-508.928 0q-27.648 0-50.688-9.728t-40.448-27.136-27.136-40.96-9.728-51.2l0-441.344q0-20.48 9.216-42.496t26.112-40.448 39.936-30.72 50.688-12.288l508.928 0q27.648 0 51.712 9.728t41.984 26.624 28.16 40.448 10.24 50.176l0 89.088zM1086.464 319.488l0 467.968q0 22.528-11.776 39.936t-35.328 17.408q-8.192 0-20.992-6.144t-25.6-14.336-24.064-16.384-16.384-13.312q-13.312-11.264-40.448-38.912t-54.784-62.464-48.64-71.68-20.992-67.584 22.528-70.144 54.272-77.312 66.56-70.144 58.368-48.64q9.216-6.144 25.088-14.848t28.16-8.704q27.648 0 35.84 15.36t8.192 37.888l0 2.048z" p-id="47378"></path></svg>
              <div class="wp-upload-server-item-title" @click="option_choose(val.url)">{{val.name}}</div>
              <el-popconfirm title="确定删除？" @confirm="server_del(val.url)" v-if="isDel">
                <template #reference>
                  <div class="wp-upload-server-item-del">
                    <svg t="1646724450466" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6486"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="6487"></path></svg>
                  </div>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </template>
      </div>
      <div class="wp-upload-server-choose-buttons">
        <div class="wp-upload-server-choose">
          <template v-for="(val,key) in choose" :key="key">
            <template v-if="/[jpg|png|gif|jpeg]$/.test(val)">
              <div class="wp-upload-server-choose-item" :title="val" @click="option_del(val)">
                <img :src="val" alt="">
              </div>
            </template>
            <template v-else-if="/mp4$/.test(val)">
              <div class="wp-upload-server-choose-item" :title="val" @click="option_del(val)">
                <svg t="1646732246921" class="icon" viewBox="0 0 1087 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="47377" width="200" height="200"><path d="M768 415.744q0 5.12-10.752 17.92t-23.04 30.208-23.04 37.888-10.752 41.984 10.752 41.472 23.04 36.352 23.04 27.136 10.752 13.824l0 107.52q0 17.408-12.8 39.424t-31.744 41.472-41.984 32.256-43.52 12.8l-508.928 0q-27.648 0-50.688-9.728t-40.448-27.136-27.136-40.96-9.728-51.2l0-441.344q0-20.48 9.216-42.496t26.112-40.448 39.936-30.72 50.688-12.288l508.928 0q27.648 0 51.712 9.728t41.984 26.624 28.16 40.448 10.24 50.176l0 89.088zM1086.464 319.488l0 467.968q0 22.528-11.776 39.936t-35.328 17.408q-8.192 0-20.992-6.144t-25.6-14.336-24.064-16.384-16.384-13.312q-13.312-11.264-40.448-38.912t-54.784-62.464-48.64-71.68-20.992-67.584 22.528-70.144 54.272-77.312 66.56-70.144 58.368-48.64q9.216-6.144 25.088-14.848t28.16-8.704q27.648 0 35.84 15.36t8.192 37.888l0 2.048z" p-id="47378"></path></svg>
              </div>
            </template>
            <template v-else>
              <div class="wp-upload-server-choose-item" :title="val" @click="option_del(val)">
                <svg t="1646732270442" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="48247" width="200" height="200"><path d="M682.666667 245.333333a10.666667 10.666667 0 0 0 10.666666 10.666667h189.913334c-0.913333-1.066667-1.86-2.12-2.866667-3.126667L685.793333 58.286667c-1.006667-1.006667-2.06-1.953333-3.126666-2.866667z"  p-id="48248"></path><path d="M640 245.333333V42.666667H181.333333a53.393333 53.393333 0 0 0-53.333333 53.333333v832a53.393333 53.393333 0 0 0 53.333333 53.333333h661.333334a53.393333 53.393333 0 0 0 53.333333-53.333333V298.666667h-202.666667a53.393333 53.393333 0 0 1-53.333333-53.333334z m-320 10.666667h170.666667a21.333333 21.333333 0 0 1 0 42.666667H320a21.333333 21.333333 0 0 1 0-42.666667z m384 512H320a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667z m21.333333-234.666667a21.333333 21.333333 0 0 1-21.333333 21.333334H320a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 21.333333 21.333333z"  p-id="48249"></path></svg>
              </div>
            </template>
          </template>
        </div>
        <div class="wp-upload-server-buttons">
          <div class="wp-upload-server-button" style="background:#E6A23C;" @click="show_file(true)">新建文件夹</div>
          <el-upload action="" :accept="accept" :before-upload="upload_check" :http-request="upload_file" :multiple="multiple" :show-file-list="false">
            <div class="wp-upload-server-button">上传文件</div>
          </el-upload>
          <div class="wp-upload-server-button" style="background:#F56C6C;" @click="submit_cancel">取消选择</div>
          <div class="wp-upload-server-button" style="background:#67C23A;" @click="submit_confirm">确定</div>
        </div>
      </div>
      
      <template v-if="is_file">
        <div class="wp-upload-file-mask"></div>
        <div class="wp-upload-file-wrap" v-loading="is_submit">
          <div class="wp-upload-file-title">新建文件夹</div>
          <div class="wp-upload-file-container">
            <div class="wp-upload-file-notice">请使用英文、数量或_（英文下划线）</div>
            <div class="wp-upload-file-input">
              <input v-model="file_name" placeholder="文件夹名称">
            </div>
            <div class="wp-upload-file-buttons">
              <div class="wp-upload-file-flex"></div>
              <div class="wp-upload-file-button" style=" background:#F56C6C;" @click="show_file(false)">取消</div>
              <div class="wp-upload-file-button" @click="submit_file">确定</div>
            </div>
          </div>
        </div>
      </template>
      
    </div>
  </template>

</template>

<script>
import draggable from "vuedraggable/src/vuedraggable.js";
export default {
  name: "wp-form-upload",
  components : {draggable },
  props: {
    isButton : { type : Boolean, default : false },
    buttonText : { type : String, default : '点击上传' },
    isSelf : { type : Boolean, default : false },
    isServer : { type : Boolean, default: false },
    files : { type : [String, Array], default : '' },
    uploadType : { type : String, default : '' },
    uploadMethod : { type : Function , default : false },
    serverMethod : { type : Function , default : false },
    rules : { type : Object, default : ()=>{return {width : 0, height : 0, minWidth : 0, minHeight : 0, maxWidth : 0, maxHeight : 0, scale : ''}}},
    maxSize : { type : [String,Number], default : 0 },
    isDel : { type : Boolean, default : false },
    tip : { type : String, default : '' },
  },
  model: {},
  emits: ['update:files'],
  data() {
    return {
      is_upload : false,
      is_list : false,
      accept : '',
      is_server : false,
      list : [],
      dir : [],
      choose : [],
      is_self : this.isSelf,
      file_list : '',
      is_load : false,
      multiple : false,
      mask_show : '',
      wrap_show : '',
      is_submit : false,
      is_file : false,
      file_name : '',
      notice : '点击上传',
    }
  },
  mounted: async function () {
    try {
      setTimeout(()=>{
        this.file_list = this.files;
        if(this.files.constructor != String){
          this.is_list = true;
          this.multiple = true;
        }
        if(this.uploadType == 'image'){
          this.accept = '.jpg,.jpeg,.png,.gif';
        }
        if(this.uploadType == 'video'){
          this.accept = '.mp4'
        }
        if(this.isButton){
          this.is_self = false;
        }
        if(this.maxSize){
          this.notice = this.notice + "<br> 最大上传大小"+ this.maxSize+'KB';
        }
        if(this.rules.width){
          this.notice = this.notice + '<br>宽必须 '+ this.rules.width+'px';
        }
        if(this.rules.height){
          this.notice = this.notice + '<br>高必须 '+ this.rules.height+'px';
        }
        if(this.rules.minWidth){
          this.notice = this.notice + '<br>最小宽 '+ this.rules.minWidth+'px';
        }
        if(this.rules.minHeight){
          this.notice = this.notice + '<br>最小高 '+ this.rules.minHeight+'px';
        }
        if(this.rules.maxWidth){
          this.notice = this.notice + '<br>最大宽 '+ this.rules.maxWidth+'px';
        }
        if(this.rules.maxHeight){
          this.notice = this.notice + '<br>最大高 '+ this.rules.maxHeight+'px';
        }
        if(this.rules.scale){
          this.notice = this.notice + '<br>宽高比 '+ this.rules.scale;
        }
      },200);
    }catch (e) {
      console.log(e);
      return false;
    }
  },
  watch: {
    files(newValue) {
      this.file_list = newValue;
    },
    file_list(newval,oldval){
      if(newval != oldval){
        this.$emit('update:files',newval);
      }
    }
  },
  methods: {
    upload_file : async function (e){
      try {
        if(!this.uploadMethod){
          this.$ele.$_showToastError('请传入上传接口')
          console.log('请传上传api');
          return ;
        }
        if(!e || !e.file){
          this.$ele.$_showToastError('请选择文件')
          return ;
        }
        this.is_upload = true;
        let res = await this.uploadMethod(e.file,this.dir.join('/'));
        this.$ele.$_showToast(res);
        if(res.errcode == 0){
          if (this.isServer) {
            await this.get_list();
          } else {
            if (this.is_list) {
              this.file_list.push(res.url);
              this.$emit('update:files',this.file_list);
            } else {
              this.file_list = res.url;
              this.$emit('update:files',this.file_list);
            }
          }
        }
        this.is_upload = false;
      }catch (e) {
        console.log(e);
        return false;
      }
    },
    upload_check : function (e){
      let that = this;
      let check_size = true;
      if (that.maxSize){
        let size = e.size / 1024;
        if (size > that.maxSize){
          that.$ele.$_showToastError('最大只能上传' + that.maxSize + 'KB');
          check_size = false;
        }
      }
      let check_image = new Promise(function (resolve, reject){
        if (that.rules.maxWidth || that.rules.maxHeight || that.rules.width || that.rules.height || that.rules.scale || that.rules.minWidth || that.rules.minHeight){
          let _url = window.URL || window.webkitURL;
          let image = new Image();
          image.onload = function (){
            //检查宽
            if (that.rules.width){
              if (image.width != that.rules.width){
                that.$ele.$_showToastError('图片宽必须是' + that.rules.width + 'px');
                reject();
              }
            }
            //检查高
            if (that.rules.height){
              if (image.height != that.rules.height){
                that.$ele.$_showToastError('图片高必须是' + that.rules.height + 'px');
                reject();
              }
            }
            //检查比例
            if (that.rules.scale){
              let scale = that.rules.scale.split('|');
              if ((image.width / image.height) != (scale[0] / scale[1])){
                that.$ele.$_showToastError('图片宽高比例必须是' + scale[0] + ':' + scale[1]);
                reject();
              }
            }
            //最小宽
            if (that.rules.minWidth){
              if (image.width < that.rules.minWidth){
                that.$ele.$_showToastError('图片最小宽必须是' + that.rules.minWidth + 'px');
                reject();
              }
            }
            //最小高
            if (that.rules.minHeight){
              if (image.height < that.rules.minHeight){
                that.$ele.$_showToastError('图片最小高必须是' + that.rules.minHeight + 'px');
                reject();
              }
            }
            //最小宽
            if (that.rules.maxWidth){
              if (image.width > that.rules.maxWidth){
                that.$ele.$_showToastError('图片最大宽必须是' + that.rules.maxWidth + 'px');
                reject();
              }
            }
            //最小高
            if (that.rules.maxHeight){
              if (image.height > that.rules.maxHeight){
                that.$ele.$_showToastError('图片最大高必须是' + that.rules.maxHeight + 'px');
                reject();
              }
            }
            resolve();
          }
          image.src = _url.createObjectURL(e);
        }else{
          resolve();
        }
      })
      return check_size && check_image;
    },
    upload_del : function (val){
      if (!this.is_list) {
        this.file_list = '';
        this.$emit('update:files','');
      } else {
        let list = this.file_list;
        let key = list.indexOf(val);
        if(key !=-1){
          list.splice(key,1);
          this.file_list = list;
          this.$emit('upload:files',list);
        }
      }
    },
    show_server : async function (show){
      this.list = [];
      this.dir = [];
      this.choose = [];
      if(show){
        this.is_server = show;
        setTimeout(async ()=>{
          this.mask_show = 'mask-show';
          this.wrap_show = 'wrap-show';
          await this.get_list();
        },200)
      }else{
        this.mask_show = '';
        this.wrap_show = '';
        setTimeout(()=>{
          this.is_server = show;
        },200)
      }
    },
    server_del : async function (url){
      try {
        this.is_load = true;
        let res = await this.serverMethod('file_del', { url : url });
        this.$ele.$_showToast(res);
        this.is_load = false;
        if(res.errcode == 0){
          await this.get_list();
        }
      }catch (e) {
        console.log(e);
        return false;
      }
    },
    get_list : async function (){
      try {
        if(!this.serverMethod){
          console.log('请填写 fileMethod');
          return ;
        }
        if(!this.is_load){
          this.is_load = true;
          this.list = [];
          let res = await this.serverMethod('get_list',{ dir : this.dir.join('/') });
          console.log(res,22222)
          if(res.errcode == 0){
            this.list = res.list;
          }
          this.is_load = false;
        }
      }catch (e) {
        console.log(e);
        return false;
      }
    },
    submit_cancel : function (){
      this.show_server(false);
    },
    submit_confirm : function (){
      if(this.choose.length){
        if (!this.is_list) {
          this.file_list = this.choose[0];
          this.$emit('update:files',this.file_list);
        } else {
          let list = this.file_list;
          list = list.concat(this.choose);
          this.file_list = list;
          this.$emit('update:files',this.file_list);
        }
      }
      this.show_server(false);
    },
    dir_change : async function (dir){
      try {
        this.dir.push(dir);
        await this.get_list();
      }catch (e) {
        console.log(e);
        return false;
      }
    },
    dir_back : async function (){
      try {
        let dir = this.dir;
        let key = dir.length -1;
        dir.splice(key,1);
        this.dir = dir;
        await this.get_list();
      }catch (e) {
        console.log(e);
        return false;
      }
    },
    option_choose : function (url){
      if (this.is_list) {
        let check = this.choose.indexOf(url);
        if(check == -1){
          this.choose.push(url);
        }
      } else {
        this.choose = [];
        this.choose.push(url);
      }
    },
    option_del : function (url){
      let choose = this.choose;
      let key = choose.indexOf(url);
      if(key > -1){
        choose.splice(key,1);
        this.choose = choose;
      }
    },
    show_file : function (show){
      this.is_file = show;
      this.file_name = '';
    },
    submit_file : async function (){
      try {
        if(this.file_name && !this.is_submit){
          this.is_submit = true;
          let res = await this.serverMethod('create_dir', { path : this.dir.join('/'), dir : this.file_name });
          this.is_submit = false;
          if(res.errcode == 0){
            this.show_file(false);
            await this.get_list();
          }
        }
      }catch (e) {
        console.log(e);
        return false;
      }
    },
  },
}
</script>

<style scoped>
.upload-icon { width: 100px; height: 100px; border: 1px solid #dcdfe6; border-radius: 5px; overflow: hidden; transition: all 0.5s; position: relative; cursor: pointer; }
.upload-icon svg { width: 50px; height: 50px; fill: #dcdfe6; margin: 25px; transition: all 0.5s; }
.upload-icon:hover { border-color: #409EFF; }
.upload-icon:hover svg { fill: #409EFF; }
.upload-icon img { width: 100%; margin-top: 50%; transform: translateY(-50%); }

.upload-button { height: 32px; line-height: 32px; width: 120px; text-align: center; background: #409EFF; color: #ffffff; border-radius: 5px; font-size: 14px; cursor: pointer; }

.wp-form-upload-tip { padding-top: 10px; font-size: 12px; color: #999999; }

.upload-items { width: 100%; height: auto; }
.upload-items:after { content: ''; display: table; clear: both; }
.upload-item { float: left; width: 100px; height: 100px; border: 1px solid #dcdfe6; border-radius: 5px; overflow: hidden; margin-top: 10px; margin-right: 10px; position: relative; transition: all 0.5s; }
.upload-item-del { position: absolute; right: 0; top: 0; width: 24px; height: 24px; background: #dcdfe6; cursor: pointer; transition: color 0.5s; }
.upload-item-del svg { width: 18px; height: 18px; margin: 3px; fill: #409EFF; transition: all 0.5s; }
.upload-item img { width: 100%; margin-top: 50%; transform: translateY(-50%); }
.upload-item:hover { border-color: #409EFF; }
.upload-item:hover .upload-item-del { background: #409EFF; }
.upload-item:hover .upload-item-del svg { fill: #ffffff; }

.wp-upload-server-mask { position: fixed; z-index: 99999999; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0.2);opacity: 0; transition: opacity 0.5s;  }
.mask-show { opacity: 1; }
.wp-upload-server-wrap { position: fixed; z-index: 100000000; left: 50%; top: 50%; transform: translateX(-50%) translateY(-20%); overflow: hidden; background: #ffffff; border-radius: 5px; box-shadow: 0 0 10px #999999; width: 900px;opacity: 0; transition: all 0.5s;  }
.wrap-show { opacity: 1; transform: translateX(-50%) translateY(-50%);  }
.wp-upload-server-title-close { padding: 15px 20px; height: 20px; line-height: 20px; display: flex; border-bottom: 1px solid #dcdfe6; }
.wp-upload-server-title { color: #666666; flex: 1; }
.wp-upload-server-title i { font-size: 12px; font-style: normal; padding-left: 20px; }
.wp-upload-server-close { width: 18px; height: 18px; padding: 1px; overflow: hidden; cursor: pointer; color: #999999; }
.wp-upload-server-close svg path { fill: #999999; }
.wp-upload-server-close:hover svg path { fill: #409EFF; }
.wp-upload-server-container { width: 860px; height: 500px; margin-top: 20px; padding: 20px; overflow-x: hidden; overflow-y: auto; }
.wp-upload-server-container:after { content: ''; display: table; clear: both; }
.wp-upload-server-item { float: left; width: 110px; height: 110px; border: 1px solid #dcdfe6; border-radius: 5px; overflow: hidden; margin-bottom: 10px; margin-right: 10px; position: relative; transition: all 0.5s; cursor: pointer; }
.wp-upload-server-item svg { width: 50px; height: 50px; fill: #dcdfe6; margin: 30px; transition: all 0.5s; }
.wp-upload-server-item img { width: 100%; margin-top: 50%; transform: translateY(-50%); }
.wp-upload-server-item-title { position: absolute; left: 0; right: 0; bottom: 0; padding: 5px 10px; font-size: 12px; background: rgba(0,0,0,0.4); color: #ffffff; overflow: hidden; white-space: nowrap; text-overflow:ellipsis; transition: all 0.5s; }
.wp-upload-server-item-del { position: absolute; right: 0; top: 0; width: 24px; height: 24px; background: #dcdfe6; color: #999999; overflow: hidden; transition: all 0.5s; }
.wp-upload-server-item-del svg { width: 18px; height: 18px; margin: 3px; fill: #409EFF; transition: all 0.5s; }
.wp-upload-server-item:hover { border-color: #409EFF; }
.wp-upload-server-item:hover svg { fill: #409EFF; }
.wp-upload-server-item:hover .wp-upload-server-item-title { background: #409EFF; }
.wp-upload-server-item:hover .wp-upload-server-item-del { background: #409EFF; }
.wp-upload-server-item:hover .wp-upload-server-item-del svg { fill: #ffffff; }

.wp-upload-server-container::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(240, 240, 240, 1);
}
/*定义滚动条轨道 内阴影+圆角*/
.wp-upload-server-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0 rgba(240, 240, 240, .5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, .5);
}
/*定义滑块 内阴影+圆角*/
.wp-upload-server-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0 rgba(240, 240, 240, .5);
  background-color: #409EFF;
}
.wp-upload-server-choose-buttons { padding: 20px; height: 32px; line-height: 32px; display: flex; overflow:hidden; }
.wp-upload-server-choose { flex: 1; overflow: hidden; display: flex; }
.wp-upload-server-choose-item { width: 30px; height: 30px; line-height: 30px; text-align: center; overflow: hidden; background: #ffffff; border-radius: 5px; border : 1px solid #dcdfe6; transition: all 0.5s; cursor: pointer; margin-right: 10px; }
.wp-upload-server-choose-item svg { width: 18px; height: 18px; margin: 6px; transition: all 0.5s; fill: #999999;  }
.wp-upload-server-choose-item img { width: 100%; margin-top: 50%; transform: translateY(-50%); transition: all 0.5s;  }
.wp-upload-server-choose-item:hover { border-color: #409EFF; }
.wp-upload-server-choose-item:hover svg { fill: #409EFF; }

.wp-upload-server-buttons { display: flex; }
.wp-upload-server-button { margin-left: 10px; height: 32px; padding: 0 20px; background: #409EFF; color: #ffffff; border-radius: 5px; font-size: 14px; cursor: pointer; }

.wp-upload-file-mask { position: absolute; z-index: 99; left: 0; right: 0; top: 0; bottom: 0; background: rgba(0,0,0,0.4); }
.wp-upload-file-wrap { position: absolute; width: 400px; height: auto; background: #ffffff; border-radius: 5px; overflow: hidden; z-index: 100; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); }
.wp-upload-file-title { padding: 15px 20px; font-size: 16px; color: #666666; border-bottom: 1px solid #dcdfe6; }
.wp-upload-file-container { padding: 20px; }
.wp-upload-file-notice { font-size: 16px; line-height: 1.5; }
.wp-upload-file-input { width: 100%; padding: 20px 0; }
.wp-upload-file-input input { display: block; box-sizing: border-box; padding: 0 10px; border: 1px solid #dcdfe6; width: 100%; height: 32px; line-height: 32px; border-radius: 5px; outline: #409EFF; }
.wp-upload-file-buttons { height: 32px; line-height: 32px; display: flex; font-size: 14px; color: #ffffff; }
.wp-upload-file-flex { flex: 1; }
.wp-upload-file-button { height: 32px; padding: 0 20px; border-radius: 5px; background: #409EFF; margin-left: 10px; cursor: pointer; }
</style>