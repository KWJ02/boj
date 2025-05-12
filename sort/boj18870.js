// 문제 : 좌표 압축
/**
    수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

    Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

    직선 상에 존재하는 좌표 [5,1,2,3,4]를 찍었을 때,
    5는 본인보다 작은 좌표가 4개,
    4는 3개,
    3은 2개,
    2는 1개,
    1은 0개이므로 [4,0,1,2,3]을 출력해야함
 */

// sort와 for문에 의해 반복연산이 많아짐
/** */
const solution = (coors) => {
	const set = new Set(coors);
	const coor = [...set].sort((a, b) => a - b);
	const map = new Map();

	for (let i = 0; i < coor.length; i++) {
		map.set(coor[i], i);
	}

	const result = [];
	for (let i = 0; i < coors.length; i++) {
		result[i] = map.get(coors[i]);
	}

	console.log(result);
};

solution([2, 4, -10, 4, -9]);
solution(['1000', '999', '1000', '999', '1000', '999']);

// 이분 탐색으로 시간 단축 가능
// solution : 3140, 4064ms -> solution2 : 1516ms
const coors = [2, 4, -10, 4, -9];
const solution2 = (target) => {
	const sort = [...new Set(coors)].sort((a, b) => a - b);
	let low = 0;
	let high = sort.length - 1;

	while (true) {
		let mid = Math.floor((low + high) / 2);

		if (sort[mid] === target) {
			return mid;
		}

		if (sort[mid] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
};

const result = [];
for (let i = 0; i < coors.length; i++) {
	result.push(solution2(coors[i]));
}
console.log(result.join(' '));
