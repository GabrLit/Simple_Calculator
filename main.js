function calc() {
  var a = document.getElementById("value1").value;
  var b = document.getElementById("value2").value;
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = +a + +b;
  } else if (op == "sub") {
    calculate = +a - +b;
  } else if (op == "mul") {
    calculate = +a * +b;
  } else if (op == "div") {
    calculate = +a / +b;
  }

  document.getElementById("result").innerHTML = calculate;
}
