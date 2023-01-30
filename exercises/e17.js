// import { data } from "../data/data";

const persons = [
  { name: "jon", age: 29 },
  { name: "peter", age: 30 },
  { name: "andrey", age: 22 },
];

export function minBy(array, cb) {

  if (!array.length) return undefined

  let minValueObj = array[0];
  let minValue = cb(array[0]);
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) < minValue) {
      minValue = cb(array[i])
      minValueObj = array[i]
    }

  }
  return minValueObj;
}

minBy(persons, person => {
  return person.age
})



export function maxBy(array, cb) {

  if (!array.length) return undefined

  let maxValueObj = array[0];
  let maxValue = cb(array[0]);
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) > maxValue) {
      maxValue = cb(array[i])
      maxValueObj = array[i]
    }

  }
  return maxValueObj;
}

maxBy(persons, person => {
  return person.age
})