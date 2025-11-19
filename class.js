function bookClass(){
    alert("Your class has been booked!");
}

function cancelClass(){
    alert("Your class booking has been cancelled.");
}

function visiblly(){
  let div = document.getElementById("callBackForm");

  if (div.style.display ==="none"){
      div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
