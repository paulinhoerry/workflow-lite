# Workflow Lite

A lite and simple workflow for web projects. Actually I am working for improve this process, then will receives constant updates.

You will need install this dependencies:
- [NodeJS](http://nodejs.org/) - for everything.
- [GulpJS](http://gulpjs.com/) - for automate and stream tasks
- [Pug](https://github.com/pugjs/pug) - Html template engine
- [Stylus](http://learnboost.github.io/stylus/) - Css pre-processor
- [Browsersync](https://www.browsersync.io/) - For automatic reloads and static server


## Getting Started

### Installation

after `Nodejs` installed, you will:

```sh
# Clone this repository
$ git clone git@github.com:paulinhoerry/workflow-lite.git

#open this folder
$ cd workflow-lite

# install gulp globally
$ npm install -g gulp

# install dependencies
$ npm install

```

### Tasks

folder: `./tasks`

- `gulp`: run all tasks and initialize watch for changes and a server
- `gulp js`: compile js files
- `gulp html`: compile pug files
- `gulp css`: compile stylus files
- `gulp server`: inicialize a static server
- `gulp watch`: call for watch files

## Credits

To developer this workflow, I use a few of [Kratos Boilerplate](https://github.com/LFeh/kratos-boilerplate) of [Felipe Fialho](https://github.com/LFeh)

## License

MIT license
