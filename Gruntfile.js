module.exports = function(grunt) {
    grunt.initConfig({
        less:{
            develop: {
                options: {
                    compress: false
                },
                files: {
                    "www/css/style.css": "src/css/less/style.less"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less:develop']);
};