const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
document.getElementById('last-modified').textContent = lastModified.toLocaleDateString('en-GB', options) + ' ' + lastModified.toLocaleTimeString('en-GB', options);




let equalButton = document.getElementById("doTheCalculation");

equalButton.addEventListener("click", () => {

  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);

  if (!isNaN(number1) && !isNaN(number2)) {

    const sum = number1 + number2;


    document.getElementById("result").textContent = `Result: ${sum}`;
  } else {

    document.getElementById("result").textContent = "Please enter valid numbers.";
  }
});
