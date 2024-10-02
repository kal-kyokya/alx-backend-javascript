import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';
import iterateThroughObject from './101-iterateThroughObject';

const employees = {
  ...createEmployeesObject('Defense', ['Baba', 'Mbiru']),
  ...createEmployeesObject('Midfield', ['Achar', 'James']),
  ...createEmployeesObject('Attack', ['Raul', 'Musasia']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
