// 문제 : 8진수 2진수
// 8진수 -> 2진수

const solution = (xd) => {
	let result = '';

	for (let i = 0; i < xd.length; i++) {
		const bin = Number(xd[i]).toString(2);

		if (i === 0) {
			result += bin;
		} else {
			result += bin.padStart(3, '0');
		}
	}

	console.log(result);
};

solution('314');

/**
 * 
    n진수 -> 10진수 변환
    parseInt(숫자를 문자열로 변환, n) <- n진수로 표현된 숫자문자열 타입을 10진수 number 타입으로 변환

    10진수 -> n진수 변환
    (number 타입 10진수).toString(n) <- 숫자 타입인 10진수를 n진수 문자열 타입으로 변환
 */
