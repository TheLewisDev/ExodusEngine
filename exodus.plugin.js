/**
 * @name ExodusEngine 
 * @author LewisDev
 * @authorId 561960121052430370
 * @authorLink https://discord.bio/p/lewisdev
 * @version 0.0.1
 * @description Exodus Engine is a library with various functions.
 * @invite SbPgGkxYyt
 * @donate https://www.paypal.com/donate?hosted_button_id=9APSGG5YFQCLU
 */

const config = {
    "info": {
        "name": "ExodusEngine",
        "author": "LewisDev",
        "version": "0.0.1",
        "description": "Exodus Engine is a library with various functions."
    },
    "changeLog": {
        "improved": {
            "Exodus Engine": "Patched Buggy Functions"
        }
    }
};

module.exports = class ExodusEngine {
    load() {

    } // Optional function. Called when the plugin is loaded in to memory

    start() {
        alert("Exodus Loaded with no errors.")
    } // Required function. Called when the plugin is activated (including after reloads)
    stop() {

    } // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}