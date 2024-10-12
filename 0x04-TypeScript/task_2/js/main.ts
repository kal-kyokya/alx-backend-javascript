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

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    if (salary < 500) return (new Teacher());
    return (new Director());
  }

  if (parseInt(salary) < 500) return (new Teacher());
  return (new Director());
}

console.log(createEmployee(200));
//Teacher
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
//Director

interface isDirectorInterface {
  (employee: any): boolean;
}

function isDirector(employee: any): boolean {
  if (employee instanceof Director) return (true);
  return false;
}

interface executeWorkInterface {
  (employee: Director | Teacher): string;
}

function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Director) return employee.workDirectorTasks();
  if (employee instanceof Teacher) return employee.workTeacherTasks();
}

console.log(isDirector(createEmployee(500)));
//true
console.log(executeWork(createEmployee(200)));
//Getting to work
console.log(executeWork(createEmployee(1000)));
//Getting to director tasks

type Subjects = ('Math', 'History');

function teachClass(todayClass): (Math | History) {
  if (todayClass === 'Math') return 'Teaching Math';
  if (todayClass === 'History') return 'Teaching History';
}

console.log(teachClass('Math'));
//Teaching Math
console.log(teachClass('History'));
//Teaching History