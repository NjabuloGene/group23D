function bookClass(){
    alert("Your class has been booked!");
}

function cancelClass(){
    alert("Your class booking has been cancelled.");
}

function callBack() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}