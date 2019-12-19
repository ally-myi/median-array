<script>
var names   = [];
var amount = [];

var nameInput  = document.getElementById("name");
var amountInput   = document.getElementById("amount");

var messageBox  = document.getElementById("display");
function insert ( ) {
 titles.push( titleInput.value );
 names.push( nameInput.value );
 tickets.push( ticketInput.value );
  
 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  titleInput.value = "";
  nameInput.value = "";
  ticketInput.value = "";
  
  // Show our output
  messageBox.innerHTML = "";
  
  messageBox.innerHTML += "Titles: " + titles.join(", ") + "<br/>";
  messageBox.innerHTML += "Names: " + names.join(", ") + "<br/>";
  messageBox.innerHTML += "Tickets: " + tickets.join(", ");
}
