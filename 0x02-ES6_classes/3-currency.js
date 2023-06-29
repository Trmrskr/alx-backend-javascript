export default class Currency {
  /**
   * constructor for the class Currency.
   * Note that the constructor used the setters to set the _code and _name attributes.
   */
  constructor(code, name) {
    this.code = code; /* Setter method */
    this.name = name; /* Setter method */
  }

  /**
   * sets the attribute this._code
   * @param {string} value: the value to be set with
   */

  set code(value) {
    this._code = value;
  }

  /**
   * returns the this._code attribute
   */

  get code() {
    return this._code;
  }

  /**
   * sets the attribute this._name
   * @param {string} value: the value to be set with
   */

  set name(value) {
    this._name = value;
  }

  /**
   * Returns the this._name attribute
   */

  get name() {
    return this._name;
  }

  /**
   * it calls the seter methods name and code.
   * returns a string.
   */

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
