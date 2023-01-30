import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  let astDisc = data.asteroids
  .filter(asteroid => {
    if (asteroid.discoveryYear > year) {
      return asteroid.name
    }
  })
  .map(asteroid => {
    return asteroid.name
  })
  return astDisc
}

getAsteroidsDiscoveredAfterYear(data, 1800)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
