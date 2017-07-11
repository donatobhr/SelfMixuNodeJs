var EventEmitter = require('events').EventEmitter,
		util = require('util'),
		fs = require('fs');

var PathIterator = function(){};

util.inherits(PathIterator,EventEmitter);

PathIterator.prototype.iterate = function(path){
	var self = this;
	this.statDirectory(path, function(fpath,stats){
		if(stats.isFile()){
			self.emit('file',fpath,stats);
		}else if(stats.isDirectory()){
			self.emit('directory',fpath,stats);
			self.iterate(path+'/'+fpath);
		}
	});
}

PathIterator.prototype.statDirectory = function(path, callback){
	var self = this;
	fs.readdir(path,function(err,files){
		if(err) {self.emit('error',err);}
		files.forEach(function(file){
			var fpath = path+'/'+file;
			fs.stat(fpath,function(err,stats){
				if(err){ self.emit('error',err);}
				callback(fpath,stats);
			});
		});
	});
};

module.exports = PathIterator;