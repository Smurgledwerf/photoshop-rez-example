/*
Example script.
*/

// If you have a script with common utility functions in a relative directory, you can do this to include it:
#includepath "./"
// this will give us the "utils" namespace
#include "common_utils.js"
// For some reason `#include "./common_utils.js"` does not work, and without the `#includepath` line
// it will only look in photoshop's scripts directory

/**
 * The script stub will call this main function when executed.
 */
function main(){
    var doc = app.activeDocument;
    utils.annoy();
}
