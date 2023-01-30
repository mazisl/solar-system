const data = {
  students: [
  { id: 1, name: 'Sarah', age: 35, grades: ['A', 'B', 'B', 'A', 'B'] },
  { id: 2, name: 'Julian', age: 28, grades: ['B', 'C', 'B', 'A', 'C'] },
  { id: 3, name: 'Monica', age: 20, grades: ['B', 'D', 'C', 'C', 'C'] },
  { id: 4, name: 'Alex', age: 29, grades: ['B', 'B', 'B', 'A', 'B'] },
  { id: 5, name: 'Christian', age: 36, grades: ['D', 'C', 'C', 'B', 'F'] }
  ],
  asteroids: [
    { name: '1 Ceres', discoveryYear: 1801, orbitalPeriod: 1681.63 },
    { name: '6 Hebe', discoveryYear: 1847, orbitalPeriod: 1380.373 },
    { name: '47171 Lempo', discoveryYear: 1999, orbitalPeriod: 91678 },
    { name: '762 Pulcova', discoveryYear: 1913, orbitalPeriod: 2049.475 }
  ]
};

// === 4. Return an array of student names of who doesn't have A grades
// getStudentNoA(arr) => ['Name', 'Name']

function getStudentNoA(data) {
  return data.students
    .filter(student => {
      return student.grades.includes('A') === false
    })
    .map(student => {
      return student.name
    })
}

console.log(getStudentNoA(data))


const data2 = [
  { id: 1, name: 'Sarah', age: 35, grades: [1, 3, 4, 2, 5] },
  { id: 2, name: 'Julian', age: 28, grades: [2, 6, 3, 1, 9] },
  { id: 3, name: 'Monica', age: 20, grades: [5, 2, 8, 3, 4] },
  { id: 4, name: 'Alex', age: 29, grades: [6, 1, 4, 9, 7] },
  { id: 5, name: 'Christian', age: 36, grades: [3, 5, 9, 8, 4] }
];

//return an array of total student scores for each student

function getScores(arr) {
  let newArr = [];
  for (let student of arr) {
    let sum = 0;
    for (let grade of student.grades) {
      sum += grade;
    }
    newArr.push(sum);
  }
  return newArr
}

console.log(getScores(data2))


const data3 = [
  { id: 1, name: 'Sarah', age: 35, grades: ['A', 'B', 'B', 'A', 'B'] },
  { id: 2, name: 'Julian', grades: ['B', 'C', 'B', 'A', 'C'] },
  { id: 3, name: 'Monica', age: 0, grades: ['B', 'D', 'C', 'C', 'C'] },
  { id: 4, name: 'Alex', age: 29 },
  {
    id: 5,
    name: 'Christian',
    age: 'Thirty three',
    grades: ['D', 'C', 'C', 'B', 'F'],
  }
];

// Return an array of students with real age values
// getRealAgeStudents(arr) => [number, number]

function getRealAgeStudents(data) {
  return data.filter(student => {
    if (typeof student.age === 'number' && student.age > 0) {
      return student
    }
  })
}

console.log(getRealAgeStudents(data3))