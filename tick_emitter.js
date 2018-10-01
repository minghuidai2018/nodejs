var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var eventName = 'tick';

var count = 0;
setInterval(function() {
    emitter.emit(eventName, count  );
    count++;
}, 1000);


emitter.on(eventName, function(count) {
    console.log(eventName, count);
});

