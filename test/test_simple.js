'use strict';

const nc = require('./../build/Release/nodeaffinity');
const assert = require('assert');
const { spawn } = require('child_process');

function getMask(affinity) {
  if (affinity > 1) {
    return 1;
  } else {
    return 2;
  }
}

function checkOwnProcess() {
  const affinity = nc.getAffinity();
  const mask = getMask(affinity);
  const newAffinity = nc.setAffinity(mask);
  assert.equal(newAffinity, mask);
  assert.equal(nc.getAffinity(), mask);
}

function checkChildProcess(pid) {
  const affinity = nc.getAffinity(pid);
  const mask = getMask(affinity);
  const newAffinity = nc.setAffinity(mask, pid);
  assert.equal(newAffinity, mask);
  assert.equal(nc.getAffinity(pid), mask);
}

(function() {
  checkOwnProcess();

  const child = spawn('echo');
  checkChildProcess(child.pid);
}());