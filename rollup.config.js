export default {
  entry: 'dist/library.module.js',
  dest: 'dist/library.module.bundle.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'library',
  external: [
    '@angular/core',
    '@angular/common'
  ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    "rxjs/Subject": "Rx",
    "rxjs/Observable": "Rx",
    "rxjs/Observer": "Rx",
    "rxjs/Subscription": "Rx",
    "rxjs/symbol/observable": "Rx.Symbol.observable",
    "rxjs/observable/merge": "Rx.Observable",
    "rxjs/operator/share": "Rx.Observable.prototype"
  },
  onwarn: () => { return }
};
