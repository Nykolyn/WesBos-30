const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector("input");
const list = document.querySelector(".suggestions");

const cities = [];
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

const findMathes = (arr, query) =>
  arr.filter(el => {
    const regex = new RegExp(query, "gi");
    return el.city.match(regex) || el.state.match(regex);
  });

const dispayMatches = ({ target: { value } }) => {
  const citiesMathed = findMathes(cities, value);

  if (value === "")
    return (list.innerHTML = "<li>Filter for a city</li><li>or a state</li>");
  if (citiesMathed.length === 0)
    return (list.innerHTML = "<li>no cities found D:</li>");

  const html = citiesMathed
    .map(el => {
      const regex = new RegExp(value, "gi");
      const cityName = el.city.replace(
        regex,
        `<span class="hl">${value}</span>`
      );
      return `<li>
      <span class="name">${cityName}, ${el.state}</span>
      <span class="population">${new Intl.NumberFormat().format(
        el.population
      )}</span>
      </li>`;
    })
    .join("");

  list.innerHTML = html;
};

input.addEventListener("input", dispayMatches);

// --- my code
// const includesCityOrState = (cat, query) =>
//   cat
//     .trim()
//     .toLowerCase()
//     .includes(query.trim().toLowerCase());
// // ---
// const fetchCities = query =>
//   fetch(endpoint)
//     .then(response => (response.ok ? response.json() : null))
//     .then(data =>
//       data.filter(
//         el =>
//           includesCityOrState(el.city, query) ||
//           includesCityOrState(el.state, query)
//       )
//     );
// // ---
// const drawCities = arr => {
//   if (arr.length === 0) {
//     return (list.innerHTML = "<li>no cities found D:</li>");
//   }

//   const cities = arr.reduce(
//     (acc, el) => acc + (list.innerHTML = `<li>${el.city}</li>`),
//     ""
//   );

//   return (list.innerHTML = cities);
// };
// // ---
// const findCity = ({ target: { value } }) => {
//   if (value === "")
//     return (list.innerHTML = "<li>Filter for a city</li><li>or a state</li>");
//   fetchCities(value).then(data => drawCities(data));
// };
// // ---
// input.addEventListener("input", findCity);
