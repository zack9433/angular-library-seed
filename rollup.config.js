export default {
  entry: 'dist/library.module.js',
  dest: 'dist/library.module.bundle.js',
  format: 'umd',
  moduleName: 'ng.angularLirarySeed',
  external: ['@angular/core', '@angular/common', 'rxjs/Observable', 'rxjs/Observer'],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx'
  }
};
