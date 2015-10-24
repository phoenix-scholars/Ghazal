module.exports = function(grunt) {
  grunt
          .initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {
              site: {
                files: [{
                  expand: true,
                  cwd: 'src/',
                  src: ['index.php.default', 'config.php.default', 'urls.php'],
                  dest: 'dest/'
                }, {
                  expand: true,
                  cwd: 'src/templates/',
                  src: ['**'],
                  dest: 'dest/templates'
                }, {
                  expand: true,
                  cwd: 'src/assets/',
                  src: ['wiki/**', 'css/**', 'img/**', 'font/**'],
                  dest: 'dest/assets'
                }, ],
              },
              libs: {
                files: [
                    {
                      expand: true,
                      cwd: 'src/assets/lib/angular',
                      src: ['angular.js', 'angular.min.js',
                          'angular.min.js.gzip', 'angular.min.js.map'],
                      dest: 'dest/assets/js'
                    },
                    {
                      expand: true,
                      cwd: 'src/assets/lib/angular-animate',
                      src: ['angular-animate.min.js',
                          'angular-animate.min.js.map'],
                      dest: 'dest/assets/js'
                    },
                    {
                      expand: true,
                      cwd: 'src/assets/lib/angular-touch',
                      src: ['angular-touch.min.js', 'angular-touch.min.js.map'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/angular-ui-router/release',
                      src: ['angular-ui-router.min.js'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/angular-validation-match/dist/',
                      src: ['**'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/angular-translate',
                      src: ['angular-translate.min.js'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/angular-xeditable/dist/js',
                      src: ['**'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/angular-xeditable/dist/css',
                      src: ['**'],
                      dest: 'dest/assets/css'
                    },
                    {
                      expand: true,
                      cwd: 'src/assets/lib/jquery/dist',
                      src: ['jquery.min.js', 'jquery.min.map'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/materialize/dist/js',
                      src: ['**'],
                      dest: 'dest/assets/js'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/materialize/dist/font',
                      src: ['**'],
                      dest: 'dest/assets/font'
                    }, {
                      expand: true,
                      cwd: 'src/assets/lib/materialize/dist/css',
                      src: ['**'],
                      dest: 'dest/assets/css'
                    }, ],
              },
              main: {
                files: [{
                  expand: true,
                  cwd: 'src/main',
                  src: ['*.html', 'css/**', 'font/**', 'img/**'],
                  dest: 'dest/main'
                }, {
                  expand: true,
                  cwd: 'src/help',
                  src: ['*.html', 'css/**', 'font/**', 'img/**'],
                  dest: 'dest/help'
                }, {
                  expand: true,
                  cwd: 'src/profile',
                  src: ['*.html', 'css/**', 'font/**', 'img/**'],
                  dest: 'dest/profile'
                }, ],
              },
            },
            uglify: {
              options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
              },
              libs: {
                options: {
                  mangle: false,
                },
                files: {
                  'dest/assets/js/markdown.min.js': 'src/assets/lib/markdown/lib/markdown.js',
                  'dest/assets/js/angular-materialize.min.js': 'src/assets/lib/angular-materialize/src/angular-materialize.js',
                }
              },
              modules: {
                options: {
                  mangle: false,
                },
                files: {
                  'dest/module/pluf.min.js': 'src/module/pluf.js',
                  'dest/module/pluf.admin.min.js': 'src/module/pluf.admin.js',
                  'dest/module/pluf.saas.min.js': 'src/module/pluf.saas.js',
                  'dest/module/pluf.help.min.js': 'src/module/pluf.help.js',
                  'dest/module/pluf.jahanjoo.min.js': 'src/module/pluf.jahanjoo.js',
                }
              },
              main: {
                options: {
                  mangle: false,
                },
                files: {
                  'dest/main/app.min.js': ['src/main/module.js',
                      'src/main/routes.js', 'src/main/controller.*.js'],
                  'dest/help/app.min.js': ['src/help/module.js',
                      'src/help/routes.js', 'src/help/controller.*.js'],
                  'dest/profile/app.min.js': ['src/profile/module.js',
                      'src/profile/routes.js', 'src/profile/controller.*.js'],
                }
              },
            }
          });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);
};