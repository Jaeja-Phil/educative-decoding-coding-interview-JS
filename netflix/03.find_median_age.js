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
