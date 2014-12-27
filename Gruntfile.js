module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.scss'
        }
      }
    },
    jade: {
      dist: {
        options: {
          pretty: true,
          data: function(dest, src) {
            // Return an object of data to pass to templates
            return require('./data.json');
          }
        },
        files: {
          "index.html": ["views/index.jade"]
        }
      }
    },
    watch: {
      styles: {
        files: 'style.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      views: {
        files: 'views/*.jade',
        tasks: ['jade'],
        options: {
          livereload: true
        }
      }
    }
  })

  
  grunt.registerTask('default', ['sass', 'jade', 'watch'])

}
