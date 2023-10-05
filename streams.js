// const fs = require('fs');

// const readStream = fs.createReadStream('./yass/yass.txt', {encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./yass/lolo.txt');

// readStream.on('data', (chunk) =>{
//     console.log('new Chunck');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNCK\n');
//     writeStream.write(chunk);
// })

//pipe
// readStream.pipe(writeStream);