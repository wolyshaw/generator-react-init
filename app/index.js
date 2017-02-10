'use strict'
const path = require('path')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
	initializing() {
		this.props = {}
	}
	prompting() {
		let prompts = [
			{
				type: 'string',
				name: 'name',
				message: 'you react project name',
				default: path.basename(process.cwd())
			},
			{
				type: 'string',
				name: 'author',
				message: 'you react project author',
				default: ''
			},
			{
				type: 'string',
				name: 'main',
				message: 'you react project main file',
				default: 'index.js'
			},
			{
				type: 'string',
				name: 'license',
				message: 'you react project license',
				default: 'ISC'
			},
			{
				type: 'string',
				name: 'version',
				message: 'you react project version',
				default: '1.0.0'
			},
			{
				type: 'string',
				name: 'keywords',
				message: 'you react project keywords',
				default: ''
			},
			{
				type: 'string',
				name: 'description',
				message: 'you react project description',
				default: ''
			}
		]
		return this.prompt(prompts)
			.then(props => {
				Object.assign(this.props, props)
			})
	}

	writing() {
		let pkg = Object.assign({}, this.props)
		pkg.keywords = this.props.keywords.split(' ') || []
		 this.fs.copyTpl(
			 this.templatePath('README.md'),
			 this.destinationPath('README.md'),
			 { name: this.props.name }
		 )
		 this.fs.copyTpl(
			 this.templatePath('.gitignore'),
			 this.destinationPath('.gitignore')
		 )
		 this.fs.copyTpl(
			 this.templatePath('server.js'),
			 this.destinationPath('server.js')
		 )
		 this.fs.copyTpl(
			 this.templatePath('config_default.js'),
			 this.destinationPath('config_default.js')
		 )
		 this.fs.copyTpl(
			 this.templatePath('webpack.config.js'),
			 this.destinationPath('webpack.config.js')
		 )
		 this.fs.copyTpl(
			 this.templatePath('webpack.config.dev.js'),
			 this.destinationPath('webpack.config.dev.js')
		 )
		 pkg.scripts = {
			 dev: 'webpack --config ./webpack.config.dev.js && node server.js',
			 build: 'webpack'
		 }
		 this.fs.writeJSON(this.destinationPath('package.json'), pkg)
	}

	default() {
		this.composeWith(require.resolve('./src'))
	}

	install() {
		this.npmInstall(['react', 'react-dom', 'redux', 'react-router', 'redux-thunk', 'isomorphic-fetch', 'express', 'react-redux'], { 'save': true })
		this.npmInstall(['webpack', 'compression', 'babel-core', 'babel-loader', 'babel-preset-es2015', 'babel-preset-react', 'webpack-dev-middleware', 'webpack-hot-middleware', 'html-webpack-plugin'], { 'saveDev': true })
	}
}
