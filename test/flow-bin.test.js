/**
 * Copyright(c) cnpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (https://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const coffee = require('coffee');

describe('test/flow-bin.test.js', () => {
  const tmp = path.join(__dirname, 'fixtures', 'tmp');

  function cleanup() {
    rimraf.sync(tmp);
  }

  beforeEach(() => {
    cleanup();
    mkdirp.sync(tmp);
  });
  afterEach(cleanup);

  it('should install flow-bin from china mirror', done => {
    coffee.fork(require.resolve('../bin/install.js'), [
      '-c',
      'flow-bin',
    ], {
      cwd: tmp,
    })
    // .debug()
    .expect('stdout', /\[flow\-bin@\*\] installed at/)
    .expect('code', 0)
    .end(done);
  });
});
