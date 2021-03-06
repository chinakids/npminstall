/**
 * Copyright(c) cnpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   dead_horse <dead_horse@qq.com>
 */

'use strict';

/**
 * Module dependencies.
 */

const debug = require('debug')('npminstall:link');
const utils = require('./utils');
const path = require('path');

module.exports = function* link(parentDir, pkg, realDir) {
  const linkDir = path.join(parentDir, 'node_modules', pkg.name);
  yield utils.mkdirp(path.dirname(linkDir));
  const relative = yield utils.forceSymlink(realDir, linkDir);
  debug('%s@%s link %s => %s', pkg.name, pkg.version, linkDir, relative);
};
