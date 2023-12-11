const path = require('path');

// use "join" for build paths
console.log('join ex1:\r\n', path.join('dir1', 'dir2', 'dir3', 'file.js'));
console.log('join ex2:\r\n', path.join('dir1', 'dir2', '..', 'dir3', 'file.js'));
console.log('join ex3:\r\n', path.join('dir1', 'dir2', '.', 'dir3', 'file.js'));
console.log('join ex4:\r\n', path.join(__dirname, 'dir1', 'dir2', 'dir3', 'file.js'));

// use "resolve" for build paths
console.log('resolve ex1:\r\n', path.resolve('dir1', 'dir2', 'dir3', 'file.js'));
console.log('resolve ex2:\r\n', path.resolve('dir1', 'dir2', '..', 'dir3', 'file.js'));
console.log('resolve ex3:\r\n', path.resolve('dir1', 'dir2', '.', 'dir3', 'file.js'));
console.log('resolve ex4:\r\n', path.resolve(__dirname, 'dir1', 'dir2', 'dir3', 'file.js'));

// parse path
console.log('parse ex1:\r\n', path.parse(path.join('dir1', 'dir2', 'dir3', 'file.js')));
console.log('parse ex2:\r\n', path.parse(path.resolve('dir1', 'dir2', 'dir3', 'file.js')));

// additional features
console.log('sep', path.sep);
console.log('basename', path.basename(path.resolve('dir1', 'dir2', 'dir3', 'file.js')));
console.log('extname', path.extname(path.resolve('dir1', 'dir2', 'dir3', 'file.js')));

// work with url
const siteUrl = 'https://yoursite.ru:80/test/?param1=123';
const url = new URL(siteUrl);
console.log('URL info:\r\n', url);