const socketio = {};
const socket_io = require('socket.io');

//获取io  
socketio.getSocketio = function (server) {
  const io = socket_io.listen(server);
  io.on('connect', socket => {
    console.log('HAHA');
  });
};

module.exports = socketio;