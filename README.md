**example broccoli pipeline with ES6 modules w/ loader.js and jquery w/ npm**

#Requirements#

- node.js >12.0

#Installation#

```
cd <PATH>/broccoli-example-pipeline
npm install
```

probably setting up broccoli globally is a good idea with `npm install -g broccoli`.

#Usage#

`broccoli serve` sets up a dev node server that does all the build steps on the fly and that can auto-reload on changes (with watchman, not included in this example).

`broccoli build production` builds the the production files in the production folder. This example does concatenating everything in one js file, but no minifying.

This example pipeline includes an ES6 modules transpiler (broccoli-es6modules), loader.js (for loading the transpiled modules) and jquery loaded through npm. It does NOT include transpiling ES6 syntax other than the modules.

Broccoli has lots of plugins for various tasks like css preprocessing, minifying, ES6 transpiling etc.
