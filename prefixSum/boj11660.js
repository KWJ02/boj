// 문제 : 구간 합 구하기 5
// N x N 형태의 배열과 (x1, y1), (x2, y2)가 주어질때 좌표 사이의 합을 출력

/**
 * prefix[i][j]는 2차원 배열 arr을 (0,0) (i,j) 번째까지의 합임.
 * 
    [1, 2, 3, 4]
    [2, 3, 4, 5]
    [3, 4, 5, 6]
    [4, 5, 6, 7]

    에 대한 0,0 부터 n,n 까지의 누적합 prefix는
    [ 0, 0, 0, 0, 0 ]
    [ 0, 1, 3, 6, 10 ]
    [ 0, 3, 8, 15, 24 ]
    [ 0, 6, 15, 27, 42 ]
    [ 0, 10, 24, 42, 64 ] 임.

    여기서 x1,y1,x2,y2가 있을때,
    (x1,y1) ~ (x2,y2)의 구간 합을 구하는 것인데,
    
    (2,2) ~ (3,4) 까지의 구간합을 더하는 것은
	[8,15,24]
	[15,27,42] 의 구간에 있는 arr의 원소값을 모두 더한 값.
	arr의 원소값을 사용하지 않더라도 구간합 prefix 배열을 이용해서 구할 수 있음.


	[ 0, 1, 3, 6, 10 ]
    [ 0, 3, 8, 15, 24 ]
    [ 0, 6, 15, 27, 42 ]
	여기서
	[ 0, 1, 3, 6, 10 ] 를 빼고 
	
	[ 0, 1 ]
    [ 0, 3 ]
    [ 0, 6 ] 를 뺀 후에
	
	[ 1 ]이((x1 - 1,y1 - 1) 영역) 중복으로 빠졌으니 [ 1 ]을 더해주면 되는데,
	그게

	prefix[x2][y2] - prefix[x2][y1-1] - prefix[x1 - 1][y2] + prefix[x1 - 1][y1 - 1] 인거임
 */

/** */
const solution = (arr, coors) => {
	const n = arr.length;
	const prefix = Array.from({ length: arr.length + 1 }, () => Array.from({ length: arr.length + 1 }).fill(0));
	const diff = [];

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + arr[i - 1][j - 1];
		}
	}

	for (let i = 0; i < coors.length; i++) {
		const [x1, y1, x2, y2] = coors[i];
		diff.push(prefix[x2][y2] - prefix[x1 - 1][y2] - prefix[x2][y1 - 1] + prefix[x1 - 1][y1 - 1]);
	}

	console.log(diff.join('\n'));
};

solution(
	[
		[1, 2, 3, 4],
		[2, 3, 4, 5],
		[3, 4, 5, 6],
		[4, 5, 6, 7],
	],
	[
		[2, 2, 3, 4],
		[3, 4, 3, 4],
		[1, 1, 4, 4],
	]
);
