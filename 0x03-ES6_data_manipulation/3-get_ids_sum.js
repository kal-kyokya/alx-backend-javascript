export default function getStudentIdsSum(studentsList) {
  return studentsList
    .map((student) => student.id)
    .reduce((accumulator, current) => accumulator + current, 0);
}
