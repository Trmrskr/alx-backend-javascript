/**
 * This module holds the class Holbertonclass, a constructor
 * and setter and getter method of the class
 */

export default class HolbertonCourse {
  /**
   * Create a new class HolbertonCourse
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - the length of the course.
   * @param {String[]} students - An array of strings.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Returns the name of the course
   */

  get name() {
    return this._name;
  }

  /**
   * Set the name of the course
   */

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  /**
   * Get the length of the course
   */

  get length() {
    return this._length;
  }

  /**
   * Set the length of the course
   */

  set length(value) {
    if (typeof value !== 'number') throw new TypeError('Length must be a number');
    this._length = value;
  }

  /**
   * Return name of students
   */

  get students() {
    return this._students;
  }

  /**
   * Set the students
   */

  set students(value) {
    if (!(value instanceof Array)) throw new TypeError('Students must be an array of strings');
    if (!value.every((student) => typeof student === 'string')) throw new TypeError('Students must be an array of strings');
    this._students = value;
  }
}
