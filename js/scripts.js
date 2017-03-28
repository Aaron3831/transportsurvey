$(document).ready(function() {
  $("form#count").submit(function(event) {
    var countMax = parseInt($("input#countMax").val());
    var countBy = parseInt($("input#countBy").val());
    var text = "";
    var index;

      for (var index = 0; index <= countMax; index += countBy) {
        text += "The number is " + index + "<br>";
      }
      // $("result").empty().append(index);
      document.getElementById("result").innerHTML = text;


      event.preventDefault();


  });
});
