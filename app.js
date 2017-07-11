var fs = require('fs');

// fs.readFile('./README.md', 'utf-8',function(err,data){
// 	fs.writeFile('./results.txt',data,function(err){
// 		if(err) throw err;
// 		console.log('File write completed');
// 	})
// 	// console.log(data);
// })




// fs.open('./results.txt','w',function(err,fd){
// 	if(err) throw err;
// 	var buf = new Buffer('bbbbb\n');
// 	fs.write(fd,buf,0,buf.length,null,function(err,written,buffer){
// 		if(err) throw err;
// 		console.log(err, written, buffer);
// 		fs.close(fd,function(){
// 			console.log('Done');
// 		})
// 	})
// })



// fs.open('./results.txt','r', function(err,fd){
// 	if(err) throw err;
// 	var buf = new Buffer(3);
// 	fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
// 		if(err) throw err;
// 		console.log(err,bytesRead,buffer);
// 		fs.close(fd,function(){
// 			console.log('Done');
// 		});
// 	});
// });




// var path = './';
// fs.readdir(path,function(err,files){
// 	if(err) throw err;
// 	files.forEach(function(file){
// 		console.log(path+file);
// 		fs.stat(path+file,function(err,stats){
// 			console.log(stats);
// 		});
// 	});
// });



// fs.mkdir('./newdir',0666,function(err){
// 	if(err) throw err;
// 	console.log('Created newdir');
// 	setTimeout(function(){
// 		fs.rmdir('./newdir',function(err){
// 			if(err) throw err;
// 			console.log('Remove newdir');
// 		})
// 	},3000)
// });



// var file = fs.createReadStream('./results.txt',{flags: 'r'});
// var out = fs.createWriteStream('./results2.txt',{flags: 'w'});
// file.on('data',function(data){
// 	console.log('data', data);
// 	out.write(data);
// });

// file.on('end',function(){
// 	console.log('end');
// 	out.end(function(){
// 		console.log('finished writing to file');
// 	});
// });

// file.pipe(out);


// var file = fs.createWriteStream('./results.txt',{flags:'a'});
// file.write('Hello!\n');
// file.end(function(){
// 	console.log('done');
// });

var PathIterator = require('./pathiterator.js');
function findFile(path, searchFile,callback){
	var pi = new PathIterator();
	pi.on('file',function(file,stats){
		if(file == searchFile){
			callback(undefined,file);
		}
	});

	pi.on('error',callback);
	pi.iterate(path);
}

findFile('./','results.txt',function(err,path){
	if(err) {throw err;}
	console.log('Found file at: ' + path);
})