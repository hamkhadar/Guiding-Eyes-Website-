// DOM loaded snippet (only need one of these)
$(document).ready(function() {
  console.log("Reading contact form...");
  // TODO: place "form submitted snippets" here

  //===========images slideshow=============//




  $("#menuicon").on("click", function() {
    if ($("#nav_options").is(":hidden")) {
      $("#nav_options").removeClass("hidden");
      $("#menuicon").addClass("hidden");
      $("#xicon").removeClass("hidden");
    }
  });

  $("#xicon").on("click", function() {
    if ($("#nav_options").is(":visible")) {
      $("#nav_options").addClass("hidden");
      $("#menuicon").removeClass("hidden");
      $("#xicon").addClass("hidden");
  }
  });


  //next button
  $("#ss-next").on("click", function() {

    if ($("#dog1").is(":visible")) {
      $("#dog1").addClass("hidden");
      $("#dog2").removeClass("hidden");
    } else if ($("#dog2").is(":visible")) {
      $("#dog2").addClass("hidden");
      $("#dog3").removeClass("hidden");
    } else if ($("#dog3").is(":visible")) {
      $("#dog3").addClass("hidden");
      $("#dog4").removeClass("hidden");
    } else if ($("#dog4").is(":visible")) {
      $("#dog4").addClass("hidden");
      $("#dog1").removeClass("hidden");
    }

  });

  //prev button
  $("#ss-prev").on("click", function() {
    if ($("#dog1").is(":visible")) {
      $("#dog1").addClass("hidden");
      $("#dog4").removeClass("hidden");
    } else if ($("#dog4").is(":visible")) {
      $("#dog4").addClass("hidden");
      $("#dog3").removeClass("hidden");
    } else if ($("#dog3").is(":visible")) {
      $("#dog3").addClass("hidden");
      $("#dog2").removeClass("hidden");
    } else if ($("#dog2").is(":visible")) {
      $("#dog2").addClass("hidden");
      $("#dog1").removeClass("hidden");
    }

  })





  //============end slideshow============//

  // Listerve Form//

  $("#listserve").on("submit", function() {
    var valid = true;

    if ($("#name").prop("validity").valid) {
      $("#errorname").addClass("hidden");
    } else {
      $("#errorname").removeClass("hidden");
      valid = false;
    };

    if ($("#netid").prop("validity").valid) {
      $("#errornetid").addClass("hidden");
    } else {
      $("#errornetid").removeClass("hidden");
      valid = false;
    };

    if ($("#email").prop("validity").valid) {
      $("#erroremail").addClass("hidden");
    } else {
      $("#erroremail").removeClass("hidden");
      valid = false;
    };

    return valid;
  });





  /*Suggestion Form*/
  $("#form1").on("submit", function() {
    var valid1 = true;

    if ($("#name1").prop("validity").valid) {
      $("#nameError1").addClass("hidden");
    } else {
      $("#nameError1").removeClass("hidden");
      valid1 = false;
    };

    if ($("#email1").prop("validity").valid) {
      $("#emailError1").addClass("hidden");
    } else {
      $("#emailError1").removeClass("hidden");
      valid1 = false;
    };

    if ($("#phone1").prop("validity").valid) {
      $("#phoneError1").addClass("hidden");
    } else {
      $("#phoneError1").removeClass("hidden");
      valid1 = false;
    };

    if ($("#feedbacktext").prop("validity").valid) {
      $("#feedbackError").addClass("hidden");
    } else {
      $("#feedbackError").removeClass("hidden");
      valid1 = false;
    };

    if ($('[name=check]').filter(':checked').length == 0) {
      $("#checkError").removeClass("hidden");
      valid1 = false;
    } else {
      $("#checkError").addClass("hidden");
    }

    if ($('[name=hear]').filter(':checked').length == 0) {
      $("#radioError").removeClass("hidden");
      valid1 = false;
    } else {
      $("#radioError").addClass("hidden");
    }
    return valid1;

  });

  $("#image11").hover(
    function() {
      $('#cutetext').removeClass("hidden");
    },
    function() {
      $('#cutetext').addClass("hidden");
    }
  );


  $("#image12").hover(
    function() {
      $('#cutetext2').removeClass("hidden");
    },
    function() {
      $('#cutetext2').addClass("hidden");
    }
  );


  // When the rooms nav item is clicked
  $("#dogsNavItem").hover(function() {
    $("#dogsDropdown").removeClass("hidden");
    console.log('Hello');
  });

  $('#dogsDropdown').mouseleave(function() {
    $("#dogsDropdown").addClass("hidden");
  });

  $('#1').mouseenter(function() {
    $("#dogsDropdown").addClass("hidden");
  });

  $('#2').mouseenter(function() {
    $("#dogsDropdown").addClass("hidden");
  });

  $("div").mouseenter(function() {
    $("#dogsDropdown").addClass("hidden");
  });

  $('#4').mouseenter(function() {
    $("#dogsDropdown").addClass("hidden");
  });

});
