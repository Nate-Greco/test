document.getElementsByTagName("button")[0].addEventListener("click", function() {
    var ans = prompt("What is your answer?");

    var result = fetch(`https://white-paper-d4da.yyznate.workers.dev/?pw=${encodeURIComponent(ans)}`)
        .then(response => response.text())
        .then(res => {
            console.log(res);
            if (res == "y") {
                alert("Correct! Redirecting you to your prize page.");
                window.open("../ap");
            }
        })
  });
const audio = new Audio("normal.mp3");
audio.loop = true; 
document.getElementById("listen").addEventListener("click", () => {
    audio.play();
});