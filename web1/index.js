const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((item, i) => {
  const itemNum = movielists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  item.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNum - (3 + clickCounter) + (4 - ratio) > 0) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielists[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const item = document.querySelectorAll(
  ".container,.movie-list_item__title,.movie-list_item__desc,.navbar-container,.menu-list-item,.sidebar,.left-menu-icon,.move-list_title,.arrow,.toggle"
);

ball.addEventListener("click", () => {
  item.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

console.log();
