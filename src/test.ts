// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * Initialize
 */
declare const require: {
  /**
   * 
   * @param path initial path
   * @param deep of type boolean
   * @param filter 
   */
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

/**
 * First, initialize the Angular testing environment.
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

/**
 * Then we find all the tests.
 */
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.

context.keys().forEach(context);
