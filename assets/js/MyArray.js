class MyArray {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }

  pop() {
    if (this.length === 0) return;

    const lastValue = this[this.length - 1];
    delete this[--this.length];
    return lastValue;
  }

  unshift() {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return (this.length += arguments.length);
  }

  shift() {
    if (this.length === 0) return;
    const firstElem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.length];
    return firstElem;
  }

  concat() {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (MyArray.isMyArray(arguments[i]) || Array.isArray(arguments[i])) {
        for (let j = 0; j < arguments[i].length; j++) {
          newArray.push(arguments[i][j]);
        }
      } else {
        newArray.push(arguments[i]);
      }
    }
    return newArray;
  }

  reverse() {
    const maxIndex = this.length - 1;
    const middle = maxIndex / 2;
    for (let i = 0; i < middle; i++) {
      const temp = this[i];
      this[i] = this[maxIndex - i];
      this[maxIndex - i] = temp;
    }
    return this;
  }

  /**
   *
   * @param {function} callback
   */
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  map(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }

  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  filter(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }

  static isMyArray(arr) {
    return arr instanceof MyArray;
  }
}

//console.dir(MyArray);
