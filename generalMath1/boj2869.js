// 문제 : 달팽이는 올라가고 싶다.
// 낮에 A 미터 상승, 밤에 B 미터 하강, 정상 V 미터까지 등반하는데 걸리는 시간

// while문을 사용하기엔 변수의 값 범위가 1 ~ 1000000000이므로 O(n)보다 O(1)을 채택해야함.

const solution = (str) => {
	const [up, down, ob] = str.split(' ').map(Number);
	const day = up - down;
	let object = ob - up;

	console.log(Math.ceil(object / day) + 1);
};

solution('100 99 1000000000');
