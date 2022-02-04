function convert() {
  let val = document.getElementById("input").value;
  if (document.getElementById("min").checked) {
    document.getElementById("result").innerText = val * 60 + " minutes.";
  } else if (document.getElementById("sec").checked) {
    document.getElementById("result").innerText = val * 3600 + " seconds.";
  }
}
