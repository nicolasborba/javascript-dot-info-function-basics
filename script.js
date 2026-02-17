function pow(x, n) {

  let result = 1;

  if (n < 1) {
    return "error, please use a positive number";
  } else if (!Number.isInteger(n)) {

    return "error, please use an integer";

  } else {

    result = x;

    for (let z = n; z > 1; z--) {

      result *= x;

    }

    return result;
  }



}

let x = prompt("x value?");
let n = prompt("n value?");

alert(pow(x, n));