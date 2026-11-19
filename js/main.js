// Entry point: reads top to bottom as the app's startup sequence.
import { tg, user } from "./telegram.js";
import { showVersion, checkForUpdate } from "./version.js";
import { fillUser } from "./profile.js";
import { initNavigation } from "./screens.js";
import { initCounter } from "./counter.js";

showVersion();
checkForUpdate();

tg.MainButton.setText("+1");
tg.MainButton.show();

fillUser(user);
initNavigation();
initCounter(tg);
