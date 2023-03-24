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
    scriptFile = File(prefix + '/path/to/photoshop/scripts/exampleScript.js');
}

$.evalFile(scriptFile);

main();
