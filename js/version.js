// Bump this on every deploy. The update check below reads this exact line.
export const APP_VERSION = "0.1.1";

// Every file of the app. When a new version is detected, these are
// re-downloaded (bypassing the HTTP cache) before the page reloads,
// so Telegram does not keep running stale JS/CSS.
const FILES = [
  "css/style.css",
  "js/main.js",
  "js/telegram.js",
  "js/version.js",
  "js/profile.js",
  "js/screens.js",
  "js/counter.js",
];

export function showVersion() {
  document.getElementById("version").textContent = "v" + APP_VERSION;
}

export function checkForUpdate() {
  fetch(new URL("js/version.js", location.href) + "?t=" + Date.now(), {
    cache: "no-store",
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      const match = text.match(/APP_VERSION = "(\d[^"]*)"/);
      if (
        !match ||
        match[1] === APP_VERSION ||
        location.search === "?v=" + match[1]
      ) {
        return;
      }

      return Promise.all(
        FILES.map(function (file) {
          return fetch(new URL(file, location.href), { cache: "reload" });
        })
      ).then(function () {
        location.replace(location.pathname + "?v=" + match[1] + location.hash);
      });
    })
    .catch(function () {});
}
