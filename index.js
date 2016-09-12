function getQuote(event) {
  $("#get-quote").on("click", function () {
    var quote;
    var randomQuoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key";

    $.getJSON(randomQuoteUrl, function (response) {
      console.log(response);
      $(".quote").append(response[0].content);
    });
  });
}

$(document).ready(function () {
  getQuote();
});
