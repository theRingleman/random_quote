var quote, author;

function getQuote(event) {
  $("#get-quote").on("click", function () {
    var randomQuoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.get(randomQuoteUrl, function (response) {
      quote = response.quoteText;
      author = response.quoteAuthor;
      appendQuote(quote, author);
      setTweet(quote);
    }, "jsonp");
  });
}

function appendQuote(quote, author) {
  $(".quote").empty();
  if (author === "") {
    author = "Unknown";
  }
  $(".quote").append("<p>" + quote + " - " + author + "</p>");
}

function setTweet(quote) {
  $("#tweet-link").attr("href", "http://twitter.com/home/?status=" + quote);
}

$(document).ready(function () {
  getQuote();
});
