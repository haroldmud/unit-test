class Calculation {
    constructor(_solution) {
      this.solution;
    }
  
    sum(a, b) {
      if (a && b) {
        this.solution = a + b;
      } else {
        this.error();
      }
      return this.solution;
    }
  
    subtract(a, b) {
      if (a && b) {
        if (a > b) {
          this.solution = a - b;
        } else {
          this.solution = b - a;
        }
      } else {
        this.error();
      }
      return this.solution;
    }
  
    divide(a, b) {
      if (a && b) {
        if (a > b) {
          this.solution = a / b;
        } else {
          this.solution = a / b;
        }
      } else {
        this.error();
      }
      return this.solution;
    }
  
    multiply(a, b) {
      if (a && b) {
        this.solution = a * b ;
      } else {
        this.error();
      }
      return this.solution;
    }
  
    error() {
      const error = 'There is an error that occured';
      this.solution = error;
    }
  }
  
  module.exports = Calculation;