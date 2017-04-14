import { Component } from '@angular/core';

@Component({
  selector: 'cmp-library',
  styles: ['body {  color: black;}'],
  template: '<h1>{{title}}</h1>'
})
export class LibraryComponent {
  public title = 'app works!';
}
