import { data } from "../data/data";

// see e16.md

export function find(array, callback) {
  // Your code goes here...
  let newArr = []

  for (let elm of array) {
    if (callback(elm)) {
      newArr.push(elm)
    }
  }

  return newArr[0]
}

find(data.asteroids, callbackParam => {
  if (callbackParam.orbitalPeriod >= 100000) return true
})