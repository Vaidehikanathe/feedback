let signup = document.getElementById("signup");
let title = document.getElementById("title");

function seterror(id, error) {
  element = document.getElementById(id);
  if (id == "nameField") {
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  }

}

function clearErrors() {

  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function validateForm() {
  var returnval = true;
  clearErrors();

  var name = document.forms['myForm']["fname"].value;
  if (name.length < 5) {
    seterror("nameField", "*Length is too short");
    returnval = false;
  }
  

  return returnval;
}




