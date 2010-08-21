(function() {
  var draw_next_pentagon;
  if (typeof window !== "undefined" && window !== null) {
    draw_next_pentagon = function(pentagon, iteration) {
      var next_pentagon, translation;
      next_pentagon = pentagon.clone();
      translation = 53 * Math.pow(0.8075, iteration - 2);
      next_pentagon.scale(0.8075, 0.8075);
      if (iteration % 2 === 0) {
        next_pentagon.translate(0, translation);
      }
      if (iteration % 2 === 1) {
        next_pentagon.translate(0, -translation);
      }
      next_pentagon.rotate(180);
      return next_pentagon;
    };
    window.onload = function() {
      var _a, iteration, iterations, next_pentagon, paper, pentagon;
      paper = Raphael("canvas", 600, 600);
      next_pentagon = 1;
      paper.clear();
      paper.rect(0, 0, 600, 600, 10).attr({
        fill: "#fff",
        stroke: "none"
      });
      pentagon = paper.path("M 294,3\
                           L 585.246118,214.602691\
                           L 474,556.983037\
                           L 114,556.983037\
                           L 2.753882,214.602691\
                           z").attr({
        fill: "blue",
        opacity: 0.2,
        stroke: "black"
      });
      iterations = 20;
      iteration = 1;
      _a = [];
      while (((iteration += 1) <= iterations)) {
        _a.push((function() {
          next_pentagon = draw_next_pentagon(pentagon, iteration);
          return (pentagon = next_pentagon);
        })());
      }
      return _a;
    };
  }
})();
