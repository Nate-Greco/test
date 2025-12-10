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
            console.log(res);
            if (res == "y") {
                alert("Correct! Redirecting you to your prize page.");
                window.open("../dsafda/sda/psafda/a/six/seven/four/lol/");
            }
        })
  });
