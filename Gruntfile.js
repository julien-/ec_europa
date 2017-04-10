/**
 * @file
 * Tasks for building the styleguide an css.
 */

'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['**/*.{scss,sass}', 'assets/sass/**/*.html'],
        tasks: ['clean', 'sass', 'shell', 'copy:main'],
        options: {
          livereload: true
        }
      }
    },
    clean: ['styleguide/assets'],
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/europa_styleguide.css': 'assets/sass/styleguide.scss',
          'assets/css/style-sass-base.css': 'assets/sass/app_base.scss',
          'assets/css/style-sass-components.css' : 'assets/sass/app_components.scss'
        }
      }
    },
    shell: {
      kss: {
        command: './node_modules/.bin/kss --config kss-config.json'
      }
    },
    copy: {
      main: {
        files: [
          // Includes files within path and its sub-directories.
          {expand: true, src: ['assets/images/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/css/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/fonts/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/js/**'], dest: 'styleguide/assets/public/'},
          {expand: true, cwd: 'styleguide/public/js/', src: 'jquery.once.js', dest: 'styleguide/assets/public/js/'},
          {expand: true, cwd: 'styleguide/public/js/', src: '**', dest: 'styleguide/assets/public/js/'},
          {expand: true, cwd: 'assets/bootstrap-sass/js/bootstrap/', src: 'collapse.js', dest: 'styleguide/assets/public/js/components/'}
        ]
      },
      all: {
        files: [
          // Includes files within path and its sub-directories.
          {expand: true, src: ['assets/sass/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/bootstrap-sass/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/bootstrap/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/images/**'], dest: 'styleguide/assets/public/'},
          {expand: true, src: ['assets/css/**'], dest: 'styleguide/assets/public/'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('styleguide', ['clean', 'sass', 'shell', 'copy:main']);
  grunt.registerTask('copyall', ['copy:all']);
  grunt.registerTask('kss', ['shell']);
};
