/**
 * Netflix offers content-fetching based on age of the users.
 *
 * In order to provide content based on age, they need to find the median age of users
 * as well as preferred content for users that fall into that category.
 *
 * Number of users in Netflix is growing, and they need to find a way to update median age of users
 * in real-time.
 */

/**
 * Step 1. Divide the age of users into 2 groups
 *
 * Median is the "middle" of the group in terms of the value.
 * For example, when the list of users's age looks like
 * - 10, 11, 12, 13, 16
 * The median is 12 because it is at the middle.
 *
 * Half of the people are younger (or equal), and the other half of people are older (or equal)
 * So, divide the list into 2 groups - small and large
 */

/**
 * Step 2. Max & min heap
 *
 * Since the value of interst (median) will be either the maximum value of small list
 * and minimum value of large list, we can implement heap structure to quickly retrieve
 * the desired value (median)
 */

/**
 * Implementation
 */

class MedianOfAges {
  constructor() {
    // going to use array for heap, but implementing heaps are all over the internet,
    // try googling "min/max heap javascript implementations"
    // min heap will look like this: [1, 2, 3, 4, 5]
    minHeap = [];
    // max heap will look like this: [5, 4, 3, 2, 1]
    maxHeap = [];
  }

  insertAge(num) {
    // if maxheap is empty OR the max value in max heap is greater than num
    // put the num into maxheap
    if (maxHeap.length === 0 || maxHeap[0] >= num) {
      maxHeap.push(num);
      maxHeap.sort((a, b) => b - a);
    } else {
      // else, put it in the min heap
      minHeap.push(num);
      minHeap.sort((a, b) => a - b);
    }
    const maxLen = maxHeap.length;
    const minLen = minHeap.length;
    // if maxheap has more items than minheap by 2 or more
    if (maxLen > minLen + 1) {
      // give it to minheap
      minHeap.push(maxHeap.shift());
    } else if (maxLen < minLen) {
      // if minheap has more item
      // give it to maxheap
      maxHeap.unshift(minHeap.shift());
    }
  }

  findMedian() {
    if (maxHeap.length === minHeap.length) {
      // even number of elements, take the average of the maxHeap's max and minHeap's min
      return (maxHeap[0] + minHeap[0]) / 2;
    }
    // maxheap will have one or more element than min heap (if not equal), so use the maxheap's max
    return maxHeap[0];
  }
}
