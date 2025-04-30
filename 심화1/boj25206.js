// 문제 : 너의 평점은
// 전공평점 (학점 X 과목평점) / 학점의 총합

// 과목평점
const gradeList = {
	'A+': 4.5,
	'A0': 4,
	'B+': 3.5,
	'B0': 3,
	'C+': 2.5,
	'C0': 2,
	'D+': 1.5,
	'D0': 1,
	'F': 0,
};

let total = 0;
let gradeSum = 0;

const solution = (str) => {
	const [_, score, grade] = str.split(' ');

	if (grade === 'P') return;

	total += Number(score) * gradeList[grade];
	gradeSum += Number(score);
};

const tc = `BruteForce 3.0 F
Greedy 1.0 F
DivideandConquer 2.0 F
DynamicProgramming 3.0 F
DepthFirstSearch 4.0 F
BreadthFirstSearch 3.0 F
ShortestPath 4.0 F
DisjointSet 2.0 F
MinimumSpanningTree 2.0 F
TopologicalSorting 1.0 F
LeastCommonAncestor 2.0 F
SegmentTree 4.0 F
EulerTourTechnique 3.0 F
StronglyConnectedComponent 2.0 F
BipartiteMatching 2.0 F
MaximumFlowProblem 3.0 F
SuffixArray 1.0 F
HeavyLightDecomposition 4.0 F
CentroidDecomposition 3.0 F
SplayTree 1.0 F`;

const tcs = tc.split('\n');

for (let i = 0; i < tcs.length; i++) {
	solution(tcs[i]);
}

console.log(total / gradeSum);
