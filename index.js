function getQuote(event) {
  $("#get-quote").on("click", function () {
    alert("Hey you clicked me!");
  })
}

$(document).ready(function () {
  getQuote();
});
