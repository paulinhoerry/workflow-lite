'use strict';

const gulp        = require('gulp');
const plugins     = require('gulp-load-plugins')();
const config      = require('./config.json');


// Server Task
require(config.tasksPath + '/server')(gulp, plugins, config);

// PUG compilation
require(config.tasksPath + '/html')(gulp, plugins, config);

// CSS compilation
require(config.tasksPath + '/css')(gulp, plugins, config);

// JS compilation
require(config.tasksPath + '/js-compile')(gulp, plugins, config);

// Watch Task
require(config.tasksPath + '/watch')(gulp, plugins, config);

// Default Task
require(config.tasksPath + '/default')(gulp, plugins, config);
