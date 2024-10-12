interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
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
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: 'Jean-Paul',
  fullTimeEmployee: false,
  lastName: 'Kyokya',
  location: 'Kinshasa',
  course: 'football',
  numberOfReports: 4,
};
console.log(teacher1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return (`${firstName[0]}. ${lastName}`);
}

console.log(printTeacher('Jean-Paul', 'Kyokya'));

interface ClassConstructor {
  new (firstName: string, lastName: string): aStudent;
}

interface aStudent {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements aStudent {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return ('Currently working');
  }

  displayName() {
    return (this._firstName);
  }
}