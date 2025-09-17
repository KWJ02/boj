// 문제 : 최대공약수와 최소공배수

const gcd = (a, b) => {
	while (b > 0) {
		const r = a % b;
		a = b;
		b = r;
	}

	return a;
};

const lcm = (a, b, gcd) => {
	return (a / gcd) * (b / gcd);
};

const solution = (a, b) => {
	const gcd_num = gcd(a, b);
	console.log(gcd_num);
	console.log(gcd_num * lcm(a, b, gcd_num));
};

solution(24, 18);
