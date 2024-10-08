export default function updateStudentGradeByCity(studentsList, city, grades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object with matching studentId
      const gradeObj = grades.find((grade) => grade.studentId === student.id);

      // If a matching grade object exists, return updated student with the grade
      if (gradeObj) return { ...student, grade: gradeObj.grade };
      // Assign 'N/A' if no grade found
      return { ...student, grade: 'N/A' };
    });
}
