const path = require('path')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
	initializing() {
		this.props = {
			package: {},
			path: ''
		}
	}
	info() {
		this.log(`this react project strat install`)
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
			.then(props => Object.assign(this.props.package, props))
	}

	writing() {
		let pkg = Object.assign({}, this.props.package)
		pkg.keywords = this.props.package.keywords.split(' ') || []
		this.fs.copy(path.join(__dirname, 'templates', 'gitignore'), '.gitignore')
		this.fs.copy(path.join(__dirname, 'templates', 'README.md'), 'README.md')
		this.fs.copy(path.join(__dirname, 'templates', 'server.js'), 'server.js')
		this.fs.copy(path.join(__dirname, 'templates', 'config_default.js'), 'config_default.js')
		this.fs.copy(path.join(__dirname, 'templates', 'webpack.config.js'), 'webpack.config.js')
		this.fs.copy(path.join(__dirname, 'templates', 'webpack.config.dev.js'), 'webpack.config.dev.js')
		this.fs.copy(path.join(__dirname, 'templates', 'src/'), 'src/')

		pkg.scripts = {
			dev: 'webpack --config ./webpack.config.dev.js && node server.js',
			build: 'webpack'
		}
		this.fs.writeJSON(this.destinationPath('package.json'), pkg)
	}

	install() {
		this.npmInstall(['react', 'react-dom', 'history', 'redux', 'bundle-loader', 'react-router-dom', 'redux-thunk', 'isomorphic-fetch', 'react-redux', 'prop-types'], { 'save': true })
		this.npmInstall(['webpack', 'express', 'compression', 'babel-core', 'babel-loader', 'babel-preset-es2015', 'babel-preset-react', 'webpack-dev-middleware', 'webpack-hot-middleware', 'html-webpack-plugin', 'http-proxy-middleware', 'extract-text-webpack-plugin', 'url-loader', 'style-loader', 'css-loader', 'file-loader', 'less', 'less-loader'], { 'saveDev': true })
	}

	end() {
		this.log(`project create complete`)
	}
}
