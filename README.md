# photoshop-rez-example
Example repo of organizing photoshop scripts with rez

## Scripts
The photoshop scripts are .js (or .jsx) files. I chose javascript instead of the other formats because it is platform-agnostic and (somewhat) standard.
To run the script in photoshop, just go to File -> Scripts -> Do Thing.

These scripts will not be copied to photoshop's scripts directory, they will live wherever your other rez packages do.

## Stubs
All the scripts have corresponding .jsx "stubs" that will be deployed to the Presets/Scripts directory
in photoshop's install directory. Example on windows: C:\Program Files\Adobe\Adobe Photoshop 2023\Presets\Scripts.

This only needs to happen once per script, per computer (per photoshop version if you have multiple).
The only thing these stubs do is find the actual .js script and run it. This allows you to iterate on your .js scripts as much as you want,
without having to copy them to photoshop's scripts directory every single time.

## Dev and Testing
Since the stub is deployed once, all updates will happen in the script.js file. All you need to do is `rez-build --install`,
then go into a rez environment like `rez-env photoshop_tools`, then launch photoshop from the environment.

Make changes to your script.js file, `rez-build --install` again, then run the script in photoshop.
Since the stub relies on the $REZ_PHOTOSHOP_TOOLS_ROOT environment variable to find the script,
it will pick up changes without having to relaunch photoshop every time.

## Fallback
Sometimes artists (or even myself) will launch photoshop normally, or will open a .psd file by double-clicking it.
This will mean that it will not be in a rez environment, and won't have the $REZ_PHOTOSHOP_TOOLS_ROOT environment variable.
To account for this, as part of the release process, I copy the build to a known location on a shared network.
The stubs will fallback to that server location if the environment variable does not exist.
