var fs = require('fs'),
		http = require('http'),
		sio = require('socket.io');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(fs.readFileSync('./index.html'));
});

server.listen(8000,function(){
	console.log('Server listening at http://localhost:8000');
});

io = sio.listen(server);

var messages = [];

io.sockets.on('connection',function(socket){
	socket.on('message',function(msg){
		console.log('Received: ', msg);
		messages.push(msg);
		socket.broadcast.emit('message',msg);
	});

	messages.forEach(function(msg){
		socket.send(msg);
	});
});