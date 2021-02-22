### 使用说明：

```javascript
npm install  
// 安装依赖

npm link  
// link 全局

my-module 
// 启动脚手架工具，创建模板页面
```


### 编程思路：

1.创建项目文件夹：mkdir my-module

2.初始化package.json：cd my-module & npm init 

3.创建启动文件: lib\cli.js

4.package.json中配置启动入口: bin：lib\cli.js

5.全局link: npm link

6.创建模板文件：lib\template\index.html

7.安装inquirer和模板引擎ejs： npm i inquirer & npm i ejs

8.使用inquirer编写交互程序，使用模板引擎读取模板和交互数据，写入目标路径。