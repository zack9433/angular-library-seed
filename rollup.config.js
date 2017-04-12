export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/angular-library-seed.umd.js',
  format: 'umd',
  moduleName: 'ng.angularLirarySeed',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx'
  }
};
