const focus = () => {
  const articles = document.querySelectorAll(".article");

  articles.forEach(function (article) {
    article.addEventListener("mouseover", function () {
      this.setAttribute(
        "style",
        "box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.5)"
      );
    });

    article.addEventListener("mouseout", function () {
      this.removeAttribute("style");
    });
  });
};

window.addEventListener("turbo:load", focus);
