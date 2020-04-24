const fs = require('fs');

const myWriter = fs.writeFile('note.txt', 'The first content', () => {
    console.log(`file created`);
});