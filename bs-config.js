
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
/* eslint-disable */
module.exports = {
    'ui': {
        'port': 3001
    },
    'files': ['index.html', 'styles.css','components/**'],
    'watchEvents': [
        'change'
    ],
    'ignore': [],
    'watchOptions': {
        'ignoreInitial': true
    },
    'server': {
        'baseDir': './',
        'index': 'index.html'
    },
    'proxy': false,
    'port': 3000
};