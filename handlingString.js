const solution = (s) => {
  let answer;

  if (s.length === 4 || s.length === 6) {
    console.log(!isNaN(s));

    for (let i = 0; i < s.length; i++) {
      let current;
      if (!isNaN(s[i])) {
        current += s[i];
      }
    }

    if (typeof current === "number") {
      answer = true;
    }
  } else {
    answer = false;
  }

  return answer;
};

console.log(solution("s12345"));
