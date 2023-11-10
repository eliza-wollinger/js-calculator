let output = ""
let commandHistory = []

window.onload=()=>{
  // console.log("teste")
  updateScreen()
}

function handleCalculatorInput(input){
  switch (input) {
    case "=":
      updateHistory(output);
      output = eval(output);
      break;
    case "ac":
      output = "";
      break;
    case "del":
      let outputCopy = output.split("");
      outputCopy.pop();
      output = outputCopy.join("")
      break;  
    default:
      output += input
      break;
  }
  updateScreen()
}

function updateHistory(value){
  if (commandHistory.length>=2) {
    commandHistory.shift();
  }
  commandHistory.push(value);
}

function updateScreen(){
  
  document.getElementById("history").innerHTML = `
    ${commandHistory[0]?'<li>'+ commandHistory[0] + '</li>':""}
    ${commandHistory[1]?'<li>'+ commandHistory[1] + '</li>':""}
  `
  document.getElementById("output").innerText = output === "" ? "0":output;
}