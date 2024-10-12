interface Teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: string]: any
}

const teacher: Teacher = {
  firstName: 'Jean-Paul',
  fullTimeEmployee: false,
  lastName: 'Kyokya',
  location: 'Kinshasa',
  course: 'football',
};
console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: 25
}

const teacher1: Teacher = {
  firstName: 'Jean-Paul',
  fullTimeEmployee: false,
  lastName: 'Kyokya',
  location: 'Kinshasa',
  course: 'football',
  numberOfReports: 17,
};
console.log(teacher1);

interface printTeacher(firstName: string, lastName: string): string {
  return (`${firstName[]}. ${lastName}`);
}

console.log(printTeacher('Jean-Paul', 'Kyokya'));