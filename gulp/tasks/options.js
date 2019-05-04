var conf = require('../config.json');
var minimist = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: 'local'}
};
var options = minimist(process.argv.slice(2), knownOptions);
var optionsReturn = {};
optionsReturn.env = options.env;
optionsReturn.src = conf.base.compile + '/**/*';
optionsReturn.host = '';
optionsReturn.dest = '';
optionsReturn.apiUrl = '';

switch(options.env) {
    case 'prod':
        optionsReturn.apiUrl = conf.env.prod.api_url;
        optionsReturn.src = conf.base.compile + '/**/*';
        optionsReturn.host = '';
        optionsReturn.dest = '';
        break;
    case 'dev':
        optionsReturn.apiUrl = conf.env.dev.api_url;
        optionsReturn.src = conf.base.build + '/**/*';
        optionsReturn.host = '';
        optionsReturn.dest = '';
        break;
    case 'mock':
        optionsReturn.apiUrl = conf.env.mock.api_url;
        optionsReturn.src = conf.base.compile + '/**/*';
        optionsReturn.host = '';
        optionsReturn.dest = '';
        break;
    default:
        optionsReturn.apiUrl = conf.env.dev.api_url;
        optionsReturn.src = conf.base.compile + '/**/*';
        optionsReturn.host = '';
        optionsReturn.dest = '';
        break;
}

module.exports = optionsReturn;
