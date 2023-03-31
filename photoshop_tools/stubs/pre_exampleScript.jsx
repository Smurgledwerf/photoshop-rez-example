/*
<javascriptresource>
<name>Do Thing</name>
<category>Example</category>
<about>Do a cool thing with stuff</about>
</javascriptresource>
*/

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// Get the script file from the rez environment
var scriptFile = File($.getenv("REZ_PHOTOSHOP_TOOLS_ROOT") + "/photoshop_tools/scripts/exampleScript.js");
if (!scriptFile.exists){
    // fallback to the script on the server
    if (File.fs == 'Windows'){
        var prefix = '/z/server';
    } else {
        var prefix = '/Volumes/server';
    }
    // a fallback directory where scripts are copied to in case photoshop was launched outside of rez
    scriptFile = File(prefix + '/path/to/photoshop_tools/scripts/exampleScript.js');
}

$.evalFile(scriptFile);

main();

/*
You might think you could use the `#include` syntax, but that can't read variables.
It interprets everything literally, so none of these worked:

#include %REZ_PHOTOSHOP_TOOLS_ROOT%/photoshop_tools/scripts/exampleScript.js
#include $.getenv("REZ_PHOTOSHOP_TOOLS_ROOT") + '/photoshop_tools/scripts/exampleScript.js'
var scriptPath = $.getenv("REZ_PHOTOSHOP_TOOLS_ROOT") + '/photoshop_tools/scripts/exampleScript.js'
#include scriptPath

Fortunately we can evaluate the script file and then run the main function,
which assumes the script's entry point is a function named `main`.
*/
