// Click counter synced across devices via Telegram CloudStorage.
export function initCounter(tg) {
  let count = 0;
  const countEl = document.getElementById("count");

  function render() {
    countEl.textContent = count;
  }

  tg.CloudStorage.getItem("count", function (error, value) {
    if (!error && value) {
      count = Number(value);
      render();
    }
  });

  function addClick() {
    count++;
    render();
    tg.CloudStorage.setItem("count", String(count));
  }

  function reset() {
    count = 0;
    render();
    tg.CloudStorage.removeItem("count");
  }

  document.getElementById("clickBtn").onclick = addClick;
  document.getElementById("counterReset").onclick = reset;
  tg.MainButton.onClick(addClick);
}
