// introduce three essential async control flow patterns:

// Series - for running async tasks one at a time
// Fully parallel - for running async tasks all at the same time
// Limitedly parallel - for running a limited number of async tasks at the same time

// Control flow pattern #1: Series - an asynchronous for loop

function async(arg, callback){
	console.log('do something with\''+arg+',return 1 sec later');
	setTimeout(function(){callback(arg * 2);}, 1000);
}

function final(){console.log('Done', results);}

var items = [1,2,3,4,5,6];
var results = [];
function series(item){
	if(item){
		async(item,function(result){
			results.push(result);
			return series(items.shift());
		});
	}else{
		return final();
	}
}
// series(items.shift());

// Characteristics:

// Runs a number of operations sequentially
// Only starts one async operation at a time (no concurrency)
// Ensures that the async function complete in order

// Variations:

// The way in which the result is collected (manual or via a “stashing” callback)
// How error handling is done (manually in each subfunction, or via a dedicated, additional function)
// Since execution is sequential, there is no need for a “final” callback





// Control flow pattern #2: Full parallel - an asynchronous, parallel for loop
// items.forEach(function(item){
// 	async(item,function(result){
// 		results.push(result);
// 		if(results.length == items.length)
// 			final();
// 	});
// });


// Characteristics:

// Runs a number of operations in parallel
// Starts all async operations in parallel (full concurrency)
// No guarantee of order, only that all the operations have been completed


// Variations:

// The way in which the result is collected (manual or via a “stashing” callback)
// How error handling is done (via the first argument of the final function, manually in each subfunction, or via a dedicated, additional function)
// Whether a final callback can be specified



// Control flow pattern #3: Limited parallel - an asynchronous, parallel, concurrency limited for loop

var running = 0;
var limit = 2;
console.log(items);
function launcher(){
	while(running < limit && items.length > 0){
		var item = items.shift();
		async(item,function(result){
			results.push(result);
			running--;
			if(items.length > 0){
				launcher();
			}else if(running == 0){
				final();
			}
		});
		running++
	}
}

launcher();


// Characteristics:

// Runs a number of operations in parallel
// Starts a limited number of operations in parallel (partial concurrency, full concurrency control)
// No guarantee of order, only that all the operations have been completed