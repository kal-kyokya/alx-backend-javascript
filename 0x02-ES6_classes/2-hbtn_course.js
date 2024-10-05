export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof length !== 'number') throw new TypeError('length must be a number');
    if (typeof students !== 'object') throw new TypeError('students must be a array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {return this._name;}
  set name(input_name) {return this._name = input_name;}

  get length() {return this._length;}
  set length(input_length) {return this._length = input_length;}

  get students() {return this._students;}
  set students(input_students) {return this._students = input_students;}
}
