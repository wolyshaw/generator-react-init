'use strict'
const _ = require('lodash')
const path = require('path')
const mkdirp = require('mkdirp')
const extend = require('deep-extend')
const askName = require('inquirer-npm-name')
const Generator = require('yeoman-generator')

module.exports = class extends Generator{
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
		pkg.dependencies = {
			'react': 'latest'
		}
		 this.fs.copyTpl(
			 this.templatePath('README.md'),
			 this.destinationPath('README.md'),
			 { name: this.props.name }
		 )
		console.log(pkg)
		// this.fs.writeJSON(this.destinationPath('package.json'), pkg)
	}
}
