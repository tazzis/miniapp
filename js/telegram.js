// The only place that touches window.Telegram directly.
export const tg = window.Telegram.WebApp;
tg.ready();

export const user = tg.initDataUnsafe.user;
