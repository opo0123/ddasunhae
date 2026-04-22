jQuery.fn.liScroll = function (settings) {
  settings = jQuery.extend(
    {
      travelocity: 0.03,
    },
    settings,
  );

  return this.each(function () {
    var $strip = jQuery(this);
    $strip.addClass("newsticker");

    // 리스트 복제 (끊김 없는 반복)
    $strip.append($strip.html());

    var stripHeight = 0;
    $strip.find("li").each(function () {
      stripHeight += jQuery(this).outerHeight(true);
    });

    $strip.wrap("<div class='mask'></div>");
    $strip.parent().wrap("<div class='tickercontainer'></div>");

    var pos = 0;
    var rafId = null;

    function scrollnews() {
      pos -= 0.5;

      // 절반 지나면 초기화 (무한 루프)
      if (Math.abs(pos) >= stripHeight / 2) {
        pos = 0;
      }

      $strip.css("top", pos);

      rafId = requestAnimationFrame(scrollnews);
    }

    scrollnews();
  });
};

$(function () {
  $("ul#ticker01").liScroll({
    travelocity: 0.05,
  });



  // tablet, mobile
  jQuery.fn.liScroll = function (settings) {
    settings = jQuery.extend(
      {
        travelocity: 0.03,
      },
      settings,
    );

    return this.each(function () {
      var $strip = jQuery(this);
      $strip.addClass("newsticker");

      // 가로 배치 추가
      $strip.css({
        display: "flex",
        position: "relative",
        left: 0,
      });

      // 리스트 복제 (끊김 없는 반복)
      $strip.append($strip.html());

      var stripWidth = 0;
      $strip.find("li").each(function () {
        stripWidth += jQuery(this).outerWidth(true);
      });

      $strip.width(stripWidth);

      $strip.wrap("<div class='mask2'></div>");
      $strip.parent().wrap("<div class='tickercontainer2'></div>");

      var pos = 0;
      var rafId = null;

      function scrollnews() {
        pos -= 0.5;

        // 절반 지나면 초기화 (무한 루프)
        if (Math.abs(pos) >= stripWidth / 2) {
          pos = 0;
        }

        $strip.css("left", pos);

        rafId = requestAnimationFrame(scrollnews);
      }

      scrollnews();
    });
  };

  $(function () {
    $(".ticker02 ul").liScroll({
      travelocity: 0.05,
    });
  });
});
