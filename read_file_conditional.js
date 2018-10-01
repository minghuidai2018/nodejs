var fs = require('fs');

fs.stat(__filename, function(err, stats) {
    if (err) {
        console.error(err);
    } else {
        if (stats.size < 1024) {
            fs.readFile(__filename, 'utf8', function(err, fileContent) {
                if (err) {
                    console.error(err);
                } else {
                    console.log('------', fileContent);
                }
            });
        } else {
            console.log('didn\'t read the file, it was too long.');
        }
    }
});