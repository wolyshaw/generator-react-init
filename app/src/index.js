'use strict'
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
	initializing() {
		this.props = {}
	}
	writing() {
		this.fs.copyTpl(
			this.templatePath('index.js'),
			this.destinationPath('src/index.js')
		)
	}
	default() {
		this.composeWith(require.resolve('./static'))
		this.composeWith(require.resolve('./reducers'))
		this.composeWith(require.resolve('./actions'))
		this.composeWith(require.resolve('./components'))
		this.composeWith(require.resolve('./containers'))
	}
}
