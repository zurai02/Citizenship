(function () {
  var beam = document.getElementById("beam");
  var rightsCol = document.getElementById("col-rights");
  var dutiesCol = document.getElementById("col-duties");

  if (!beam || !rightsCol || !dutiesCol) return;

  function tip(direction) {
    // direction: -1 tips toward rights, 1 tips toward duties, 0 level
    var angle = direction * 7;
    beam.style.transform = "rotate(" + angle + "deg)";
  }

  function bind(el, direction) {
    el.addEventListener("mouseenter", function () { tip(direction); });
    el.addEventListener("mouseleave", function () { tip(0); });
    el.addEventListener("focus", function () { tip(direction); });
    el.addEventListener("blur", function () { tip(0); });
  }

  bind(rightsCol, -1);
  bind(dutiesCol, 1);
})();
