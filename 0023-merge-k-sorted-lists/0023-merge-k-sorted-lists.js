/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Helper function to define ListNode (for local testing/understanding)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Min-Heap implementation for ListNode objects
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper to get parent, left, and right child indices
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    // Helper to check if a node has children
    hasLeftChild(i) { return this.getLeftChildIndex(i) < this.heap.length; }
    hasRightChild(i) { return this.getRightChildIndex(i) < this.heap.length; }

    // Helper to get child nodes
    getLeftChild(i) { return this.heap[this.getLeftChildIndex(i)]; }
    getRightChild(i) { return this.heap[this.getRightChildIndex(i)]; }

    // Helper to swap elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.heapifyDown();
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 &&
               this.heap[this.getParentIndex(index)].val > this.heap[index].val) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) &&
                this.getRightChild(index).val < this.getLeftChild(index).val) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index].val < this.heap[smallerChildIndex].val) {
                break; // Heap property is satisfied
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}


var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) {
        return null;
    }

    const minHeap = new MinHeap();

    // Add the head of each list to the min-heap
    for (const list of lists) {
        if (list !== null) { // Only add non-empty lists' heads
            minHeap.insert(list);
        }
    }

    // Create a dummy head for the merged list
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    // While the heap is not empty, extract the minimum and append to the merged list
    while (!minHeap.isEmpty()) {
        const smallestNode = minHeap.extractMin();
        current.next = smallestNode;
        current = current.next;

        // If the extracted node has a next, add it to the heap
        if (smallestNode.next !== null) {
            minHeap.insert(smallestNode.next);
        }
    }

    return dummyHead.next;
};