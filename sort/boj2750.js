// 문제 : 수 정렬하기
// 오름차순으로 정렬하여 \n로 구분하여 원소 출력

const solution = (arr) => {
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

solution([5, 2, 3, 4, 1]);

// 한줄 코딩 .join 생각을 못했네
// const solution2 = (arr) => {
// 	return arr.sort((a, b) => a - b).join('\n');
// };

// console.log(solution2([5, 4, 3, 2, 1]));
