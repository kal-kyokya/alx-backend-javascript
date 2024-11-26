// This script attempts to read a database file asynchronously

const { readFile } = require('fs');

module.exports = function countStudents(database) {
  return new Promise((resolve, reject) => {
    readFile(database, (err, data) => {

        if (err) reject(new Error('Cannot load the database'));

        const records = data.toString().split('\n');
        console.log(`Number of students: ${records.length - 2}`);

        const students = { CS: [], SWE: [] };

        for (let i = 1; i < records.length - 1; i += 1) {
            const studentFields = records[i].split(',');
            if (studentFields[studentFields.length - 1] === 'CS') {
                students['CS'].push(studentFields[0]);
            }
            if (studentFields[studentFields.length - 1] === 'SWE') {
                students['SWE'].push(studentFields[0]);
            }
        }

        csList = students.CS.join(', ');
        sweList = students.SWE.join(', ');
        console.log(`Number of students in CS: ${students.CS.length}. List: ${csList}`);
        console.log(`Number of students in SWE: ${students.SWE.length}. List: ${sweList}`);

        resolve(true);
    });
  });
};
