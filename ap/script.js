const audio = new Audio("normal.mp3");
audio.loop = true; 
document.getElementById("listen").addEventListener("click", () => {
    audio.play();
});
document.getElementById("button").addEventListener("click", function() {
    var ans = prompt("What is your answer?");

    var result = fetch(`https://yellow-leaf-9d35.yyznate.workers.dev/?pw=${encodeURIComponent(ans)}`)
        .then(response => response.text())
        .then(res => {
            if (""+res.charAt(0) == "y") {
                alert("Correct! Redirecting you to your prize page.");
                window.open(res.slice(1));
            }
        })
  });
