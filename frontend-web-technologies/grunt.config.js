/**
 * This file contains the configuration for Gruntfile.js.
 */
module.exports = {

    /**
     * PROJECT PATH(S)
     */
    app_dir: 'app',
    dist_dir: 'public_html',

    /**
     * SUB-DIRECTORY PATH(S)
     */
    app_files: {
        scripts_dir: 'app/scripts/',
        styles_dir: 'app/styles/',
        sass_dir: 'app/sass/',
    },
    dist_files: {
        styles_dir: 'public_html/styles'
    },

    /**
     * CONNECT TASK OPTIONS
     */
    connect_config: {
        port: 8000,
        livereload_port: 35729
    }

};