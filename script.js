$(window).on("load", function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    speed: 3000,
  });

  $(window).scroll(function () {
    var win = $(window);
    var scroll = win.scrollTop();
    var windowHeight = win.height();
    if (scroll >= windowHeight / 3) {
      $("header").addClass("is-fixed");
    } else {
      $("header").removeClass("is-fixed");
    }
  });

  $(".burger_btn").click(function () {
    $(this).toggleClass("close");
    $(".head_navi_area").toggleClass("clicked");
    $("body").toggleClass("noscroll");
  });
  if ($(window).width() <= 768) {
    $(".head_navi_area ul li > a").click(function () {
      $(".burger-btn").removeClass("close");
      $(".head_navi_area").removeClass("clicked");
      $("body").removeClass("noscroll");
    });
  }

  $(".effect_y").css("opacity", "0");
  $(window).scroll(function () {
    $(".effect_y").each(function () {
      var win = $(window);
      var position = $(this).offset().top;
      var scroll = win.scrollTop();
      var windowHeight = win.height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("scroll");
      } else {
        $(this).removeClass("scroll");
      }
    });
  });

  $(".effect_x_right").css("opacity", "0");
  $(window).scroll(function () {
    $(".effect_x_right").each(function () {
      var win = $(window);
      var position = $(this).offset().top;
      var scroll = win.scrollTop();
      var windowHeight = win.height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("scroll");
      } else {
        $(this).removeClass("scroll");
      }
    });
  });

  $(".effect_x_left").css("opacity", "0");
  $(window).scroll(function () {
    $(".effect_x_left").each(function () {
      var win = $(window);
      var position = $(this).offset().top;
      var scroll = win.scrollTop();
      var windowHeight = win.height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("scroll");
      } else {
        $(this).removeClass("scroll");
      }
    });
  });

  $(".effect").css("opacity", "0");
  $(window).scroll(function () {
    $(".effect").each(function () {
      var win = $(window);
      var position = $(this).offset().top;
      var scroll = win.scrollTop();
      var windowHeight = win.height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("scroll");
      } else {
        $(this).removeClass("scroll");
      }
    });
  });

  $("#loading_img").fadeIn();
  $(function () {
    //ローディングエリアを取得
    var loading = $("#loading");
    //ローディングエリアを隠す処理
    var isHidden = function () {
      loading.fadeOut(600);
    };
    setTimeout(isHidden, 1500);
  });

  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html,body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  $("#page-top").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#page-top").fadeIn();
    } else {
      $("#page-top").fadeOut();
    }
  });
});
