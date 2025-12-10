fetch("why doesnt this work?")
  .then(response => response.text())
  .then(text => {
    console.log("Fetched string:", text);
  })
fetch("./api/[0][12][22][45].txt")
  .then(response => response.text())
  .then(text => {
    console.log("Fetched string:", text);
  })