function answerValue (answer) {
  if (answer === "yes" || answer === "noSleep") {
    return 0;
  } else {
    return 2;
  }
}

function totalValue (ans1, ans2, ans3, ans4) {
  let totValue = ans1 + ans2 + ans3 + ans4;
  return totValue;
}

$(document).ready(function() {
  $("form#lang-questionnaire").submit(function(event) {
    event.preventDefault();
    const userName = $("input#userName").val();
    const programmingInterest = parseInt($("#programmingInterest").val());
    const techUsage = parseInt($("#techUsage").val());
    const hogwartsHouse = $("select#hogwartsHouse").val();
    const pineapplePizza = $("input:radio[name=pineapplePizza]:checked").val();
    const wouldRather = $("input:radio[name=wouldRather]:checked").val();
    const totValue = totalValue(programmingInterest, techUsage, answerValue(pineapplePizza), answerValue(wouldRather));
    let result;
    if (hogwartsHouse === "Slytherin") {
      result = "Python";
    } else if (totValue <= 2) {
      result = "JavaScript"; 
    } else if (totValue <= 4) {
      result = "Python";
    } else if (totValue <=7) {
      result = "SQL";
    } else {
      result = "C#";
    }

    $(".userName").text(userName);
    $(".showQuizResult").text(result);
    $("#output").show();
  });
}); 