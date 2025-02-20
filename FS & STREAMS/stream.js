const fs = require('fs');

const readStream = fs.createReadStream('t.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received Chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file.');
});
