const solution = (word) => {
	const set = new Set();
	let prev = null;

	for (w of word) {
		if (prev !== w) {
			if (set.has(w)) return false;
			set.add(w);
		}
		prev = w;
	}

	return true;
};

let count = 0;
for (i = 0; i < 2; i++) {
	if (i === 0) {
		solution('aca') ? count++ : '';
	} else {
		solution('ba') ? count++ : '';
	}
}

console.log(count);
