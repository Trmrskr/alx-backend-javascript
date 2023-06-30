export default class HolbertonClass {
  constructor(size, locatien) {
    this.size = size;
    this.locatien = locatien;
  }

  set size(value) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  set locatien(value) {
    this._location = value;
  }

  get locatien() {
    return this._location;
  }

  /**
   * Using Symbol.toPrimitive to decide the output when
   * an object of this class is casted.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.size;
    if (hint === 'string') return this.locatien;
    return this.toString();
  }
}
