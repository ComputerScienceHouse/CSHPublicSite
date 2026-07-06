/* Navigation, dropdowns, theme toggle, scroll state — dependency-free. */
(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var menu = document.getElementById("nav-menu");
  var navToggle = document.querySelector(".nav__toggle");
  var dropToggles = Array.prototype.slice.call(document.querySelectorAll(".dropdown__toggle"));
  var themeToggle = document.querySelector(".theme-toggle");
  var mq = window.matchMedia("(max-width: 900px)");

  /* ---- Sticky header shadow on scroll ---- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu ---- */
  function setMenu(open) {
    if (!menu || !navToggle) return;
    menu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
  }

  /* ---- Dropdowns (click/tap toggles; hover handled by CSS on desktop) ---- */
  function closeAllDropdowns(except) {
    dropToggles.forEach(function (t) {
      if (t !== except) t.setAttribute("aria-expanded", "false");
    });
  }
  dropToggles.forEach(function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault();
      var open = t.getAttribute("aria-expanded") === "true";
      closeAllDropdowns(t);
      t.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  /* Close menus on outside click + Escape */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav__item.has-dropdown")) closeAllDropdowns(null);
    if (menu && menu.classList.contains("is-open") && !e.target.closest(".nav")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllDropdowns(null);
      setMenu(false);
    }
  });

  /* Close the mobile menu after following an in-page link */
  if (menu) {
    menu.querySelectorAll("a[href]").forEach(function (a) {
      a.addEventListener("click", function () {
        if (mq.matches) setMenu(false);
      });
    });
  }

  /* Reset state when crossing the desktop/mobile breakpoint */
  mq.addEventListener("change", function () {
    setMenu(false);
    closeAllDropdowns(null);
  });

  /* ---- Theme toggle ---- */
  if (themeToggle) {
    var root = document.documentElement;
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    var currentlyDark = function () {
      var explicit = root.getAttribute("data-theme");
      if (explicit === "dark") return true;
      if (explicit === "light") return false;
      return systemDark.matches;
    };
    var syncPressed = function () {
      themeToggle.setAttribute("aria-pressed", currentlyDark() ? "true" : "false");
    };
    syncPressed();
    themeToggle.addEventListener("click", function () {
      var next = currentlyDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncPressed();
    });
  }
})();
