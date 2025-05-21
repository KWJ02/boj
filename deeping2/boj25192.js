// 문제 : 인사성 밝은 곰돌이
// ENTER 이후 올라오는 사용자의 첫 기록은 이모티콘임을 가정할때, 총 사용된 이모티콘의 개수 출력
// ENTER 이후 동일한 사용자가 여러번 말했을 때, 이모티콘은 한번임.
// set 응용 -> enter뜰때마다 set은 claer

const solution = (logs) => {
	const set = new Set();
	let count = 0;
	for (let l of logs) {
		if (l === 'ENTER') {
			count += set.size;
			set.clear();
		} else {
			set.add(l);
		}
	}
	console.log(count + set.size);
};

solution(['pjshwa', 'chansol', 'chogahui05', 'lms0806', 'pichulia', 'r4pidstart', 'swoon', 'tony9402']);
solution(['pjshwa', 'chansol', 'chogahui05', 'ENTER', 'pjshwa', 'chansol']);
