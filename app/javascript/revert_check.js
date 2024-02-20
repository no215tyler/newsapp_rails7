const revertCheck = () => {
  const checkButtons = document.querySelectorAll(".article-check-button");

  checkButtons.forEach((checkButton) => {
    checkButton.addEventListener("click", () => {
      const articleId = checkButton.getAttribute("data");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/checks/revert/${articleId}`, true);
      XHR.send();
      XHR.onload = () => {
        checkButton.remove();
      };
    });
  });
};
window.addEventListener("turbo:load", revertCheck);
