document.getElementById("button").addEventListener("click", function() {
    var ans = prompt("What is your answer?");

    var result = fetch(`https://long-mouse-45e6.yyznate.workers.dev/?pw=${encodeURIComponent(ans)}`)
        .then(response => response.text())
        .then(res => {
            if (""+res.charAt(0) == "y") {
                alert("Correct! Redirecting you to your prize page.");
                window.open(res.slice(1));
            }
        })
  });
