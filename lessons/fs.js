const fs = require('fs');
const path = require('path');

// synchronous folder creation
// fs.mkdirSync(path.resolve(__dirname, '..', 'tmp'));

// synchronous recursive folder creation
// fs.mkdirSync(path.resolve(__dirname, '..', 'tmp', 'dir1', 'dir2'), {recursive: true});

// asynchronous folder creation with error handling (recursive creation is not supported)
fs.mkdir(path.resolve(__dirname, '..', 'tmp'), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('folder created successfully');
});

// asynchronous overwriting file
fs.writeFile(path.resolve(__dirname, '..', 'tmp', 'log1.txt'), 'some text...', (err) => {});

// asynchronous appending information to file
fs.appendFile(path.resolve(__dirname, '..', 'tmp', 'log2.txt'), 'some text...', (err) => {});

// asynchronous folder creation
fs.rmdir(path.resolve(__dirname, '..', 'tmp'), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('folder removed successfully');
});