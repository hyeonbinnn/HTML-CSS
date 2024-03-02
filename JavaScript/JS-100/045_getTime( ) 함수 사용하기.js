// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환
// 이를 이용하여 현재 연도(2019)를 출력하시오.

// Date 객체를 통해 현재 시간을 나타내는 변수 d 생성
const d = new Date();

// getTime() 메서드를 사용하여 현재 날짜와 시간을 나타내는 숫자를 얻고 변수 year에 저장
let year = d.getTime();

// year을 1000으로 나눠 초 단위로 변환한 후, 1년의 초를 나타내는 값으로 나눔
// 소수점 버리고 1970년을 기준으로 현재 연도 구하고 업데이트
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;

console.log(year);

// 3600: 1시간을 초로 나타냄
// 1시간은 60분이고, 각 분은 60초 = 3600
// 24: 하루를 시간 단위로 나타냄
// 365: 1년을 일 단위로 나타냄
// 1000:  밀리초 단위로 변환하기 위한 값
// 1초는 1000밀리초
