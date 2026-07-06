/* Tour room tabs — progressive enhancement over server-rendered panels. */
(function () {
  "use strict";
  var tablist = document.querySelector(".tour__tabs");
  if (!tablist) return;

  var tabs = Array.prototype.slice.call(tablist.querySelectorAll(".tour__tab"));

  function select(tab) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute("aria-selected", selected ? "true" : "false");
      t.tabIndex = selected ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !selected;
    });
  }

  tablist.addEventListener("click", function (e) {
    var tab = e.target.closest(".tour__tab");
    if (tab) select(tab);
  });

  /* Arrow-key navigation for the tablist (WAI-ARIA tabs pattern) */
  tablist.addEventListener("keydown", function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i === -1) return;
    var next;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === "Home") next = tabs[0];
    else if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      next.focus();
      select(next);
    }
  });
})();
