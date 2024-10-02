import createIteratorObject from './100-createIteratorObject';

import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('Defense', ['Baba', 'Mbiru']),
  ...createEmployeesObject('Midfield', ['Achar', 'James']),
  ...createEmployeesObject('Attack', ['Raul', 'Musasia']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
