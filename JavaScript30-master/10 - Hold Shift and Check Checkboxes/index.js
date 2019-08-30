const checkboxCollection = document.querySelector(".inbox");
let lastChecked = null;
const handleCheckboxClick = e => {
  if (e.target.nodeName !== "INPUT") return;
  const inputs = Array.from(document.querySelectorAll("input"));
  lastChecked = e.target;
  let inBetween = false;
  e.target.checked ? false : true;
  if (e.shiftKey) {
    inputs.forEach(el => {
      if (el.checked || el === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        el.checked = !el.checked;
      }
    });
  }
};

checkboxCollection.addEventListener("click", handleCheckboxClick);

// const handleCheckboxClick = e => {
//   if (e.target.nodeName !== "INPUT") return;
//   const inputs = Array.from(document.querySelectorAll("input"));
//   e.target.checked === true ? false : true;
//   const handleShiftSelector = event => {
//     if (event.key !== "Shift") return;

//     const startIndex = inputs.indexOf(inputs.find(el => el.checked));
//     const lastIndex = inputs.lastIndexOf(
//       inputs.reverse().find(el => el.checked)
//     );

//     inputs.map(
//       (el, index) =>
//         (index =
//           startIndex || index < lastIndex
//             ? (el.checked = true)
//             : (el.checked = false))
//     );
//   };

//   document.addEventListener("keydown", handleShiftSelector);
// };

// checkboxCollection.addEventListener("click", handleCheckboxClick);
