// 문제 : 2007년

const solution = (mon, day) => {
	const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const date = new Date(`2007-${mon.padStart(2, '0')}-${day.padStart(2, '0')}`);
	console.log(dayArr[date.getDay()]);
};

solution('1', '1');
solution('3', '14');
solution('9', '2');
solution('12', '25');
