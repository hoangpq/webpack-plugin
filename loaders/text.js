var fs = require('fs');

module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;
  const value = fs.readFileSync(this.resourcePath, 'utf8').toString();
  return `module.exports = ${JSON.stringify(value)}`;
};
module.exports.raw = true;