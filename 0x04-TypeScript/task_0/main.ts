interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string
}

const student1: Student = {
  firstName: 'Dj',
  lastName: 'Dem',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'The',
  lastName: 'Dem',
  age: 25,
  location: 'USIU',
};

const studentsList: Student[] = [student1, student2];

studentsList.forEach((student) => {
  console.log(student.firstName, student.location);
});