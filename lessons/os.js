const os = require('os');

// common features
console.log('operating system:\r\n', os.platform());
console.log('version of operating system:\r\n', os.version());
console.log('processor architecture:\r\n', os.arch());
console.log('processor cores description:\r\n', os.cpus());

console.log('free memory:\r\n', os.freemem());
console.log('total memory:\r\n', os.totalmem());