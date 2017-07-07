// The building blocks of Node applications are:

// Streams Readable and writable streams an alternative way of interacting with (file|network|process) I/O.

// Buffers Buffers provide a binary-friendly, higher-performance alternative to strings by exposing raw memory allocation outside the V8 heap.

// Events Many Node.js core libraries emit events. You can use EventEmitters to implement this pattern in your own applications.

// Timers setTimeout for one-time delayed execution of code, setInterval for periodically repeating execution of code

// C/C++ Addons Provide the capability to use your own or 3rd party C/C++ libraries from Node.js

// setTimeout(function(){
// 	console.log('Foo');
// },1000);

// var counter = 0;
// var interval = setInterval(function(){
// 	console.log('Bar', counter);
// 	counter++;
// 	if(counter >= 3){
// 		console.log(interval);
// 		clearInterval(interval);
// 	}
// },1000)
// console.log(interval);

var SimpleEE = function(){
	this.events = {};
}

SimpleEE.prototype.on = function(eventname, callback){
	this.events[eventname] || (this.events[eventname] = []);
	this.events[eventname].push(callback);
};

SimpleEE.prototype.emit = function(eventname){
	var args = Array.prototype.slice.call(arguments,1);
	if(this.events[eventname]){
		this.events[eventname].forEach(function(callback){
			callback.apply(this, args);
		});
	}
}

var emitter = new SimpleEE();
emitter.on('greet',function(name){
	console.log('Hello, ' + name + '!');
});

emitter.on('greet',function(name){
	console.log('World, ' + name + '!');
});

// ['foo','bar','baz'].forEach(function(name){
// 	emitter.emit('greet',name);
// })





//Stream

// var fs = require('fs');
// var file = fs.createWriteStream('./out.txt');

// process.stdin.on('data',function(data){
// 	file.write(data);
// });

// process.stdin.on('end',function(){
// 	file.end();
// });

// process.stdin.resume();






//Buffer

// var buffer = new Buffer(10); //Create a buffer of 10 bytes
// buffer[0] = 255;


var buffer = new Buffer('25Hyvää päivää!'); // create a buffer containing “Good day!” in Finnish
var str = 'Hyvää päivää!'; // create a string containing “Good day!” in Finnish
// log the contents and lengths to console
console.log(buffer);
console.log('Buffer length:', buffer.length);
console.log(str);
console.log('String length:', str.length);



console.log(buffer);