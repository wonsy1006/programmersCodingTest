function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(answer);
  const newAnswer = [...set];

  return newAnswer.sort((a, b) => a - b);
}
