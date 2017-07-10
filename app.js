// var http = require('http');
// var url = require('url')
// var server = http.createServer(function(request, response){
// 	var urlStr = request.url;
// 	console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true));
// 	response.write(url.parse(urlStr, true).toString());
// 	response.end();
// });

// server.listen(8080, 'localhost');




// var server = http.createServer().listen(8080,'localhost');
// server.on('request', function(req, res){
// 	var url_parts = url.parse(req.url, true);
// 	switch(url_parts.pathname){
// 		case '/':
// 		case '/index.html':
// 			res.write('<html><body>Hello</body></html>');
// 			break;
// 		default:
// 			res.write('Unknown path: ' + JSON.stringify(url_parts));
// 	}
// 	res.end();
// })


// var qs = require('querystring');
// var options = {
// 	host: 'www.google.com',
// 	port: '80',
// 	path: '/search?'+qs.stringify({q:'hello world'})
// }

// var req = http.get(options,function(response){
// 	var res_data;
// 	response.on('data',function(chunk){
// 		res_data += chunk;
// 	});

// 	response.on('end',function(){
// 		console.log(res_data);
// 	});

// 	response.on('error',function(e){
// 		console.log('Got error: ' + e.message);
// 	})
// })



// var server = http.createServer(function(sreq,sres){
// 	var url_parts = url.parse(sreq.url);
// 	var opts = {
// 		host: 'google.com',
// 		port: 80,
// 		path: url_parts.pathname,
// 		method: sreq.method,
// 		headers: sreq.headers
// 	};

// 	var creq = http.request(opts, function(cres){
// 		sres.writeHead(cres.statusCode, cres.headers);
// 		cres.pipe(sres);
// 	});

// 	sreq.pipe(creq);
// }).listen(80,'0.0.0.0');
// console.log('server running');



var https = require('https');
var fs = require('fs');
var pk = fs.readFileSync('./privatekey.pem');
var pc = fs.readFileSync('./certificate.pem');
var opts = {key: pk, cert:pc};

var serv = https.createServer(opts,function(req,res){
	console.log(req);
	res.end();
}).listen(443,'0.0.0.0');