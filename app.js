// function f1(a,b){
// 	console.log(this, a,b);
// }

// var obj1 = {id:"foo"};
// f1.call(obj1, 'A', 'B');
// var obj2 = {id:"bar"};
// f1.apply(obj2,['A','B']);
// f1();

var obj = {
	id: "xyz",
	printId: function(){
		console.log('The id is '+ this.id + ' ' + this.toString());
	}
};
obj.printId();
setTimeout(obj.printId, 100);

setTimeout(function(){obj.printId()}, 100);
var callback = obj.printId();
var callback = function(){obj.printId()};
callback();