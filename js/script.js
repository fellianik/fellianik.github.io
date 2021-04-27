// parralax judul

$(window).on("load", function () {
  $(".jAtas").addClass("jMuncul");
  $(".jBawah").addClass("jMuncul");
});

// parralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   jumbotron
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll * 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll * 5 + "%)",
  });

  //   about
  if (wScroll > $("#about").offset().top - 200) {
    $("#about .profile").each(function (i) {
      setTimeout(function () {
        $("#about .profile").eq(i).addClass("aMuncul");
      }, 275 * (i + 1));
    });
  }

  //   skill
  if (wScroll > $("#skill").offset().top - 250) {
    $("#skill .gambar").each(function (i) {
      setTimeout(function () {
        $("#skill .gambar").eq(i).addClass("sMuncul");
      }, 275 * (i + 1));
    });
  }

  // project
  if (wScroll > $("#project").offset().top - 250) {
    $("#project .card").each(function (i) {
      setTimeout(function () {
        $("#project .card").eq(i).addClass("pMuncul");
      }, 300 * (i + 1));
    });
  }
});
