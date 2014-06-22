'use strict';

var request = require('request');

module.exports = function (grunt) {
    var reloadPort = 35729, files;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        develop: {
            server: {
                file: 'server.js'
            }
        },
        watch: {
            options: {
                nospawn: true,
                livereload: reloadPort
            },
            js: {
                files: [
                    'server.js',
                    '../client/src/*.js',
                    '../client/src/scripts/**/*.js',
                    '../client/src/styles/**/*.js',
                    'config/*.js',
                    '../client/test/**/*.js'

                ],
                tasks: ['develop', 'delayed-livereload', 'test']
            },
            jade: {
                files: ['views/**/*.jade'],
                options: { livereload: reloadPort }
            }
        },
        karma: {
            unit: {
                configFile: '../client/karma.conf.js'
            }
        },

        protractor: {
            options: {
                keepAlive: true,
                configFile: "../client/protractor.conf.js"
            },
            run: {}
        }
    });

    grunt.config.requires('watch.js.files');
    files = grunt.config('watch.js.files');
    files = grunt.file.expand(files);

    grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
        var done = this.async();
        setTimeout(function () {
            request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function (err, res) {
                var reloaded = !err && res.statusCode === 200;
                if (reloaded)
                    grunt.log.ok('Delayed live reload successful.');
                else
                    grunt.log.error('Unable to make a delayed live reload.');
                done(reloaded);
            });
        }, 500);
    });

    grunt.loadNpmTasks('grunt-develop');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['develop', 'watch']);

    grunt.registerTask('test', [
        'karma',
        'protractor:run'
    ]);
};
