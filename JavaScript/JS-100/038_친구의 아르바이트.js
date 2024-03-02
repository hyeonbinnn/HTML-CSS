// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

// 사용자로부터 입력을 받아 공백을 기준으로 문자열을 분할해 배열로 만듦
// 배열의 각 요소를 문자열에서 정수로 변환해 새로운 배열을 반환
const scores = prompt('점수입력')
  .split(' ')
  .map(function (n) {
    return parseInt(n, 10);
  });

// 배열을 오름차순으로 정렬
scores.sort((a, b) => {
  return a - b;
});

// 가장 큰 세 개의 서로 다른 값의 개수를 세는 변수 초기화
let count = 0;
// 가장 큰 세 개의 값을 저장하는 배열 선언
let arr = [];

// 배열이 길이가 3보다 작을 때까지 반복해서 가장 큰 세 개의 중복된 값을 찾는 중
// 오름차순으로 정렬되어있기에 배열의 가장 마지막 요소가 큰 값이 되며,
// 이를 pop() 메서드를 통해 배열의 마지막 요소를 제거 한 값을 n 변수에 넣음
//
while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  // 추출한 값의 개수를 카운트
  count += 1;
}

console.log(count);

// map() 메서드는 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아서 새로운 배열을 반환
// pop() 메서드는 배열의 마지막 요소를 제거
// includes() 메서드는 배열에 특정 요소가 포함되어 있는지 확인
