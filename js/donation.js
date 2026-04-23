$(function () {
  $(".counter").each(function () {
    var $this = $(this),
      countTo = parseInt($this.attr("data-count")),
      type = $this.data("type");

    function formatNumber(num) {
      if (type === "million") {
        return num + "M";
      }
      return num.toLocaleString();
    }

    $({ countNum: 0 }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "linear",
        step: function () {
          $this.text(formatNumber(Math.floor(this.countNum)));
        },
        complete: function () {
          $this.text(formatNumber(this.countNum));
        },
      }
    );
  });
});