// 문제 : 붙임성 좋은 총총이
// 총총이를 만난 사람 및 그 사람과 만난 모든 사람의 총 수를 출력

const solution = (meets) => {
	const set = new Set();
	let idx = 0;

	while (set.size < 1) {
		const people = meets[idx++].split(' ');
		if (people.includes('ChongChong')) people.forEach((v) => set.add(v));
	}

	for (let i = idx; i < meets.length; i++) {
		const people = meets[i].split(' ');
		if (set.has(people[0]) || set.has(people[1])) {
			people.forEach((v) => set.add(v));
		}
	}

	console.log(set.size);
};

solution([
	'bnb2011 chansol',
	'chansol chogahui05',
	'chogahui05 jthis',
	'jthis ChongChong',
	'jthis jyheo98',
	'jyheo98 lms0806',
	'lms0806 pichulia',
	'pichulia pjshwa',
	'pjshwa r4pidstart',
	'r4pidstart swoon',
	'swoon tony9402',
	'tony9402 bnb2011',
]);
