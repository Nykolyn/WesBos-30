// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?
const isOlder19 = arr =>
  arr.some(el => new Date().getFullYear() - el.year > 19);
console.log(isOlder19(people));

// Array.prototype.every() // is everyone 19 or older?
const areOlder19 = arr =>
  arr.every(el => new Date().getFullYear() - el.year > 19);
console.log(areOlder19(people));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findById = (arr, id) => arr.find(el => el.id === id);
console.log(findById(comments, 823423));

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteComment = (arr, id) => {
  const indexOfComment = arr.findIndex(el => el.id === id);
  const newArr = [
    ...arr.slice(0, indexOfComment),
    ...arr.slice(indexOfComment + 1)
  ];
  //   arr.splice(indexOfComment, 1);
  return newArr;
};

console.table(deleteComment(comments, 823423));
