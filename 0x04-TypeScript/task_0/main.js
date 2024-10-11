var student1 = {
    firstName: 'Dj',
    lastName: 'Dem',
    age: 25,
    location: 'Nairobi',
};
var student2 = {
    firstName: 'The',
    lastName: 'Dem',
    age: 25,
    location: 'USIU',
};
var studentsList = [student1, student2];
studentsList.forEach(function (student) {
    console.log(student.firstName, student.location);
});
