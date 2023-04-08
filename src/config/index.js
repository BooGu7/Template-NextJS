const alpha = require('./alpha');
const local = require('./local');
const beta = require('./beta');
const prod = require('./prod');

const env = process.env.BUILD_ENV;

const envObj = {
  local: { ...local },
  alpha: { ...alpha },
  beta: { ...beta },
  prod: { ...prod },
};

/**
 * @type {typeof prod}
 **/
module.exports = envObj[env || 'local'];
