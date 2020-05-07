# tools

### 功能说明
1. 下载离职证明
2. 查询某天在职人数
3. 人事仪表盘

### 使用方法
1. 登录并进入到东经智能管理平台-管理端
2. 按下键盘F12键，选中Console界面
3. 复制并粘贴以下代码到Console中，然后按下回车键
```
let script = document.createElement('script');
script.src = 'https://youxiang0411.github.io/tools/lib/js/index.js?v=' + new Date().getTime();
document.getElementsByTagName('head')[0].appendChild(script);
```