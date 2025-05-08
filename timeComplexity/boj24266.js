// 문제 : 알고리즘 수업 - 알고리즘의 수행 시간 5
// MenOfPassion 알고리즘의 입력의 크기 n에 따른 출력

/**
 * 
    MenOfPassion(A[], n) {
        sum <- 0;
        for i <- 1 to n
            for j <- 1 to n
                for k <- 1 to n
                    sum <- sum + A[i] × A[j] × A[k]; # 코드1
        return sum;
    };

    sum을 리턴하기 위해 i를 1부터 n까지 n번 반복수행할 때마다 j도 1부터 n까지 반복수행, j에 맞춰 k도 1부터 n까지 반복수행.
    입력의 크기에 따라 입력의 크기의 3번 반복 수행하므로 시간복잡도는 O(n^3) -> 차수는 3
 */

/**
 * 자바스크립트의 Number타입은 16자리, 대략 9007조 까지의 정수를 계산할 수 있음.
 * 문제 n의 최대 범위값은 500000, 500000의 3제곱은 12500000000000000.
 * 9007000000000000 < 125000000000000000 이므로 일반 넘버타입으로는 정확하게 계산할 수 없으므로
 * BigInt 타입으로 정확하게 계산 후, String 타입으로 변환.
 * BigInt는 Number 타입과 다르게 끝에 n이 붙기 때문에 n도 제거해줘야 함.
 */
const solution = (n) => {
	console.log((n ** 3n).toString().replace('n', ''));
	console.log(3);
};

solution(BigInt(500000));
