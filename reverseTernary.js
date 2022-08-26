// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

/** 문자열의 순서를 바꾸는 함수 */
const reverseStr = (str) => {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

function solution(n) {
  let answer = 0;

  // n을 3진법으로
  let n_3 = n.toString(3);

  // 앞뒤로 뒤집기
  let n_3_reversed = reverseStr(n_3);

  // 다시 10진법으로 변환
  answer = parseInt(n_3_reversed, 3);

  return answer;
}

solution(45);
solution(125);
