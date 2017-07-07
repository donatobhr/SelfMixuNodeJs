console.log(__filename); //The filename of the code being executed
console.log(__dirname); //The name of the directory that the currently executing script resides in.
console.log(process.argv[2]); //An array containing the command line arguments.
console.log(module == require.main);