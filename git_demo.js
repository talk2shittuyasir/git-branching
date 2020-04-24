const fs = require('fs');

const myWriter = fs.writeFile('note.txt', 'The first content', () => {
    console.log(`file created`);
});


let myAppender = fs.appendFile('note.txt', 'content from the appendbranch', (err) => {
    if (err) {
        throw err;
        return;
    }

    console.log('data appended');
});