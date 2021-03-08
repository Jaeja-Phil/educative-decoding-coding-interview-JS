/**
 * Everyone make mistakes, and it's very easy to spot a typo. It's anywhere and everywhere!
 * When user misspells "speed" as  "spede", how can you show them the correct title?
 */

/**
 * Condition:
 * - when you misspell, it should be an anagram (contain same alphabets, just in
 *   slightly differnt order)
 * - hence, the length is same for a typo title and correct title
 */

/**
 * Step 1. Create a frequency map
 *
 * For example, speed is the title you are looking for, the frequency map should
 * look like below:
 *
 * { s: 1, p: 1, e: 2, d: 1, ... (rest of the alphabets are 0) }
 *
 */

/**
 * Step 2. Use the map created as "key" to insert into a hash map
 *
 * This will lead all anagrams to the same key, and what we can do is have an array
 * that stores (use push) all the possible (or searched) anagrams!
 * For example, "speed" and "spede" will both create the same key, and thus
 * directed to the same value.
 *
 */

/**
 * Implementation
 *
 * @arguments
 * @strs = array of strings
 */

function groupTitles(strs) {
  const result = {};
  const alphabetsMap = {};
  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .forEach(letter => (alphabetsMap[letter] = 0));

  for (let title of strs) {
    const frequencyMap = { ...alphabetsMap };
    for (let letter of title) {
      frequencyMap[letter] = frequencyMap[letter] + 1;
    }
    const stringifiedMap = JSON.stringify(frequencyMap);
    if (stringifiedMap in result) {
      result[stringifiedMap].push(title);
    } else {
      result[stringifiedMap] = [title];
    }
  }

  return result;
}

const result = groupTitles(["speed", "spede", "duel", "dule", "deul", "cars"]);
const query = "spede";

for (let [_, anagrams] of Object.entries(result)) {
  if (anagrams.includes(query)) {
    console.log(anagrams); // ['speed', 'spede']
  }
}
