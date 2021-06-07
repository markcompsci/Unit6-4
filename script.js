const A = document.getElementById("a-value")
const B = document.getElementById("b-value")
const H = document.getElementById("h-value")
const CALC_BTN = document.getElementById("calc-btn")
const AREA_TXT = document.getElementById("area-txt")

// Adding an event listner on the Calculate button and using the user inputs for the forumla
// The "+" beside each number is to convert the strings to numbers
CALC_BTN.addEventListener("click", () => {
  let answer = +H.value * ( (+A.value + +B.value ) / 2)
  AREA_TXT.textContent = `Area: ${answer}`
})
