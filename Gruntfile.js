module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'style.css': 'style.scss'
        }
      }
    },
    jade: {
      dist: {
        options: {
          pretty: true,
          data: require('./data.json')
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
        files: ['views/*.jade', 'data.json', 'scripts/*.js'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      }
    }
  })

  
  grunt.registerTask('default', ['sass', 'jade', 'watch'])

}
