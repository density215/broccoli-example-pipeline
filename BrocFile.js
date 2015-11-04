/**
 * Created by jasper on 18-02-15.
 */

var esTranspiler = require('broccoli-es6modules');
var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-sourcemap-concat');
var sieve = require('broccoli-file-sieve');

var appJs = 'app';
var appHtml = 'app';
var jquery = 'node_modules/jquery/dist';
var loader = 'node_modules/loader.js';

appJs = sieve(appJs,
    {
        files: [
            '**/*js'
        ]
    }
);

jquery = sieve(jquery,
    {
        files: [
            '**/*jquery.js'
        ]
    });

loader = sieve(loader, {files: ['loader.js']});

appHtml = sieve(appHtml,
    {
        files: [
            '**/*html'
        ]
    }
);

appJs = new esTranspiler(appJs, {
    format: 'namedAmd'
    /*bundleOptions: {
     entry: 'index.js',
     name: 'testapp'
     }*/
});

appJs = mergeTrees([appJs, loader, jquery]);

appJs = concat(appJs, {
    inputFiles: [
        'loader.js',
        '**/*.js'
    ],
    outputFile: '/testapp.js'
});

module.exports = mergeTrees([appJs, appHtml]);
