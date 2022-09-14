function solution(n) {
  let answer = 0;

  // 자연수를 문자열의 배열로 destructuring
  let arr = [...n.toString()];

  // 배열 내 문자열을 자연수로 변환
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  // 배열 안의 자연수들을 내림차순으로 정렬
  arr.sort((a, b) => b - a);

  // 배열을 다시 하나의 자연수로 변환
  answer = Number(arr.join(""));

  console.log(answer);
  return answer;
}

solution(118372);
