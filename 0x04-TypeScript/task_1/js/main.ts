interface Teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: string]: any
}

const teacher3: Teacher = {
  firstName: 'Jean-Paul',
  fullTimeEmployee: false,
  lastName: 'Kyokya',
  location: 'Kinshasa',
  course: 'football',
};

console.log(teacher3);
