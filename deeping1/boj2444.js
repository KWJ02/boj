// 5

//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *

const solution = (star) => {
	for (let i = 1; i <= star; i++) {
		let b = '';
		let s = '';

		for (let j = 0; j < star - i; j++) {
			b += ' ';
		}

		for (let k = 0; k <= (i - 1) * 2; k++) {
			s += '*';
		}

		console.log(b + s);
	}

	for (let i = star - 1; i > 0; i--) {
		let b = '';
		let s = '';

		for (let j = 0; j < star - i; j++) {
			b += ' ';
		}

		for (let k = 0; k <= (i - 1) * 2; k++) {
			s += '*';
		}

		console.log(b + s);
	}
};

solution(5);
