//viewport
var viewport = $(window),
  setVisible = function (e) {
    var viewportTop = viewport.scrollTop(),
      viewportBottom = viewport.scrollTop() + viewport.height();
    $(".firmaSVG").each(function () {
      var self = $(this),
        top = self.offset().top,
        bottom = top + self.height(),
        topOnScreen = top >= viewportTop && top <= viewportBottom,
        bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
        elemVisible = topOnScreen || bottomOnScreen;
      self.toggleClass("activeSection", elemVisible);
     /* console.log(
        JSON.stringify({
          ".firmaSVG": self[0].classList[0],
          viewportTop: viewportTop,
          top: top,
          topOnScreen: topOnScreen,
          viewportBottom: viewportBottom,
          bottom: bottom,
          bottomOnScreen: bottomOnScreen,
          elemVisible: elemVisible,
        })
      );*/
    });
  };
viewport.scroll(setVisible);
setVisible();
