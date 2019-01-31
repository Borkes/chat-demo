var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){  //监听 'chat message' 通道发送的消息
    io.emit('chat message', msg); // 广播消息，某一个用户发送的消息推送给所有人
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
