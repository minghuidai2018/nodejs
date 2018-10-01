var fs = require('fs');

var filename = __filename;
fs.readFile(filename, 'utf8', function(err, fileContent) {
    if (err) {
        console.error(err);
    } else {
        console.log('got file content:', fileContent);
    }
});