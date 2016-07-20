
var search = "";
//capture enquiry on submit
$("#search").submit(function(event) {

  event.preventDefault();
  search = $('#search :input').val();
  //alert(search);
  searchWiki(search);
});
//search wikipedia for enquiry
function searchWiki(x) {
  $.getJSON("https://en.wikipedia.org/w/api.php?callback=?", {
    
    
      srsearch: x,
      action: "query",
      list: "search",
      sroffset: 0,
      format: "json"
    },
    function(data) {
      $("#results").empty();
      $("#results").append("Results for <b>" + x + "</b>");
    console.log(data);
      //append each article as separate entry on page
      $.each(data.query.search, function(i, item) {
        $("#results").append("<div id='entry'><a target='_blank' href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a> " + item.snippet + "</div>");
      });
    })
}