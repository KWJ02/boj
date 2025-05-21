// 문제 : 풍선 터뜨리기
// 원형으로 이루어진 풍선이 1번부터 N번까지 있을 때,
// 1번 풍선을 먼저 터뜨리고 풍선 안에 있는 숫자만큼 이동해서 터뜨린 풍선들의 순서 출력 -> 요세푸스
// js로는 메모리 초과할 수 밖에 없는 문제 ㅅㅂ -> 파이썬으로 바꿈 ㅋㅋ

const solution = (per) => {
	const balloons = per.map((v, i) => [i + 1, v]);
	const el = [];
	let idx = 0;

	while (balloons.length > 0) {
		const [num, val] = balloons[idx];
		balloons.splice(idx, 1);
		el.push(num);

		if (val > 0) {
			idx += val - 1;
			idx %= balloons.length;
		} else {
			idx += val;
			if (idx < 0) {
				idx += balloons.length;
			} else {
				idx %= balloons.length;
			}
		}
	}

	console.log(el.join(' '));
};

solution([3, 2, 1, -3, -1]);
