import {thea} from "./module/config.js";
import theaItemSheet from "./module/sheets/theaItemSheet.js";

Hooks.once("init", function () {
    console.log("thea | Start Thea");

    CONFIG.thea = thea;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("thea", theaItemSheet, { makeDefault: true});
});