$(document).ready(function() {
  $("#load-data").click(function() {
      loadData();
  });
});

function loadData() {
  var sheetId = "1xR3pi5nXkngUeMpxl4Eq3_FaAFpDln1kUMwiv4_XaTk";
  var apiKey = "AIzaSyDNlZx3upLJvifGrLCfcWiKvNNa4orthE0";
  var url = "https://sheets.googleapis.com/v4/spreadsheets/" + sheetId + "/values/A1:C2?key=" + apiKey;
  
  $.ajax({
      type: "GET",
      url: url,
      success: function(data) {
          var values = data.values;
          var html = "";
          for (var i = 0; i < values.length; i++) {
              html += "<p>Name: " + values[i][0] + ", Email: " + values[i][1] + ", Phone: " + values[i][2] + "</p>";
          }
          $("#data-container").html(html);
      },
      error: function(error) {
          console.log(error);
      }
  });
}