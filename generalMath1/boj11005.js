// 문제 : 진법 변환2

const solution = (str) => {
	let [form, deg] = str.split(' ');

	let result = Number(form).toString(Number(deg));

	console.log(result.toUpperCase());
};

solution('60466175 36');
