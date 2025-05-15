// 문제 : 최소공배수

// 누적곱으로 최소공배수를 찾는 것 보다, 두 수의 곱을 최대 공약수로 나눈 것이 최소 공배수
// 두 수 a, b에 대한 최소공배수(LCM) = (a * b) / a, b에 대한 최대공약수(GCD) 로 구할 수 있음
const solution = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		const [num1, num2] = arr[i];
		let gcd = 0;
		const iter = Math.max(num1, num2);
		for (let j = 1; j <= iter; j++) {
			if (num1 % j === 0 && num2 % j === 0) gcd = j;
		}

		console.log((num1 * num2) / gcd);
	}
};

// for문을 1부터 최댓값까지 돌아가며 공약수를 찾아가는 방식은 너무 비효율적, 유클리드 호제법으로 구하면 훨씬 쉬움
const solution2 = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		const [num1, num2] = arr[i];

		let a = num1;
		let b = num2;

		while (b !== 0) {
			[a, b] = [b, a % b];
		}

		console.log((num1 * num2) / a);
	}
};

solution2([
	[1, 45000],
	[6, 10],
	[13, 17],
]);

// 곱셈 방식으로 최소공배수를 구하는건 너무 불안정함
// const badExample = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		const [num1, num2] = arr[i];
// 		let idx1 = 2;
// 		let idx2 = 2;

// 		if (num1 === num2) {
// 			console.log(num1);
// 			continue;
// 		}

// 		let n1 = num1;
// 		let n2 = num2;

// 		while (n1 !== n2) {
// 			if (n1 < n2) {
// 				n1 = num1 * ++idx1;
// 			} else {
// 				n2 = num2 * ++idx2;
// 			}
// 		}
// 		console.log(n1);
// 	}
// };
