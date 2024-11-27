// This script attempts to read a database file synchronously

const fs = require('fs');

module.exports = function countStudents(database) {
  fs.readFile(database, (err, data) => {
    if (err) throw new Error('Cannot load the database');

    const records = data.toString().split('\n');
    console.log(`Number of students: ${records.length - 2}`);

    const students = { CS: [], SWE: [] };

    for (let i = 1; i < records.length - 1; i += 1) {
      const studentFields = records[i].split(',');
      if (studentFields[studentFields.length - 1] === 'CS') {
        students.CS.push(studentFields[0]);
      }
      if (studentFields[studentFields.length - 1] === 'SWE') {
        students.SWE.push(studentFields[0]);
      }
    }

    const csList = students.CS.join(', ');
    const sweList = students.SWE.join(', ');
    console.log(`Number of students in CS: ${students.CS.length}. List: ${csList}`);
    console.log(`Number of students in SWE: ${students.SWE.length}. List: ${sweList}`);
  });
};
