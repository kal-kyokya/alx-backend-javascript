import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('Defense', ['Baba', 'Mbiru']),
  ...createEmployeesObject('Midfield', ['Achar', 'James']),
  ...createEmployeesObject('Attack', ['Raul', 'Musasia']),
};

const report = createReportObject(employees);

console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
