// 문제 : 골드바흐의 추측

const solution = (odds) => {
	const result = [];
	const set = new Set();
	const isPrime = (num) => {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		set.add(num);
		return true;
	};

	for (let i of odds) {
		const pos = [];
		for (let j = 2; j <= i / 2; j++) {
			if (set.has(j) && set.has(i - j)) {
				pos.push([j, i - j]);
			} else {
				if (isPrime(j) && isPrime(i - j)) {
					pos.push([j, i - j]);
				}
			}
		}
		result.push(pos[pos.length - 1].join(' '));
	}

	console.log(result.join('\n'));
};

solution([8, 10, 16]);
