### generator for react
创建前需确认时候已经安装yeoman，未安装先执行
```
npm -g i yo
```
安装generator-react-init
```
npm -g i generator-react-init
```
创建项目：
```
yo react-init
```
会在当前目录创建项目文件并安装对应依赖
创建完成后需要根据config_default.js配置config.js
以及查看src/static/index_default.html是否需要修改
src/static/index_default.html中会含有，表示拒绝搜索引擎索引，可以自由移除
```
<meta name="robots" content="none">
```
其中标题等使用<%- key %>表示的均需要到config.js中修改然后执行对应命令即可
