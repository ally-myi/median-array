
var amounts = [];


var amountInput = document.getElementById("amounts");

var messageBox  = document.getElementById("display");

function insert ( ) {

 amounts.push( amountInput.value );
  
 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  amountInput.value = "";
  
  // Show our output
  messageBox.innerHTML = "";
 
  messageBox.innerHTML += "Amounts: " + amounts.join(", ");
}
