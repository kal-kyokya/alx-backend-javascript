const countStudents = require('./3-read_file_async');

countStudents('database.csv')
    .then(() => {
        console.log('Done!');
    })
    .catch((error) => {
        console.log(error);
    });

console.log('Do some of this !\n');

console.log('Do some of that !\n');

console.log('How is da weather 2day, yo !\n');

console.log('Wazzup boi ?!\n');
