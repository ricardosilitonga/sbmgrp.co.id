module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wiredep');
    
    grunt.initConfig({
        
        concat : {
            options : {
                separator: '\n\n//---------------------------\n',
                banner: '\n\n//---------------------------\n',
            },
            dist : {
                src : ['components/scripts/*.js'],
                dest : 'public_html/js/script.js'
            }
        }, //concat
        
        sass : {
            dist: {
                options : {
                    style: 'expanded'
                },
                files : [{
                    src : 'components/sass/style.scss',
                    dest : 'public_html/css/style.css'
                }]
            }
        }, //sass
        
        watch : {
            css : {
                files : ['components/sass/*.scss'],
                tasks : ['sass'],
            },
            scripts : {
                files : ['components/scripts/*.js'],
                tasks : ['concat'],
            },
            html : {
                files : ['public_html/*.html'],
            }
        }, //watch
        
    }); //init config
    
    
    grunt.registerTask('default', ['concat', 'sass', 'watch']);
    
}; //wrapper function