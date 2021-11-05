import {URL} from 'url'; //
import tapeTest from 'tape';

function getTest(metaUrl) {
  const modulePath = new URL('', metaUrl).pathname;
  var moduleName = modulePath.split('/').slice(-2, -1)[0];

  var test = function(name, fn) {
    tapeTest('[' + moduleName + '] ' + name, fn);
  };

  test.only = function(name, fn) {
    tapeTest.only('[' + moduleName + '] ' + name, fn);
  };
  return test;
};

export {getTest};

