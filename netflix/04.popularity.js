/**
 * Netflix has popularity score.
 *
 * That's how they keep track of what movie users liked and disliked.
 * This popularity score is based on likes/dislikes and feedbacks and is
 * updated weekly. Feedbacks are "pushed" at the end of the list.
 *
 * Base on the list, find out if the movie is increasing or decreasing in popularity
 * If the rating is fluctuating, let it be known so
 */

/**
 * Implementations
 */

function popularityTracker(scores) {
  let increasingTrend = true,
    decreasingTrend = true;

  for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i] > scores[i + 1]) {
      increasingTrend = false;
    }
    if (scores[i] < scores[i + 1]) {
      decreasingTrend = false;
    }
  }

  if (increasingTrend && decreasingTrend)
    return "popualrity did not fluctuate at all";
  if (increasingTrend) return "increasing trend";
  if (decreasingTrend) return "decreasing trend";
  return "popularity is fluctuating";
}
