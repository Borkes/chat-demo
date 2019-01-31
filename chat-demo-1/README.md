# chat-demo-1

简单的通过注册登录的方式来聊天，群聊增加了用户昵称

## 启动方式

$ npm install
$ node app.js
浏览器访问本地：
http://localhost:3000/

前后端使用了与demo0不同的path
demo0使用的是默认path /socket.io/
demo1使用的是 /websocket/ 自定义修改的path

前端对transports需要使用两种，如果漏掉polling，连接的时候缺少两次轮询请求
`var socket = io({path: "/websocket", transports: ["polling", "websocket"]});`

