const slider = (requireDots = false) => {
  console.log("'slider.js' подключен");

  const slider = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");

  if (requireDots) {
    const dotsContainer = document.createElement("ul");
    dotsContainer.classList.add("portfolio-dots");
    slider.append(dotsContainer);

    slides.forEach((slide, index) => {
      const dot = document.createElement("li");
      index === 0
        ? dot.classList.add("dot", "dot-active")
        : dot.classList.add("dot");
      dotsContainer.append(dot);
    });
  }

  const dots = requireDots ? document.querySelectorAll(".dot") : false;

  const interval = 2000;

  let active = 0;
  let go;

  const prev = (array, index, strClass) => {
    array[index].classList.remove(strClass);
  };

  const next = (array, index, strClass) => {
    array[index].classList.add(strClass);
  };

  const auto = () => {
    prev(slides, active, "portfolio-item-active");
    dots ? prev(dots, active, "dot-active") : null;

    active++;
    if (active >= slides.length) {
      active = 0;
    }

    next(slides, active, "portfolio-item-active");
    dots ? next(dots, active, "dot-active") : null;
  };

  const start = (interval = 1500) => {
    go = setInterval(auto, interval);
  };

  const stop = () => {
    clearInterval(go);
  };

  slider.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".portfolio-btn, .dot")) {
      return;
    }

    prev(slides, active, "portfolio-item-active");
    dots ? prev(dots, active, "dot-active") : null;

    if (e.target.matches("#arrow-left")) {
      active--;
    } else if (e.target.matches("#arrow-right")) {
      active++;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          active = index;
        }
      });
    }

    if (active >= slides.length) {
      active = 0;
    } else if (active < 0) {
      active = slides.length - 1;
    }

    next(slides, active, "portfolio-item-active");
    dots ? next(dots, active, "dot-active") : null;

    //
  });

  slider.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".portfolio-btn, .dot")) {
        stop();
      }
    },
    true
  );

  slider.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".portfolio-btn, .dot")) {
        start(interval);
      }
    },
    true
  );

  start(interval);
  //
};

export default slider;
