'use strict';

module.exports = function (grunt) {


    if (grunt.option('help')) {
        // Load all tasks so they get output in the help.
        require('load-grunt-tasks')(grunt);
    } else {
        // Load only the task that is being called by using jit-grunt.
        require('jit-grunt')(grunt);
    }

    grunt.initConfig({

        // Project settings
        config: {
            // configurable paths
            app: 'www',
            sass: 'sass',
            lib: '<%= config.app %>/lib',
            tmp: '.tmp',
        },

        watch: {
            options: {
                livereload: '<%= livereloadPort %>'
            },
            livereload: {
                files: [
                    '<%= config.app %>/**/*.html',
                    '<%= config.app %>/js/**/*.js',
                    '<%= config.app %>/css/*.css',
                    '<%= config.app %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= config.sass %>',
                cssDir: '<%= config.app %>/css',
                fontsDir: '<%= config.app %>/fonts',
                relativeAssets: true,
                raw: 'Sass::Script::Number.precision = 10\n',
                assetCacheBuster: false
            },
            compile: {
                // A default target to compile. Requires `options` object.
                options: {}
            },
            force: {
                // A target to force compilation.
                options: {
                    force: true
                }
            },
            watch: {
                // Runs `compass watch` on the cli.
                options: {
                    watch: true
                }
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: process.env.DEV_PORT || 9000,
                hostname: process.env.DEV_HOSTNAME || '0.0.0.0',
                livereload: '<%= livereloadPort %>'
            },
            dev: {
                options: {
                    open: true,
                    base: '<%= config.app %>'
                }
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            serve: [
                'compass:watch',
                'watch:livereload',
                'connect:dev:keepalive'
            ]
        }

    });

    grunt.config.set('livereloadPort', grunt.option('livereload'));

    grunt.registerTask('serve', 'Develop on lam-test', [
        'concurrent:serve'
    ]);

    grunt.registerTask('default', ['serve']);
};
