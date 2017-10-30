import axios from "axios";


export default {
  // Gets all books
  getArticles: function() {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", "a7584e5fb7714de09e6a8e16cfffce8b");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveArticle: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "a7584e5fb7714de09e6a8e16cfffce8b"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })

//NYT api info
// var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// queryUrl += '?' + $.param({
//   'api-key': "a7584e5fb7714de09e6a8e16cfffce8b”, ‘begin_date’: “20100710",
//   'end-date': "20140710"
// });
// $.ajax({
//   url: queryUrl,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });