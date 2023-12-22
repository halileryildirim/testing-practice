function analyzeArray(arr) {
  function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) min = arr[i];
    }
    return min;
  }
  function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) max = arr[i];
    }
    return max;
  }
  function length(arr) {
    return arr.length;
  }

  const result = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  };

  return result;
}

export default analyzeArray;
