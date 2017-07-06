function Foo(bar){
	this.bar = bar;
	this.baz = 'baz';
}

Foo.prototype.fooBar = function(){

};


var object = new Foo('Hello');
// console.log(object.bar);
module.exports = Foo;

