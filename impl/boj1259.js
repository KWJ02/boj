// 문제 : 펠린드롬 수

const solution = (num) => {
	let st = 0;
	let en = num.length - 1;

	for (let i = 0; i < num.length / 2; i++) {
		if (num[st++] !== num[en--]) {
			console.log('no');
			return 0;
		}
	}

	console.log('yes');
};

solution('121');
solution('1231');
solution('12421');
