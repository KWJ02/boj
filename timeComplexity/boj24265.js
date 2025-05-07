// 문제 : 알고리즘 수업 - 알고리즘의 수행 시간 4
// MenOfPassion 알고리즘의 입력의 크기 n에 따른 출력

/**
 * 
    MenOfPassion(A[], n) {
        sum <- 0;
        for i <- 1 to n - 1
            for j <- i + 1 to n
                sum <- sum + A[i] × A[j]; # 코드1
        return sum;
    };

    sum을 리턴하기 위해 i를 1부터 n까지 n번 반복수행할 때마다 j도 1부터 n까지 반복수행.
    입력의 크기에 따라 입력의 크기의 두 배만큼 반복 수행하므로 시간복잡도는 O(n^2) -> 차수는 2
 */

// 이렇게 하면 시행횟수를 구할 순 있지만, n이 500000이 되어버리면 시간 너무오래 걸림.
// const solution = (n) => {
// 	const MenOfPassion = (n) => {
// 		let count = 0;
// 		for (let i = 1; i <= n - 1; i++) {
// 			for (let j = i + 1; j <= n; j++) {
// 				count++;
// 			}
// 		}

// 		return count;
// 	};

// 	console.log(MenOfPassion(n));
// 	console.log(2);
// };

const solution = (n) => {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		count += n - i;
	}
	console.log(count);
};

/**
    for (let i = 1; i <= n; i++) {
		count += n - i;
    };

    1 + 2 + 3 + ... + n의 합은 n(n+1)/2임.

    n이 7일 때, 이 반복문은 결국
    6 + 5 + 4 + 3 + 2 + 1 + 0과 같음.
    공차가 1인 등차수열의 합 공식을 변형하여 n(n-1)/2과 같은거임.

    그래서 for문으로 반복시키는 O(n)보다

    count = n*(n-1) / 2로 O(1)로 시간을 단축시킬 수 있음.
 */

solution(7);
