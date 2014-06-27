module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    mochacli: {
      all: ['test/*.js']
    },

    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
        'test/*.js',
        'index.js'
      ]
    }

  });
};

grunt.registerTask('test', ['jshint', 'mochacli']);
grunt.registerTask('default', ['test']);