# tools

### 一、功能说明
1. 下载离职证明
2. 查询某天在职人数
3. 人事仪表盘

### 二、文件说明
1. 技术方面是用jquery，不是vue
2. tools/lib/css/index.css 是对layui样式的调整
3. tools/lib/file 这里是放其他文件
4. tools/lib/js/api.js ajax原生封装，用于接口发送请求
5. tools/lib/js/method.js 用来放常用方法的，比如日期格式化、根据出生日期获取年龄
6. tools/lib/js/main.min.js 用于word文档处理和下载的
7. tools/lib/js/index.js 主要文件，目前三个功能都是放在这里的

### 三、使用方法
1. 登录并进入到东经智能管理平台-管理端
2. 按下键盘F12键，选中Console界面
3. 复制并粘贴以下代码到Console中，然后按下回车键
```
let script = document.createElement('script');
script.src = 'https://youxiang0411.github.io/tools/lib/js/index.js?v=' + new Date().getTime();
document.getElementsByTagName('head')[0].appendChild(script);
```