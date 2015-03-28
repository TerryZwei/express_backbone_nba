# 实践--Backbonejs

经过一个星期左右对backbonejs的学习和尝试，本着不动手做项目不能掌握的精神，所以用nodejs的express框架+backbonejs搭建了一个nba数据的例子。希望有兴趣的同学可以参与进来。

- **后台使用nodejs的express框架**
- **使用superagent模块获取数据（不好的地方，没用到数据库，数据会出现延时）**
- **前端使用seajs和backhonejs结合完成展示(使用seajs引用需要改动基础库，具体改动方法：[CMD 模块定义规范](https://github.com/seajs/seajs/issues/242))**


-------------------

## 项目启动

 -  安装模块   `npm install` 
 - 启动项目    `coffee app.coffee` 
 - 访问地址    `http://localhost:3000/static/nba.html`