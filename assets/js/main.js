/* Espaço Irene Rodrigues — JS mínimo: menu mobile, filtro da galeria e lightbox. */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Filtro da galeria ---------- */
  var chips = document.querySelectorAll("[data-filter]");
  var items = document.querySelectorAll("[data-category]");
  if (chips.length && items.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var filter = chip.getAttribute("data-filter");
        chips.forEach(function (c) {
          c.classList.remove("is-active");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("is-active");
        chip.setAttribute("aria-pressed", "true");
        items.forEach(function (item) {
          var cats = item.getAttribute("data-category") || "";
          var show = filter === "todos" || cats.split(" ").indexOf(filter) !== -1;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.querySelector("[data-lightbox]");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector("[data-lightbox-close]");

    function openLightbox(src, alt) {
      lbImg.setAttribute("src", src);
      lbImg.setAttribute("alt", alt || "");
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lbImg.setAttribute("src", "");
      document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-lightbox-src]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        openLightbox(
          trigger.getAttribute("data-lightbox-src"),
          trigger.getAttribute("data-lightbox-alt")
        );
      });
    });
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }

  /* ---------- Ano do rodapé ---------- */
  var yearEl = document.querySelectorAll("[data-year]");
  yearEl.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
