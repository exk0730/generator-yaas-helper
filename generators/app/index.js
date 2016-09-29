'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
    prompting: function () {
        this.log(yosay(
            'Yo! I\'m here to help you set up a new ' + chalk.yellow('feature component') + ' for Yet Another Angular2 Starter!'
        ));

        return this.prompt([{
            type: 'input',
            name: 'featureName',
            message: 'What would you like to call your new feature? Examples: login, registration, dashboard.\n' +
            'Please enter your feature name in "camelCase".',
            required: true
        }]).then(function (p) {
            this.featureName = p.featureName;

            var prompts = [{
                type: 'input',
                name: 'destination',
                message: 'Destination path?',
                default: 'src/app/' + _.kebabCase(this.featureName)
            }, {
                type: 'confirm',
                name: 'smart',
                message: 'Is this a smart component?',
                default: false
            }, {
                type: 'confirm',
                name: 'service',
                message: 'Do you need a service?',
                default: false
            }];

            return this.prompt(prompts).then(function (props) {
                console.log(props);
                this.destination = props.destination;
                this.isSmart = props.smart;
                this.hasService = props.service;
            }.bind(this));
        }.bind(this));
    },

    configureVariables: function () {
        this.className = _.upperFirst(this.featureName);
        this.inCamelCase = _.camelCase(this.featureName);
        this.featureName = _.kebabCase(this.featureName);

        this.base = '_feature';

        //Smart component
        this.actionsPath = this.templatePath('src/smart/' + this.base + '.actions.js');
        this.effectsPath = this.templatePath('src/smart/' + this.base + '.effects.js');
        this.modulePath = this.templatePath('src/smart/' + this.base + '.module.js');
        this.reducerPath = this.templatePath('src/smart/' + this.base + '.reducer.js');

        this.specPath = this.templatePath('src/' + this.base + '.spec.js');
        this.componentPath = this.templatePath('src/' + this.base + '.component.js');
        this.servicePath = this.templatePath('src/' + this.base + '.service.js');
        this.htmlPath = this.templatePath('src/' + this.base + '.html');
        this.indexPath = this.templatePath('src/index.js');
    },

    writing: function () {
        var destination = this.destinationPath(this.destination);

        this.copy(this.componentPath, destination + '/' + this.featureName + '.component.ts');
        this.copy(this.htmlPath, destination + '/' + this.featureName + '.html');
        this.copy(this.specPath, destination + '/' + this.featureName + '.spec.ts');

        if (this.isSmart) {
            this.copy(this.actionsPath, destination + '/' + this.featureName + '.actions.ts');
            this.copy(this.effectsPath, destination + '/' + this.featureName + '.effects.ts');
            this.copy(this.modulePath, destination + '/' + this.featureName + '.module.ts');
            this.copy(this.reducerPath, destination + '/' + this.featureName + '.reducer.ts');
            this.copy(this.indexPath, destination + '/index.ts');
        }

        if (this.hasService) {
            this.copy(this.servicePath, destination + '/' + this.featureName + '.service.ts');
        }
    }
});
