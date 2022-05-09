

// function eyeview() {
//   var x = document.getElementById("eyeviewShow");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


function body1Show() {
  var bodyDancing = document.getElementById("bodyDancing");
  var bodyDancing2 = document.getElementById("bodyDancing2");
  var iconBody1 = document.getElementById("iconBody1");
  var iconBody2 = document.getElementById("iconBody2");
  if (bodyDancing2.style.display === "block") {
    bodyDancing2.style.display = "none";
    bodyDancing.style.display = "block";
    iconBody1.style.display = "block";
    iconBody2.style.display = "block";
  } else {
    bodyDancing2.style.display = "none";
    bodyDancing.style.display = "block";
    iconBody1.style.display = "block";
    iconBody2.style.display = "block";
  }
}

function body2Show() {
  var bodyDancing = document.getElementById("bodyDancing");
  var bodyDancing2 = document.getElementById("bodyDancing2");
  var iconBody1 = document.getElementById("iconBody1");
  var iconBody2 = document.getElementById("iconBody2");
  if (bodyDancing.style.display === "block") {
    bodyDancing.style.display = "none";
    bodyDancing2.style.display = "block";
    iconBody1.style.display = "block";
    iconBody2.style.display = "block";
  } else {
    bodyDancing.style.display = "none";
    bodyDancing2.style.display = "block";
    iconBody1.style.display = "block";
    iconBody2.style.display = "block";
  }
}
