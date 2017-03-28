$(document).ready(function() {
  $("form#transport-survey").submit(function(event) {
      event.preventDefault();
      $("#replies").show();
      $("input:checkbox[name=work-transportation]:checked").each(function() {

        var transportWork = $(this).val();
        $("#replies").append(transportWork + "<br>");

      });
      $("#funReplies").show();
      $("input:checkbox[name=fun-transportation]:checked").each(function() {
        var transportFun = $(this).val();
        $("#funReplies").append(transportFun + "<br>");
      });
      $('#transport-survey').hide();
  });
});
