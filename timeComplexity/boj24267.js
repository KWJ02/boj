// 문제 : 알고리즘 수업 - 알고리즘의 수행 시간 6
// MenOfPassion 알고리즘의 입력의 크기 n에 따른 출력

/**
 * 
    MenOfPassion(A[], n) {
        sum <- 0;
        for i <- 1 to n - 2
            for j <- i + 1 to n - 1
                for k <- j + 1 to n
                    sum <- sum + A[i] × A[j] × A[k]; # 코드1
        return sum;
    };

    sum을 리턴하기 위해 i를 1부터 n까지 n-2번 반복수행할 때마다 j도 1부터 n-1까지 반복수행, j에 맞춰 k도 1부터 n까지 반복수행.
    입력의 크기에 따라 입력의 크기의 3번 반복 수행하므로 시간복잡도는 O(n^3) -> 차수는 3
 */

const solution = (n) => {
	// BigInt 타입을 String 타입으로 바꾸면 BigInt 뒤에 붙어있던 n은 사라짐.
	console.log((((n - 2n) * (n - 1n) * n) / 6n).toString());
	console.log(3);
};

solution(BigInt(7));
