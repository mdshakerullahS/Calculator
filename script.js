let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

let bracketCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let lastChar = display.value.slice(-1);

    if (display.value === "Syntax Error!") {
      display.value = "";
    }

    if (button.textContent === "AC") {
      display.value = "";
      bracketCount = 0;
    } else if (button.textContent === "DEL") {
      if (display.value === "Syntax Error!") {
        display.value = "";
      } else {
        display.value = display.value.slice(0, -1);
      }
      if (lastChar === "(") {
        bracketCount--;
      } else if (lastChar === ")") {
        bracketCount++;
      }
    } else if (button.textContent === "( )") {
      if (bracketCount === 0 || ["÷", "×", "+", "-", "("].includes(lastChar)) {
        display.value += "(";
        bracketCount++;
      } else if (bracketCount > 0) {
        display.value += ")";
        bracketCount--;
      }
    } else if (button.textContent === "=") {
      if (display.value === "") {
        display.value = "";
      } else {
        let expression = display.value
          .replaceAll("%", "/100")
          .replaceAll("÷", "/")
          .replaceAll("×", "*");
        try {
          display.value = eval(expression);
        } catch (err) {
          display.value = "Syntax Error!";
        }
      }
    } else {
      if (lastChar === "%") {
        display.value += "×" + button.textContent;
      } else {
        display.value += button.textContent;
      }
    }
  });
});
