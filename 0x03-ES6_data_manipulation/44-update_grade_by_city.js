export default function updateStudentGradeByCity(studentsList, city, grades) {
    return studentsList
	.filter((student) => student.location === city)
	.map((student) => {
	    if (student.id in grades.map((gradeObj) => gradeObj.id)) {
		return { ...student,
			 grade: grades
			 .filter((grade) => grade.studentId === student.id)[0].grade, };
	    } else {
		return { ...student, grade: 'N/A'};
	    }
	});
}
