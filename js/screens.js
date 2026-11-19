// Screen switching: only the screen with class "active" is visible.
export function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function (screen) {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

export function initNavigation() {
  document.getElementById("toProfile").onclick = function () {
    showScreen("profile");
  };
  document.getElementById("toMain").onclick = function () {
    showScreen("main");
  };
}
