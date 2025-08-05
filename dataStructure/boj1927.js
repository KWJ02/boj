// 문제 : 최소 힙
// ;;;

class MinHeap {
	constructor() {
		this.heap = [];
	}

	insert(val) {
		this.heap.push(val);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.heap.length - 1;
		const element = this.heap[idx];

		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.heap[parentIdx];

			if (element >= parent) break;
			this.heap[idx] = parent;
			this.heap[parentIdx] = element;
			idx = parentIdx;
		}
	}

	remove() {
		const min = this.heap[0];
		const end = this.heap.pop();

		if (this.heap.length > 0) {
			this.heap[0] = end;
			this.sinkDown();
		}

		return min ?? 0;
	}

	sinkDown() {
		let idx = 0;
		const length = this.heap.length;
		const element = this.heap[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.heap[leftChildIdx];
				if (leftChild < element) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.heap[rightChildIdx];
				if (
					(swap === null && rightChild < element) ||
					(swap !== null && rightChild < leftChild)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.heap[idx] = this.heap[swap];
			this.heap[swap] = element;
			idx = swap;
		}
	}
}

const solution = (nums) => {
	const heap = new MinHeap();
	const result = [];

	for (let n of nums) {
		if (n === 0) {
			result.push(heap.remove());
		} else {
			heap.insert(n);
		}
	}

	console.log(result.join('\n'));
};

solution([0, 12345678, 1, 2, 0, 0, 0, 0, 32]);
