// parralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   jumbotron
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  //   about
  if (wScroll > $("#about").offset().top - 200) {
    $("#about .profile").each(function (i) {
      setTimeout(function () {
        $("#about .profile").eq(i).addClass("show");
      }, 300 * (i + 1));
    });
  }

  //   skill
  if (wScroll > $("#skill").offset().top - 250) {
    $("#skill .gambar").each(function (i) {
      setTimeout(function () {
        $("#skill .gambar").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
