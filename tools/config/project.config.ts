import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/font-awesome/fonts/**',
    'node_modules/mdi/fonts/**'
  ];

  constructor() {
    super();
    this.APP_TITLE = 'Admin';
    this.APP_THEME = 'theme-red';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'mdi/css/materialdesignicons.min.css', inject: true },
      { src: 'node-waves/dist/waves.min.css', inject: true },
      { src: 'animate.css/animate.min.css', inject: true },
      { src: '@angular/material/prebuilt-themes/indigo-pink.css', inject: true },
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'node-waves/dist/waves.min.js', inject: 'libs' },
      { src: 'hammerjs/hammer.min.js', inject: 'libs' },
      { src: 'moment/moment.js', inject: 'libs' },
      { src: 'moment-timezone/builds/moment-timezone-with-data.js', inject: 'libs' },
      { src: 'jquery-countto/jquery.countTo.js', inject: 'libs' }
      // {src: 'materialize-css/dist/css/materialize.min.css', inject: true},
      // {src: 'materialize-css/dist/js/materialize.min.js', inject: 'libs'},
      // {src: 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css', inject: true},
      // {src: 'perfect-scrollbar/dist/js/perfect-scrollbar.min.js', inject: 'libs'},
      // {src: 'chartist/dist/chartist.min.css', inject: true},
      // {src: 'chartist/dist/chartist.min.js', inject: 'libs'}
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    this.ENABLE_SCSS = true;

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      { src: `${this.APP_SRC}/plugins/script.js`, inject: true, vendor: false }
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    // add flex-layout configuration to SystemJS.
    this.addPackageBundles({
      name: '@angular/flex-layout',
      packageMeta: {
        main: 'bundles/flex-layout.umd.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'ng2-validation',
      packageMeta: {
        main: 'bundles/ng2-validation.umd.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'libphonenumber-js',
      packageMeta: {
        main: 'bundle/libphonenumber-js.min.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: '@angular/material',
      packageMeta: {
        main: 'bundles/material.umd.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'angular2-moment',
      packageMeta: {
        main: './index.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'moment',
      packageMeta: {
        main: './moment.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'moment-timezone',
      packageMeta: {
        main: './builds/moment-timezone-with-data.js',
        defaultExtension: 'js'
      }
    });

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
