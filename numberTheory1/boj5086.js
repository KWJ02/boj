// 문제 : 배수와 약수

const solution = (str) => {
	const [st, nd] = str.split(' ').map(Number);

	if (nd % st === 0) {
		return 'factor';
	}

	if (st % nd === 0) {
		return 'multiple';
	}

	return 'neither';
};

console.log(solution('17 5'));
