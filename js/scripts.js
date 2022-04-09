$(document).ready(function() {
  $("form#lang-questionnaire").submit(function(event) {
    event.preventDefault();
    const question1 = parseInt($("#programmingInterest").val());
    const question2 = parseInt($("#techUsage").val());
    const pineapplePizza = $("input:radio[name=pineapplePizza]:checked").val();
    const wouldRather = $("input:radio[name=wouldRather]:checked")
  });
});