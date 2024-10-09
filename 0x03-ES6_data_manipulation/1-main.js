import getListStudents from './0-get_list_students';
import getListStudentIds from './1-get_list_student_ids';

console.log(getListStudentIds(getListStudents()));
console.log(getListStudentIds(getListStudents()).length);
console.log(getListStudentIds(null));
console.log(getListStudentIds('dem'));
