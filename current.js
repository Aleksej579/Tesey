var config		= require('./theme-config.js');
var THEME_NAME  = config.name;

module.exports = {
    css: [
        // THEME_NAME + '/css/common.css',
        // THEME_NAME + '/css/front.css'
        THEME_NAME + '/css/**'
    ],
    js: [
        // THEME_NAME + '/js/**'
    ],
    sass: [
        THEME_NAME + '/sass/**', //закоментировать если будет работать несколько человек
    ]
}