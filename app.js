var fs = require("fs");
var http = require("http");

// fs.readFile("../jsEloquentSelf/talks.json", function(error,data){
// 	console.log(JSON.parse(data.toString()));
// });
// console.log("Hola mundo");

var content = `
<html>
Hello world
<script>
	alert('Hola mundo');
</script>
</html>
`;
http.createServer(function(request,response){
	response.end(content);
}).listen(8080);
console.log("server running at http://localhost:8080");


