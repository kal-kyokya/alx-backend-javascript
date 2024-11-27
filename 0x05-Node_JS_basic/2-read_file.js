// This script attempts to read a database file synchronously

const fs = require('fs');

module.exports = function countStudents(database) {
  fs.readFile(database, (err, data) => {
    if (err) throw new Error('Cannot load the database');

      const records = data
	    .toString('utf-8')
	    .trim()
	    .split('\n');
    console.log(`Number of students: ${records.length - 1}`);

      const studentGroups = {};
      const dbFieldNames = records[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const record of records.slice(1)) {
	  const studentData = record.split(',');
	  const studentPropValues = studentData.slice(0, studentData.length - 1);
	  const field = studentData[studentData.length - 1];

	  if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
	  }

	  const studentEntries = studentPropNames
		.map((propName, index) => [propName, studentPropValues[index]]);

	  studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const lists = {};
      for (const [key, value] of Object.entries(studentGroups)) {
	  lists[key] = value.map((student) => student.firstname).join(', ');
	  console.log(`Number of students in ${key}: ${value.length}. List: ${lists[key]}`);
      }
  });
};
