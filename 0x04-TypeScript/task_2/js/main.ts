interface Employee {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends Employee {
  workDirectorTasks(): string;
}

interface TeacherInterface extends Employee {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return ('Working from home');
  }

  getCoffeeBreak(): string {
    return ('Getting a coffee break');
  }

  workDirectorTasks(): string {
    return ('Getting to director tasks');
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return ('Cannot work from home');
  }

  getCoffeeBreak(): string {
    return ('Cannot have a break');
  }

  workTeacherTasks(): string {
    return ('Getting to work');
  }
}

interface createEmployeeInterface {
  (salary: number | string): Director | Teacher;
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number') {
    if (salary < 500) return (new Teacher());
    return (new Director());
  }

  if (parseInt(salary) < 500) return (new Teacher());
  return (new Director());
}

console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
