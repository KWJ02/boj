// 문제 : 듣보잡
// 듣도 못한 사람 + 보도 못한 사람 = 듣보잡, 둘 중 하나라도 포함된다면 !듣보잡

const solution = (nListened, nSeen) => {
	const set = new Set(nListened);

	const nLnS = [];
	for (n of nSeen) {
		if (set.has(n)) nLnS.push(n);
	}

	nLnS.sort();
	console.log(nLnS.length);
	console.log(nLnS.join('\n'));
};

solution(['ohhenrie', 'charlie', 'baesangwook'], ['obama', 'baesangwook', 'ohhenrie', 'clinton']);
