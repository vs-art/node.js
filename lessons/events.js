const Emitter = require('events');
const emitter = new Emitter();
let message = process.env.message || '';
let callback = (data) => {
    if (data.length) {
        console.log('You sent message:\r\n' + data);
    } else {
        console.log('You sent empty message');
    }
};

// event listener definition (can be multiple)
emitter.on('message', callback);
// single-triggered event listener definition
emitter.once('single_message', callback);

// trigger event
emitter.emit('message', message);

// remove all event listeners
emitter.removeAllListeners();

// remove a specific listener
emitter.removeListener('message', callback);

// to run this lesson write to console (for Windows):
// cross-env message="my message" node .\lessons\events.js