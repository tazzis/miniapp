// Fills the greeting and the profile screen with the Telegram user's data.
export function fillUser(user) {
  if (!user) return;

  document.getElementById("greeting").textContent =
    "Привет, " + user.first_name + "!";
  document.getElementById("name").textContent =
    user.first_name + " " + (user.last_name || "");
  document.getElementById("username").textContent = user.username
    ? "@" + user.username
    : "";
  if (user.photo_url) {
    document.getElementById("avatar").src = user.photo_url;
  }
  document.getElementById("userId").textContent =
    "Your telegram ID is: " + user.id;
}
