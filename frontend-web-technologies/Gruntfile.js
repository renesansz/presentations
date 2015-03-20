module.exports = function(grunt) {

    'use strict';

    /**
     * Load NPM Task(s)
     */
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    /**
     * Grunt Task Config
     */
    var gruntTask = {

        /**
         * Read `package.json` to access the package name and version
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Grunt Task: jshint
         * 
         * Defines the rules for our linter as well as which files we should check.
         * By default the rules are defined inside `.jshintrc`.
         *
         * To know more about jshint rules,
         * visit their website (www.jshint.com/docs/).
         */
        jshint: {
            options: {
                jshintrc: true
            }
        },

        /**
         * Grunt Task: uglify
         *
         * Javascript minifier
         */
        uglify: {
            dist: {
                options: {
                    sourceMap: true
                }
            }
        },

        /**
         * Grunt Task: compass
         *
         * Sass compiler with Compass support.
         */
        compass: {
            app: {
                options: {
                    sassDir: ['<%= app_files.sass_dir %>'],
                    cssDir: ['<%= app_files.styles_dir %>'],
                    outputStyle: 'compressed',
                    environment: 'development'
                }
            },
            dist: {
                options: {
                    sassDir: ['<%= app_files.sass_dir %>'],
                    cssDir: ['<%= app_files.styles_dir %>'],
                    outputStyle: 'compressed',
                    environment: 'production'
                }
            }
        },

        /**
         * Grunt Task: concurrent
         * 
         * Concurrent Multiple Tasks
         */
        concurrent: {
            dev: [
                'compass:app'
            ],
            dist: []
        },

        /**
         * Grunt Task: connect
         *
         * Runs a localhost in a self grunt server
         */
        connect: {
            options: {
                port: '<%= connect_config.port %>',
                livereload: '<%= connect_config.livereload_port %>',
                hostname: 'localhost'
            },
            livereload: {
                options: {                
                    open: true,
                    base: '<%= app_dir %>'
                }
            }
        },

        /**
         * Grunt Task: watch
         *
         * File/directory watcher task
         */
        watch: {
            options: {
              livereload: true
            },
            /** Watch Files & Execute Live Reload for changes **/
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                ]
            },
            /** Watch Config Files **/
            configFiles: {
                files: ['GruntFile.js', 'grunt.config.js'],
                options: {
                    reload: true
                }
            },
            /** Watch Script Files **/
            scripts: {
                files: [],
                tasks: []
            },
            /** Watch Styles Files **/
            styles: {
                options: {
                  livereload: false
                },
                files: ['<%= app_files.styles_dir %>**/*.css'],
                tasks: []
            },
            /** Watch Sass Files **/
            compass: {
                options: {
                  livereload: false
                },
                files: ['<%= app_files.sass_dir %>**/*.{scss,sass}'],
                tasks: ['compass:app']
            },
        }

    };

    // Grunt Config Variables
    var gruntConf = require('./grunt.config.js');

    // Initialize Grunt Config
    grunt.initConfig(grunt.util._.extend(gruntTask, gruntConf));

    /**
     * =============
     *  GRUNT TASKS
     * =============
     */
    // command: 'grunt'
    grunt.registerTask('default', ['concurrent:dev', 'connect', 'watch']);

};