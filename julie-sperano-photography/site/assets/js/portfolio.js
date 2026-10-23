/* Portfolio page: builds the gallery from assets/data/portfolio.js,
   handles the category filters and the full-screen lightbox.
   You should not need to edit this file to change photos. */
(function () {
  "use strict";

  var items = window.PORTFOLIO || [];
  var categories = window.PORTFOLIO_CATEGORIES || [];
  var gallery = document.getElementById("gallery");
  var filterList = document.getElementById("filters");
  var lightbox = document.getElementById("lightbox");
  if (!gallery) return;

  var labels = {};
  categories.forEach(function (c) { labels[c.key] = c.label; });

  var ASPECT = { portrait: "r-4x5", landscape: "r-3x2", square: "r-1x1", panorama: "r-7x3" };
  var current = "all";
  var visible = [];

  /* ---------- Filters ---------- */
  function count(key) {
    return items.filter(function (i) { return key === "all" || i.category === key; }).length;
  }

  function buildFilters() {
    var list = [{ key: "all", label: "All work" }].concat(
      categories.filter(function (c) { return count(c.key) > 0; })
    );
    list.forEach(function (c) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filter-btn";
      b.dataset.filter = c.key;
      b.setAttribute("aria-pressed", "false");
      b.innerHTML = "";
      b.appendChild(document.createTextNode(c.label));
      var sup = document.createElement("sup");
      sup.textContent = count(c.key);
      sup.setAttribute("aria-hidden", "true");
      b.appendChild(sup);
      b.addEventListener("click", function () { setFilter(c.key, true); });
      li.appendChild(b);
      filterList.appendChild(li);
    });
  }

  function setFilter(key, updateUrl) {
    if (key !== "all" && !labels[key]) key = "all";
    current = key;
    filterList.querySelectorAll(".filter-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === key));
    });
    render();
    if (updateUrl) {
      history.replaceState(null, "", key === "all" ? location.pathname : "#" + key);
    }
    var live = document.getElementById("gallery-status");
    if (live) {
      live.textContent = "Showing " + visible.length + " photographs" +
        (key === "all" ? "" : " in " + labels[key]) + ".";
    }
  }

  /* ---------- Gallery ---------- */
  function render() {
    visible = items.filter(function (i) { return current === "all" || i.category === current; });
    gallery.innerHTML = "";
    if (!visible.length) {
      var p = document.createElement("p");
      p.className = "gallery-empty";
      p.textContent = "New work for this collection is coming soon.";
      gallery.appendChild(p);
      return;
    }
    // Alternate widths and vertical offsets so the layout reads like a
    // magazine spread rather than a grid of identical tiles.
    var seen = { portrait: 0, landscape: 0, square: 0, panorama: 0 };
    visible.forEach(function (item, index) {
      var shape = ASPECT[item.shape] ? item.shape : "landscape";
      var n = seen[shape]++;
      var fig = document.createElement("figure");
      fig.className = "gallery__item frame g-" + shape;
      if (n % 2 === 1) fig.classList.add("alt");
      if (shape === "portrait" && index % 3 === 1) fig.classList.add("drop");
      if (shape === "square" && n % 2 === 0) fig.classList.add("drop");
      if (shape === "landscape" && n % 3 === 2) fig.classList.add("inset");
      fig.style.animationDelay = Math.min(index, 8) * 60 + "ms";

      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "View larger: " + item.alt);
      btn.addEventListener("click", function () { openLightbox(index, btn); });

      // The frame starts at the expected shape so the page doesn't jump,
      // then takes the photo's true proportions once it loads (no cropping).
      var box = document.createElement("div");
      box.className = "frame__img " + ASPECT[shape];
      var img = document.createElement("img");
      img.addEventListener("load", function () {
        box.classList.remove(ASPECT[shape]);
        box.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight;
      });
      img.src = "images/portfolio/" + item.file;
      img.alt = item.alt;
      img.loading = index < 2 ? "eager" : "lazy";
      img.decoding = "async";
      box.appendChild(img);
      btn.appendChild(box);
      fig.appendChild(btn);

      var cap = document.createElement("figcaption");
      var no = document.createElement("span");
      no.className = "index-no";
      no.textContent = String(index + 1).padStart(2, "0");
      cap.appendChild(no);
      var txt = document.createElement("span");
      txt.textContent = item.caption ? item.caption : labels[item.category] || "";
      if (item.caption && /^\[.*\]$/.test(item.caption)) txt.className = "ph";
      cap.appendChild(txt);
      fig.appendChild(cap);

      gallery.appendChild(fig);
    });
  }

  /* ---------- Lightbox ---------- */
  var lbImg = lightbox && lightbox.querySelector(".lightbox__stage img");
  var lbCaption = lightbox && lightbox.querySelector(".lightbox__caption");
  var lbCount = lightbox && lightbox.querySelector(".lightbox__count");
  var position = 0;
  var opener = null;

  function show(i) {
    position = (i + visible.length) % visible.length;
    var item = visible[position];
    lbImg.src = "images/portfolio/" + item.file;
    lbImg.alt = item.alt;
    var cap = item.caption && !/^\[.*\]$/.test(item.caption) ? item.caption : "";
    lbCaption.textContent = [labels[item.category], cap].filter(Boolean).join("  ·  ");
    lbCount.textContent = (position + 1) + " / " + visible.length;
    // Warm the next image so arrowing through feels instant.
    var next = visible[(position + 1) % visible.length];
    if (next) { var pre = new Image(); pre.src = "images/portfolio/" + next.file; }
  }

  function openLightbox(i, from) {
    if (!lightbox || typeof lightbox.showModal !== "function") {
      window.open("images/portfolio/" + visible[i].file, "_blank", "noopener");
      return;
    }
    opener = from;
    show(i);
    lightbox.showModal();
    document.documentElement.style.overflow = "hidden";
    lightbox.querySelector(".lightbox__close").focus();
  }

  if (lightbox) {
    lightbox.querySelector(".lightbox__close").addEventListener("click", function () { lightbox.close(); });
    lightbox.querySelector(".lightbox__prev").addEventListener("click", function () { show(position - 1); });
    lightbox.querySelector(".lightbox__next").addEventListener("click", function () { show(position + 1); });
    lightbox.addEventListener("close", function () {
      document.documentElement.style.overflow = "";
      if (opener) opener.focus();
    });
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(position + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); show(position - 1); }
    });
    // Click on the dark area (not the photo or controls) closes.
    lightbox.querySelector(".lightbox__stage").addEventListener("click", function (e) {
      if (e.target === e.currentTarget) lightbox.close();
    });
    // Swipe left/right on touch screens.
    var startX = null, startY = null;
    lightbox.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(position + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  }

  /* ---------- Start ---------- */
  buildFilters();
  setFilter(location.hash.replace("#", "") || "all", false);
  window.addEventListener("hashchange", function () {
    setFilter(location.hash.replace("#", "") || "all", false);
  });
})();
