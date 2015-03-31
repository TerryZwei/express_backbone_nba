/*add grunt*/
module.exports = function(grunt){
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n'+
                ' * <%= pkg.name%>: v<%= pkg.version%>\n'+
                ' * <%= pkg.homepage%>\n' +
                ' * /\n',
        jshint: {
            option: {
                '-W069':true,// *is better written in dot notation
                '-W033':true,//  Missing semicolon , section end missing ';'
                '-W084':true,// ignore UTIL.OS.detect device warning
                '-W030':true,// ignore UTIL.OS.detect device warning
                '-W041':true,// Use '!==' to compare with 'null'.
                '-W058':true
            },
            files: [ 'static/javascripts/nba.js']
        },
        watch:{
            options:{
                interval: 1000
            },
            main:{
                files:['static/javascripts/*.js'],
                tasks:['jshint']
            },
            less:{
                files:{
                    files:['static/stylesheets/*.less'],
                    tasks:['less']
                }
            }
        },
        less:{
            main:{
                option:{
                    paths:["static/stylesheets"],
                    compress: true
                },
                files:{
                    'static/stylesheets/common/common.css':'static/stylesheets/common/common.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test',['jshint','less','watch']);
};