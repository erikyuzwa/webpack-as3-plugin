# webpack-as3-plugin

This plugin for Webpack is an experiment to compile some ActionScript `.as` files
with the help of `mxmlc`.

## installation 

```
 npm install --save-dev webpack-as3-plugin
```

or

```
 yarn add -D webpack-as3-plugin
```

## requirements

This plugin requires at least Node v6. But otherwise, should accept Webpack versions (1, 2, 3, 4).

## usage

```
// webpack.config.js
const ActionScriptPlugin = require('webpack-as3-plugin');

module.exports = {

    // snip - regular webpack loaders configuration

    // update the plugins [] with the plugin
    plugins: [
        new ActionScriptPlugin({
            src: './src/com/wazooinc/Main.as',
            srcPath: './src/',
            output: path.join('dist/main.swf')
        })
    ]

};

```

and you're done! Some helpful console logging should alert you of any issues.

Check out the examples folder for some more examples.

## options

Pass these into the constructor, as an object.
```
 const swfBuild = new WebpackAs3Plugin(options);
```

`options.src`

Type: `String`

The relative path to the root `.as` source file.

`options.srcPath`

Type: `String`

The relative folder name corresponding to the root of the source.

`options.output`

Type: `String`

The relative output folder and output file name of the generated `SWF`.


## mxmlc command line switches

a re-posting of this [gist](https://gist.github.com/ngs/4147646) - thanks to [@ngs](https://github.com/ngs)

```
Adobe Flex Compiler (mxmlc)
Version 4.6.0 build 23201
Copyright (c) 2004-2011 Adobe Systems, Inc. All rights reserved.

-benchmark
-compiler.accessible
-compiler.actionscript-file-encoding <string>
-compiler.compress
-compiler.context-root <context-path>
-compiler.debug
-compiler.enable-runtime-design-layers
-compiler.extensions.extension [extension] [parameters] [...]
-compiler.external-library-path [path-element] [...]
-compiler.fonts.advanced-anti-aliasing
-compiler.fonts.flash-type
-compiler.fonts.max-glyphs-per-face <string>
-compiler.include-libraries [library] [...]
-compiler.incremental
-compiler.library-path [path-element] [...]
-compiler.locale [locale-element] [...]
-compiler.minimum-supported-version <string>
-compiler.mobile
-compiler.mxml.compatibility-version <version>
-compiler.mxml.minimum-supported-version <string>
-compiler.namespaces.namespace [uri] [manifest] [...]
-compiler.omit-trace-statements
-compiler.optimize
-compiler.preloader <string>
-compiler.report-invalid-styles-as-warnings
-compiler.services <filename>
-compiler.show-actionscript-warnings
-compiler.show-binding-warnings
-compiler.show-invalid-css-property-warnings
-compiler.show-shadowed-device-font-warnings
-compiler.show-unused-type-selector-warnings
-compiler.source-path [path-element] [...]
-compiler.strict
-compiler.theme [filename] [...]
-compiler.use-resource-bundle-metadata
-compiler.verbose-stacktraces
-framework <string>
-help [keyword] [...]
-include-resource-bundles [bundle] [...]
-licenses.license <product> <serial-number>
-load-config <filename>
-metadata.contributor <name>
-metadata.creator <name>
-metadata.date <text>
-metadata.description <text>
-metadata.language <code>
-metadata.localized-description <text> <lang>
-metadata.localized-title <title> <lang>
-metadata.publisher <name>
-metadata.title <text>
-output <filename>
-runtime-shared-libraries [url] [...]
-runtime-shared-library-path [path-element] [rsl-url] [policy-file-url] [rsl-url] [policy-file-url]
-static-link-runtime-shared-libraries
-swf-version <int>
-target-player <version>
-tools-locale <string>
-use-direct-blit
-use-gpu
-use-network
-version
-warnings
```

