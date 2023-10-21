console.log('process ID:\r\n', process.pid);

// use "cross-env" for environment parameters and arguments passing, watch section "scripts" in package.json
console.log('process environment, PORT:\r\n', process.env.PORT);
console.log('process environment, NODE_ENV:\r\n', process.env.NODE_ENV);

console.log('process arguments:\r\n', process.argv);

// for view result run in console "npm run process"