/**
 * Netflix is world-wide.
 *
 * People from various regions watch netflix, and all regions have top rate movies (rankings).
 * Search results for each country are in separate lists.
 *
 */

/**
 * Condition:
 * - each memeber of regions' top rated movies are given a rank
 *   - 1 being the most popular
 *   - bigger number means it's less popular
 * - titles of movies are represented by the provided IDs
 *   - ex) lion king = 11
 *   - ex) Tene = 1
 *   - ex) Frozen = 57
 */

/**
 * Step 1. Traversing the lists
 *
 * This question is using linked list, and has a weird(?) traversal method.
 * It has a null at the end of the list.
 * Have the first list as a result (base template) and combine it with the other lists
 */

/**
 * Step 2. Have a prev pointer that points to a dummy node
 *
 * When combining the lists, maintain prev pointer which will later be used to connect the
 * list when traversing is done (reached the end, finds null!)
 */

/**
 * Step 3. Connect non-null list to merged one
 *
 * prev pointer connects with the main (base template) list
 */

/**
 * Implementation
 */

function mergeRatingLists(head1, head2) {
  // must provide 2 lists to merge
  if (!head1) return head2;
  if (!head2) return head1;

  // to set whichever's head as a base template
  let mergedHead = null;
  //
  if (head1.data <= head2.data) {
    // if head1's ranking is greater than head2 (lower number)
    // head1 becomes the merge head and set the pointer on head1 to next node
    mergedHead = head1;
    head1 = head1.next;
  } else {
    // else, head2 becomes the merge head
    mergedHead = head2;
    head2 = head2.next;
  }
  // this is the part for maintaining prev pointer
  let mergedTail = mergedHead;

  while (head1 && head2) {
    // while both lists are NOT at the end
    let temp = null;
    // store the higher rank (smaller rank value) to temp and
    // set it to the next node
    if (head1.data <= head2.data) {
      temp = head1;
      head1 = head1.next;
    } else {
      temp = head2;
      head2 = head2.next;
    }
    // now, attach the node to the prev pointer and set the current node
    // as the attached node
    mergedTail.next = temp;
    mergedTail = temp;
    // and repeat until either one of head1 or head2 is at the end
  }
  // time to clean up the leftovers
  if (head1) {
    mergedTail.next = head1;
  } else if (head2) {
    mergedTail.next = head2;
  }
  // return mergedHead as this still points to the head of the merged list
  // mergedTail is pointing to the tail and it cannot backtrack
  return mergedHead;
}
