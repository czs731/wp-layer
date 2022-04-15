# WeiPaiLayer

请使用vue3 vue2不保证可兼容

## 使用

### 使用前请安装以下插件

| 名称           | 链接地址 |
|--------------|----|
| element-plus | https://element-plus.gitee.io/zh-CN/|
| vuedraggable | https://www.npmjs.com/package/vuedraggable/v/4.1.0 |
| axios        |http://www.axios-js.com/|
| qs           |https://www.npmjs.com/package/qs|
|crypto-js|https://www.npmjs.com/package/crypto-js|

### 安装及使用

npm install weipai-layer

## wp-wrap
```vue
<wp-wrap>
<template #menu>菜单</template>
<template>内容</template>
</wp-wrap>
```

### Props

minWidth : { type : [String,Number], default : 1000 },

minHeight : { type : [String,Number], default : 900 },

paddingTop : { type : [String,Number], default : 0 },

paddingRight : { type : [String,Number], default : 0 },

paddingLeft : { type : [String,Number], default : 0 },

paddingBottom : { type : [String,Number], default : 0 },

borderColor : { type : String, default : '#dcdfe6' },

isMenu : { type : Boolean, default : true },

menuWidth : { type : [String,Number], default : 180 },

containerLeft : { type : [String,Number], default : 30 },


### props

| 属性     | 类型            | 默认值 | 
|--------|---------------|-----|
| paddingTop | string number | 0 |
| paddingRight | string number | 0 |
| paddingLeft | string number | 0 |
| paddingBottom | string number | 0 |
| borderColor | string        | #dcdfe6 | 
| isMenu | Boolean       | true | 
|menuWidth| string number | 150 |
|menuRight| string number | 30 |

### slot

* menu
* default

## wp-page

### props

####  

### 参数
