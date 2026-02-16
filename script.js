function pow(x, n) {

  let result = 0;

  if (n <= 0) {
    return result;
  } else {

    result = x;

    for (let z = n; z > 0; z--) {

      result *= x;

    }

    return result;
  }



}

