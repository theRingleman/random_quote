var quote, author;

function getQuote(event) {
  $("#get-quote").on("click", function () {
    var randomQuoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.get(randomQuoteUrl, function (response) {
      quote = response.quoteText;
      author = response.quoteAuthor;
      appendQuote(quote, author);
      setTweet(quote, author);
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

function setTweet(quote, author) {
  var renderedQuote = quote + " - " + author;
  if (renderedQuote.length <= 140) {
    $("#tweet-link").attr("href", "http://twitter.com/home/?status=" + renderedQuote);
  } else {
    $("#tweet-link").on("click", function (event) {
      event.preventDefault();
      alert("Sorry but the quote is too long.");
    });
  }
}

$(document).ready(function () {
  getQuote();
});
