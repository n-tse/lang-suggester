$(document).ready(function() {
  $("form#lang-questionnaire").submit(function(event) {
    event.preventDefault();
    const programmingInterest = parseInt($("#programmingInterest").val());
    const techUsage = parseInt($("#techUsage").val());
    const hogwartsHouse = $("input#hogwartsHouse").val());
    const pineapplePizza = $("input:radio[name=pineapplePizza]:checked").val();
    const wouldRather = $("input:radio[name=wouldRather]:checked").val();
    let result;
    if (hogwartsHouse === "Slytherin") {
      result = langResult("Slytherin");
    } 
  });
}); 