const btn = document.querySelectorAll(".btn");
const container = document.querySelectorAll(".container--2");

//multi-thread looping hoo rahey hai
btn.forEach(function (el) {
  console.log(el);
  el.addEventListener("click", function (e) {
    const versionNumber = e.target.dataset.versionNumber;
    console.log(versionNumber);
    container.forEach(function (el) {
      console.log(el);
      if (el.classList.contains(`content-${versionNumber}`)) {
        el.classList.add("active");
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
        el.classList.remove("active");
      }
    });
  });
});

/// ⭐⭐⭐⭐⭐ Excellent work
