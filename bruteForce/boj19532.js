// 문제 : 수학은 비대면강의입니다.
// 주어진 연립방정식의 계수(a,b,c,d,e,f)로 x,y 쌍 구하기
/*
    ax + by = c
    dx + ey = f
*/

// 2000x2000 = 4000000번, 브루트 포스 방식
// let x = null;
// let y = null;
// const solution = (nums) => {
// 	const [cox1, coy1, cor1, cox2, coy2, cor2] = nums.split(' ').map(Number);

// 	for (let i = -999; i <= 999; i++) {
// 		for (let j = -999; j <= 999; j++) {
// 			if (cox1 * i + coy1 * j === cor1 && cox2 * i + coy2 * j === cor2) {
// 				x = i;
// 				y = j;
// 				return;
// 			}
// 		}
// 	}
// };

// solution('2 5 8 3 -4 -11');
// console.log(x, y);

// O(1) 방식으로 수행 시간 개선
/**
    ax + by = c ... 1
    dx + ey = f ... 2

    aex + bey = ce ... 1 * e
    bdx + bey = bf ... 2 * f

    (ae-bd)x = ce - bf
    x = (ce-bf) / (ae-bd)

    x 소거식과 분모를 맞추기 위해 2번식을 1번식 위로 올림
    adx + aey = af ... 2 * a
    adx + bdy = cd ... 1 * d

    (ae- bd)y = (af-cd)
    y = (af-cd) / (ae-bd)

    처럼 유도 가능.
    아까 접근했던 방식은 하나의 식에만 공배수를 곱했던 탓에 틀렸던거
 */
const solution = (nums) => {
	const [a, b, c, d, e, f] = nums.split(' ').map(Number);
	const x = (c * e - b * f) / (a * e - b * d);
	const y = (a * f - c * d) / (a * e - b * d);

	// x와 y가 / 연산으로 1.0, 2.0처럼 나올수도 있기때문에
	// 템플릿 리터럴로 문자열로 바꿈으로써 .0을 제거한 후 제출
	// console.log(x,y)로 제출하면 틀림;
	console.log(`${x} ${y}`);
};

solution('1 3 -1 4 1 7');
