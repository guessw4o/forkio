//menu headed

const menuBtn = $(".header__button"),
  btnLines = $(".header__button-line"),
  menu = $(".navigator");

menuBtn.on("click", function () {
  if ($(menu).hasClass("active")) {
    $(menu).removeClass("active");
    $(btnLines).removeClass("active");
    menu.slideUp();
  } else {
    $(menu).addClass("active");
    $(btnLines).addClass("active");
    menu.slideDown();
  }
});

$(document).click(function (e) {
  if (
    !btnLines.is(e.target) &&
    !menuBtn.is(e.target) &&
    !menu.is(e.target) &&
    menu.has(e.target).length === 0
  ) {
    menu.slideUp();
    menuBtn.removeClass("active");
    menu.removeClass("active");
    btnLines.removeClass("active");
  }
});

//revolutionary

$(".eye").click(function () {
  if (!$(this).data("status")) {
    $(".watch").html("Unwatch");
    $(".eye--count").html("6");
    $(this).data("status", true);
  } else {
    $(".watch").html("Watch");
    $(".eye--count").html("5");
    $(this).data("status", false);
  }
});

$(".stars").click(function () {
  if (!$(this).data("status")) {
    $(".star").html("Unstar");
    $(".stars--count").html("3");
    $(".star--white").hide();
    $(".star--black").show();
    $(this).data("status", true);
  } else {
    $(".star").html("Star");
    $(".stars--count").html("2");
    $(".star--white").show();
    $(".star--black").hide();
    $(this).data("status", false);
  }
});
