// box dimension inputs
const colorBox = document.querySelector("#color");
const borderRadius = document.querySelector("#border-radius");
const height = document.querySelector("#height");
const width = document.querySelector("#width");
//shadow Properties:
const horizontal = document.querySelector("#horizontal");
const vertical = document.querySelector("#vertical");
const blur = document.querySelector("#blur");
const spread = document.querySelector("#spread");
const shadowColor = document.querySelector("#shadow-color");
//seleccionamos los inputs que modifican la sombra
const inputsShadow = document.querySelectorAll(".input-shadow");
console.log(inputsShadow);
//square:
const square = document.querySelector(".square");
// output:
const output = document.querySelector(".output");

width.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.width = `${value}px`;
});

height.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.height = `${value}px`;
});

borderRadius.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.borderRadius = `${value}px`
});

colorBox.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.backgroundColor = value;
});

// function que recibe 5 valores y retorna 1:
// let inputs = ["horizontal", "vertical", "blur", "spread", "colorBox"]
// function inputs (v1, v2, v3, v4, v5) {
// }
inputsShadow.forEach((input) =>
  input.addEventListener("input", generateShadow)
);

function generateShadow() {
  const horizontalValue = horizontal.value;
  const verticalValue = vertical.value;
  const blurValue = blur.value;
  const spreadValue = spread.value;
  const colorValue = shadowColor.value;

  square.style.boxShadow = `${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  output.innerHTML = `<p><strong>box-shadow: ${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${colorValue}</strong></p>`;
};

