// 문제 : 진법 변환2

// const solution = (str) => {
// 	let [form, deg] = str.split(' ');

// 	let result = Number(form).toString(Number(deg));

// 	console.log(result.toUpperCase());
// };

const solution = (str) => {
	let [form, deg] = str.split(' ').map(Number);
	let result = [];

	while (form > 0) {
		const remain = form % deg;

		if (remain > 9) {
			result.push(String.fromCharCode(65 + remain - 10));
		} else {
			result.push(remain);
		}

		form = Math.floor(form / deg);
	}

	console.log(result.reverse().join(''));
};

solution('60466175 36');
