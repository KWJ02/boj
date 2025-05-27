// 문제 : 칸토어 집합
// 자연수 n이 주어질때, 3^n개의 -로 이루어진 문자열이 있을 때, -가 하나씩 떨어져있을때까지 3등분 반복하여 결과 출력
/**
 * 재귀는 분할 기준이 되는 변수를 결정하는게 제일 중요
 * 길이를 1/3씩 나누고, 가운데 부분만 공백으로 전환
 * 재귀 트리의 리프 트리까지 모두 생각하려하지말고,
 * 현재 상황에서 1단계의 재귀 상황을 내가 의도한 대로 작동할 수 있을 정도로만 생각
 */

/** */
const arr = Array(3 ** 3).fill('-');

const cantor = (arr, start, length) => {
	if (length === 1) return;

	const third = length / 3; // 길이 3분할
	for (let i = start + third; i < start + 2 * third; i++) {
		// third ~ start + third * 2까지 공백처리
		arr[i] = ' ';
	}

	cantor(arr, start, third); // 좌측 분할
	cantor(arr, start + 2 * third, third); // 우측 분할
};

cantor(arr, 0, arr.length);
console.log(arr.join(''));
