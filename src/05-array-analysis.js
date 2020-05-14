function analyze(array) {
  const average = () => {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  };
  return {
    average: average(),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export default analyze;