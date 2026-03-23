(function () {
  const app = document.getElementById("app");
  const introOverlay = document.getElementById("introOverlay");
  const introTitle = document.getElementById("introTitle");
  const introTyping = document.getElementById("introTyping");

  const typingText = "Initializing Portfolio...";

  function getGreeting() {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return "Good Morning";
    if (h >= 12 && h < 17) return "Good Afternoon";
    return "Good Evening";
  }

  // Intro overlay: typewriter + fade out.
  if (app && introOverlay && introTitle && introTyping) {
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    introTitle.textContent = getGreeting();
    introTyping.textContent = "";

    const finish = () => {
      introOverlay.classList.add("is-hidden");
      introOverlay.setAttribute("aria-hidden", "true");
      app.classList.remove("is-loading");
      document.documentElement.style.overflow = prevOverflow || "";
    };

    if (prefersReducedMotion) {
      introTyping.textContent = typingText;
      setTimeout(finish, 400);
    } else {
      let i = 0;
      const speedMs = 55;

      const tick = () => {
        introTyping.textContent += typingText.charAt(i);
        i += 1;
        if (i < typingText.length) {
          window.setTimeout(tick, speedMs);
        } else {
          window.setTimeout(finish, 650);
        }
      };

      window.setTimeout(tick, 120);
    }
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle (persists in localStorage).
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    root.setAttribute("data-theme", storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // Mobile nav: toggle visibility.
  const navEl = document.querySelector(".nav");
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  if (navEl && navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const open = navEl.getAttribute("data-open") === "true";
      navEl.setAttribute("data-open", open ? "false" : "true");
      navToggle.setAttribute("aria-expanded", String(!open));
    });

    // Close the menu after clicking a link (mobile).
    navList.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      navEl.setAttribute("data-open", "false");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  // Smooth scrolling for internal anchors.
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const a = t.closest("a[href^='#']");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Scroll reveal animations.
  (function setupScrollReveal() {
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => el.classList.add("reveal"));

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => io.observe(el));
  })();

  // Carousel
  (function setupCarousel() {
    const carousels = document.querySelectorAll("[data-carousel]");
    if (!carousels.length) return;

    carousels.forEach((carouselEl) => {
      const track = carouselEl.querySelector(".carousel-track");
      const viewport = carouselEl.querySelector(".carousel-viewport");
      const slides = carouselEl.querySelectorAll(".project-slide");
      const prevBtn = carouselEl.querySelector("[data-carousel-prev]");
      const nextBtn = carouselEl.querySelector("[data-carousel-next]");
      const dotsWrap = carouselEl.querySelector("[data-carousel-dots]");

      if (!track || !viewport || !slides.length) return;

      let index = 0;
      const slideCount = slides.length;

      const setIndex = (nextIndex) => {
        index = (nextIndex + slideCount) % slideCount;
        track.style.transform = `translateX(${-index * 100}%)`;
      };

      // Dots
      if (dotsWrap) {
        dotsWrap.innerHTML = "";
        for (let i = 0; i < slideCount; i += 1) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = "carousel-dot";
          dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
          dot.addEventListener("click", () => setIndex(i));
          dotsWrap.appendChild(dot);
        }
      }

      // Buttons
      if (prevBtn) prevBtn.addEventListener("click", () => setIndex(index - 1));
      if (nextBtn) nextBtn.addEventListener("click", () => setIndex(index + 1));

      // Swipe/drag (basic)
      let startX = 0;
      let isDown = false;

      const onPointerDown = (e) => {
        isDown = true;
        startX = e.clientX;
      };
      const onPointerUp = (e) => {
        if (!isDown) return;
        isDown = false;
        const dx = e.clientX - startX;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) setIndex(index + 1);
        else setIndex(index - 1);
      };

      viewport.addEventListener("pointerdown", onPointerDown);
      viewport.addEventListener("pointerup", onPointerUp);

      // Initialize position
      setIndex(0);
    });
  })();
})();

