const path = require('path');

module.exports = {
  /* istanbul ignore next */
  process(filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
