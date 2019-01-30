// As3Plugin.js
var airSdk = require('@erikyuzwa/node-air-sdk');
var mxmlc = airSdk.bin.mxmlc;
const chalk = require('chalk');
const { spawn } = require('child_process');

class As3Plugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
        compiler.hooks.emit.tapAsync('As3Plugin', (compilation, callback) => {
            console.log(chalk.magenta('starting as3 build...'));
            console.log(this.options);

            var flashArgs = [
                '+configname=air',
                '-compiler.source-path=' + this.options.srcPath,
                '-compiler.strict=true',
                '-compiler.debug=true',
                '-output=' + this.options.output,
                '-swf-version=32',
                '-warnings=true',
                this.options.src
            ];

            // for debugging what args we're passing to mxmlc uncomment the following line
            // console.log(flashArgs.join(' '));

            var mxmlcArgs = [flashArgs.join(' ')];
            const bat = spawn(mxmlc, mxmlcArgs, { shell: true });

            bat.stdout.on('data', (data) => {
                console.log(data.toString());
            });

            bat.stderr.on('data', (data) => {
                console.log(data.toString());
            });

            bat.on('exit', (code) => {
                // any non-zero code means an error
                console.log(`Child mxmlc exited with code ${code}`);
                callback();
            });

        });
    }
}

module.exports = As3Plugin;

