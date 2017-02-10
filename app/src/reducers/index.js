'use strict'
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
	initializing() {
		this.props = {}
	}
	writing() {
		this.fs.copyTpl(
			this.templatePath('index.js'),
			this.destinationPath('src/reducers/index.js')
		)
	}
}
