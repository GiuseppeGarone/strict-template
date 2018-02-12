$(document).ready(function() {

  // global vriables
  var valName = $("#form-name");
  var valEmail = $("#form-email");
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var submitButton = $("#form-send-button");
  var form = $("#form");
  var errorNameMissing = "Name is missing!";
  var errorEmailMissing = "Email is missing!";
  var errorEmailFormat = "Incorrect email format!";
  var errorName = $("#error-name");
  var errorEmail = $("#error-email");

  // email format validation
  function isEmail(email) {
    return emailRegex.test(email);
  }

  // button listener
  $(submitButton).click(function(e) {
    e.preventDefault();

    // if name field is empty
    if (valName.val() == "") {
      errorName.html(errorNameMissing);
      valName.addClass("invalid-input");
    } else {
      errorName.html("");
      valName.removeClass("invalid-input");
    }

    // if email field is empty and/or format is incorrect
    if (valEmail.val() == "") {
      errorEmail.html(errorEmailMissing);
      valEmail.addClass("invalid-input");
    } else if (!isEmail(valEmail.val())) {
      errorEmail.html(errorEmailFormat);
      valEmail.addClass("invalid-input");
    } else {
      errorEmail.html("");
      valEmail.removeClass("invalid-input");
    }

    // submit form if is all good
    if (valName.val() != "" && isEmail(valEmail.val())) {
      form.submit();
    }

  });
});
