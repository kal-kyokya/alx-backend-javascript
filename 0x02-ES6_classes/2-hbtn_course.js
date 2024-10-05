export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof length !== 'number') throw new TypeError('length must be a number');
    if (typeof students !== 'object') throw new TypeError('students must be a array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  set name(inputName) {
    if (typeof inputName !== 'string') throw new TypeError('name must be a string');
    this._name = inputName;
  }

  get length() { return this._length; }

  set length(inputLength) {
    if (typeof inputLength !== 'number') throw new TypeError('length must be a number');
    this._length = inputLength;
  }

  get students() { return this._students; }

  set students(inputStudents) {
    if (typeof inputStudents !== 'object') throw new TypeError('students must be an object');
    this._students = inputStudents;
  }
}
