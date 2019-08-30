// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const boulevards = [
  "s of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles",
  "Wall of Philip  Augustus",
  "City gates of Paris",
  "Haussmanns renovation of Paris",
  "of the Marshals",
  "Auguste-Blanqui",
  "Barbès",
  "Beaumarchais",
  "de l'Amiral-Bruix",
  " Mortier",
  "Poniatowski",
  "des Capucines",
  "de la Chapelle",
  "de Clichy",
  "du Crime",
  "du Général-d'Armée-Jean-Simon",
  "Haussmann",
  "de l'Hôpital",
  "des Italiens",
  "Lefebvre",
  "de la Madeleine",
  "de Magenta",
  "Montmartre",
  "du Montparnasse",
  "Raspail",
  "Richard-Lenoi",
  "de Rochechouart",
  "Saint-Germain",
  "Saint-Michel",
  "de Sébastopol",
  "de Strasbourg",
  "du Temple",
  "Voltaire",
  "de la Zone"
];
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(
  "Task 1: ",
  inventors.filter(inv => inv.year >= 1500 && inv.year <= 1600)
);
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log("Task 2: ", inventors.map(inv => inv.first + " " + inv.last));
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("Task 3: ", inventors.sort((a, b) => b.year - a.year));
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log(
  "Task 4: ",
  inventors.reduce((acc, cur) => acc + (cur.passed - cur.year), 0)
);
// 5. Sort the inventors by years lived
console.log(
  "Task 5: ",
  inventors.sort((a, b) => b.passed - b.year - (a.passed - a.year))
);
// 6. create a list of s in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:s_in_Paris
console.log("Task 6: ", boulevards.filter(el => el.includes("de")));
// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(
  "Task 7: ",
  people.sort((lastOnce, nextOne) => {
    const [lastA, firstA] = lastOnce.split(", ");
    const [lastB, firstB] = nextOne.split(", ");
    return lastA > lastB ? 1 : -1;
  })
);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];
console.log(
  "Task 8: ",
  data.reduce((acc, el) => {
    if (!acc[el]) {
      acc[el] = 0;
    }

    acc[el] += 1;

    return acc;
  }, {})
);
