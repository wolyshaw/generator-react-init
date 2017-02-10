'use strict'
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
	initializing() {
		this.props = {}
	}
	writing() {
		this.fs.copyTpl(
			this.templatePath('common.css'),
			this.destinationPath('src/static/common.css')
		)
		this.fs.copyTpl(
			this.templatePath('index_default.html'),
			this.destinationPath('src/static/index_default.html')
		)
	}
}
