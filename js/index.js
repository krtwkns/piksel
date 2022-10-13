const UNIT = ["PX", "REM", "EM"];
const CONVERT_FROM_EL = document.querySelector(".convert-from-input");

CONVERT_FROM_EL.addEventListener("input", function (e) {
  const selectedConvertFrom = document.querySelector(".convert-from").innerHTML;
  const selectedConvertTo = document.querySelector(".convert-to").innerText;
  const baseSize = document.querySelector(".base-input").value;
  if (
    UNIT.includes(selectedConvertFrom) &&
    UNIT.includes(selectedConvertTo) &&
    e.target.value != ""
  ) {
    let res = calculate(
      selectedConvertFrom,
      selectedConvertTo,
      e.target.value,
      baseSize
    );
    document.querySelector(".result-number").innerHTML = res;
  }
});

function convertFrom(selectedConvertFrom) {
  document.querySelector(".convert-from").innerText = selectedConvertFrom;
  const selectedConvertTo = document.querySelector(".convert-to").innerText;
  const convertFromEl = document.querySelector(".convert-from-input");
  const convertFromVal = Number(convertFromEl.value);
  const baseSize = document.querySelector(".base-input").value;
  if (convertFromVal && UNIT.includes(selectedConvertTo)) {
    let res = calculate(
      selectedConvertFrom,
      selectedConvertTo,
      convertFromVal,
      baseSize
    );
    document.querySelector(".result-number").innerHTML = res;
  }
}

function convertTo(selectedConvertTo) {
  document.querySelector(".convert-to").innerText = selectedConvertTo;
  const selectedConvertFrom = document.querySelector(".convert-from").innerHTML;
  const convertFromEl = document.querySelector(".convert-from-input");
  const convertFromVal = Number(convertFromEl.value);
  const baseSize = document.querySelector(".base-input").value;
  if (convertFromVal && UNIT.includes(selectedConvertFrom)) {
    let res = calculate(
      selectedConvertFrom,
      selectedConvertTo,
      convertFromVal,
      baseSize
    );
    document.querySelector(".result-number").innerHTML = res;
  }
}

function calculate(from, to, value, baseSize) {
  switch (from) {
    case "PX":
      return roundToTwo(calculatePXto(to, value, baseSize));
    case "EM":
      return roundToTwo(calculateEMto(to, value, baseSize));
    case "REM":
      return roundToTwo(calculateREMto(to, value, baseSize));
    default:
      return 0;
  }
}

function calculatePXto(to, value, baseSize) {
  switch (to) {
    case "PX":
      return value;
    case "EM":
      return value / baseSize;
    case "REM":
      return value / baseSize;
    default:
      return 0;
  }
}

function calculateEMto(to, value, baseSize) {
  switch (to) {
    case "EM":
      return value;
    case "PX":
      return value * baseSize;
    case "REM":
      return value;
    default:
      return 0;
  }
}

function calculateREMto(to, value, baseSize) {
  switch (to) {
    case "EM":
      return value;
    case "PX":
      return value * baseSize;
    case "REM":
      return value;
    default:
      return 0;
  }
}

function copyResult() {
  const resultValue = document.querySelector(".result-number").innerText;
  navigator.clipboard.writeText(resultValue);
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
