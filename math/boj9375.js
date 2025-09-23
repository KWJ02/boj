// 문제 : 패션왕 신해빈
// input 마지막에 0이 끼워져 있는경우,
// 마지막과 마지막 - 1의 요소가 뒤집히는 문제
const input = `4
3
hat headgear
sunglasses eyewear
hat headgear
4
coat outerwear
pants pants
pants pants
scarf accessory
2
glove accessories
scarf accessories
0
`
	.toString()
	.trim()
	.split('\n');
const TC = [];
let arr = [];

for (let i = 0; i < input.length; i++) {
	const line = input[i].trim();
	if (line === '0') {
		// 여기 ㅅㅂ;
		if (arr.length > 0) {
			TC.push(arr);
			arr = [];
		}
		TC.push([]);
		continue;
	}

	if (!isNaN(line)) {
		if (arr.length > 0) {
			TC.push(arr);
			arr = [];
		}
	} else {
		arr.push(line);
	}
}

if (arr.length > 0) TC.push(arr);

const solution = (clothes) => {
	const map = new Map();
	for (let c of clothes) {
		const item = c.split(' ')[1];
		map.set(item, (map.get(item) ?? 0) + 1);
	}

	const count = Array.from(map.values());

	const nod = count.reduce((a, c) => a * (c + 1), 1) - 1;
	console.log(nod);
};

for (let t of TC) {
	solution(t);
}
