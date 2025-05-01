// 문제 : 진법 변환

// const solution = (str) => {
// 	let sum = 0;
// 	let [form, deg] = str.split(' ');

// 	if (isNaN(Number(deg))) {
// 		deg = deg.charCodeAt() - 65 + 10;
// 	} else {
// 		deg = Number(deg);
// 	}

// 	let rev = [...form].reverse();
// 	for (let i = 0; i < rev.length; i++) {
// 		if (isNaN(Number(rev[i]))) {
// 			sum += (rev[i].charCodeAt() - 65 + 10) * Math.pow(deg, i);
// 		} else {
// 			sum += Number(rev[i]) * Math.pow(deg, i);
// 		}
// 	}

// 	return sum;
// };

// parseInt로 더 쉽게 개선 가능;;
const solution = (str) => {
	let [form, deg] = str.split(' ');

	if (isNaN(Number(deg))) {
		deg = deg.charCodeAt() - 65 + 10;
	} else {
		deg = Number(deg);
	}

	return parseInt(form, deg);
};

console.log(solution('ZZZZZ 36'));
