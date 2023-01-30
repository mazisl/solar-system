import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let maxCount = 0
  let mostFreqYear
  for (let i = 0; i < data.asteroids.length; i++) {
    let count = 0
    for (let j = 0; j < data.asteroids.length; j++) {
      if (data.asteroids[i].discoveryYear == data.asteroids[j].discoveryYear) {
        count++
      }
    }

    if (count > maxCount) {
      maxCount = count
      mostFreqYear = data.asteroids[i].discoveryYear
    }

  }

  return mostFreqYear;
}

getGreatestDiscoveryYear(data)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
