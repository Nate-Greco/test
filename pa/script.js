document.getElementsByTagName("button")[0].addEventListener("click", function() {
    var ans = prompt("What is your answer?");
    var result = await fetch("https://white-paper-d4da.yyznate.workers.dev/?pw=${encodeURIComponent(ans)}");
    if (result == "y") {
        alert("Correct! Redirecting you to your prize page.");
    }
  });