module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/sqript.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/sqript.main.js'],
        dest: 'js/sqript.main.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/style.main.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
  grunt.registerTask('minjs', [''concat', uglify']);


};