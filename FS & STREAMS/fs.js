const fs = require('fs');

fs.readFile('t.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File Content:', data);
});
