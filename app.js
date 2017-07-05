function process(argv){
	if(Array.isArray(argv)){
		argv.push('d'); //inserta un elemento al final del array
		argv.pop(); //remueve el elemento al final del array
		argv.unshift('1'); //inserta un elemento al comienzo del  array
		argv.shift(); //remueve el elemento al comienzo del array
		argv.pop(); //
		if(argv.indexOf('help') != -1)
			console.log(argv[argv.indexOf('help')]);

		console.log(argv);
	}else{
		console.log("argument should be an array");
	}
}

// process(['foo','bar','help']);

var lookup = {12: {foo: 'b'}, 13:{foo:'a'},14:{foo:'c'}};
// console.log(Object.keys(lookup).indexOf('12') > -1);

var names = ['a','b','c'];
// names.forEach(function(value){ //Calls a function for each element in the array
// 	console.log(value);
// });

var items = [{id:1}, {id:2}, {id:3}, {id:4}];

items = items.filter(function(item){ // Creates a new array with all of the elements of this array for which the provided filtering function returns true
	return (item.id % 2 === 0);
});

// console.log(items);


// var group = {'Alice': {a: 'b', b: 'c'}, 'Bob': {a : 'd'}};
// var people = Object.keys(group);
// people.forEach(function(person){
// 	var items = Object.keys(group[person]);
// 	items.forEach(function(item){
// 		var value = group[person][item];
// 		console.log(person+': '+item+' = '+value);
// 	})
// })

var obj = {x:'1',a: '2', b: '3'};
var items = Object.keys(obj);
items.sort();
items.forEach(function(item){
	console.log(item + '=' + obj[item]);
})

