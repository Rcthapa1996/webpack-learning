(() => {
  "use strict";
  var e = document.querySelector("#secret-button"),
    t = document.querySelector("#secret-paragraph"),
    c = !1;
  function n() {
    t.style.display = c ? "block" : "none";
  }
  e.addEventListener("click", function () {
    (c = !c), n(), (e.textContent = c ? "Hide the Secret" : "Show the Secret");
  }),
    n();
})();
