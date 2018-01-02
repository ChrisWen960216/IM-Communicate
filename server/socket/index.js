const socketio = {};
const socket_io = require('socket.io');
const ChatModel = require('../mongo/schema').getModel('Chat');

//获取io  
socketio.getSocketio = function (server) {
  const io = socket_io.listen(server);
  io.on('connect', socket => {
    socket.on('sendMessage', data => {
      const { from, to, message } = data;
      const chaiId = [from, to].sort().join('_');
      ChatModel.create({ chaiId, from, to, content: message }).then((response) => {
        console.log(Object.assign({}, response._doc));
        return io.emit('receiveMessage', Object.assign({}, response._doc));
      });

    });
  });
};

module.exports = socketio;