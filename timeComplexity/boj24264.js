// 문제 : 알고리즘 수업 - 알고리즘의 수행 시간 3
// MenOfPassion 알고리즘의 입력의 크기 n에 따른 출력

/**
 * 
    MenOfPassion(A[], n) {
        sum <- 0;
        for i <- 1 to n
            for j <- 1 to n
                sum <- sum + A[i] × A[j]; # 코드1
        return sum;
    };

    sum을 리턴하기 위해 i를 1부터 n까지 n번 반복수행할 때마다 j도 1부터 n까지 반복수행.
    입력의 크기에 따라 입력의 크기의 두 배만큼 반복 수행하므로 시간복잡도는 O(n^2) -> 차수는 2
 */
const n = 7;
console.log(n * n);
console.log(2);
