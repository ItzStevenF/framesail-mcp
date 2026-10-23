/* Julie Sperano Photography: shared behaviour for every page.
   - mobile menu
   - header rule on scroll
   - gentle reveal-on-scroll (skipped when reduced motion is requested)
   - footer year
   - inquiry form: validation + submission to Netlify Forms */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function setMenu(open) {
    root.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".nav-toggle__label").textContent = open ? "Close" : "Menu";
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("nav-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Header rule once the page scrolls ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Inquiry form ---------- */
  var form = document.querySelector("form[data-inquiry-form]");
  if (!form) return;

  var status = document.getElementById("form-status");
  var submit = form.querySelector('button[type="submit"]');

  // Pre-select the session type when arriving from a pricing link (?type=dogs).
  var typeParam = new URLSearchParams(window.location.search).get("type");
  var typeSelect = form.querySelector("#inquiry-type");
  if (typeParam && typeSelect) {
    var match = typeSelect.querySelector('option[data-key="' + typeParam + '"]');
    if (match) typeSelect.value = match.value;
  }

  function fieldError(input, message) {
    var err = document.getElementById(input.id + "-error");
    if (message) {
      input.setAttribute("aria-invalid", "true");
      if (err) err.textContent = message;
    } else {
      input.removeAttribute("aria-invalid");
      if (err) err.textContent = "";
    }
  }

  function messageFor(input) {
    if (input.type === "checkbox") {
      return input.checked ? "" : "Please tick this box so I can reply to you.";
    }
    if (!input.value.trim()) return input.dataset.required || "This field is required.";
    if (input.type === "email" && !input.validity.valid) {
      return "Please check the email address. It looks incomplete.";
    }
    return "";
  }

  function validate() {
    var first = null;
    form.querySelectorAll("[required]").forEach(function (input) {
      var msg = messageFor(input);
      fieldError(input, msg);
      if (msg && !first) first = input;
    });
    if (first) first.focus();
    return !first;
  }

  // After a failed submit, clear each field's error as soon as it is fixed.
  // Only the edited field is re-checked, so nothing else moves on the page.
  form.querySelectorAll("[required]").forEach(function (input) {
    var recheck = function () {
      if (input.getAttribute("aria-invalid") === "true" && !messageFor(input)) fieldError(input, "");
    };
    input.addEventListener("input", recheck);
    input.addEventListener("change", recheck);
  });

  function showStatus(kind, title, body) {
    status.hidden = false;
    status.className = "form-status form-status--" + kind;
    status.innerHTML = "";
    var h = document.createElement("h3");
    h.textContent = title;
    var p = document.createElement("p");
    p.textContent = body;
    status.appendChild(h);
    status.appendChild(p);
    status.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.hidden = true;
    if (!validate()) return;

    submit.disabled = true;
    var label = submit.textContent;
    submit.textContent = "Sending…";

    var data = new URLSearchParams(new FormData(form)).toString();

    // Netlify Forms accepts the submission at the site root.
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Status " + res.status);
        form.reset();
        showStatus(
          "ok",
          "Thank you. Your note is on its way.",
          "I read every inquiry personally and will reply by email. If you don’t see a reply, please check your spam folder."
        );
      })
      .catch(function () {
        showStatus(
          "err",
          "Sorry, your message didn’t send.",
          "Nothing was lost on your side: please try again in a moment, or email me directly at " +
            form.dataset.fallbackEmail + "."
        );
      })
      .then(function () {
        submit.disabled = false;
        submit.textContent = label;
      });
  });
})();
