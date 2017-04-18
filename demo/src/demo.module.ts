import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

import { LibraryModule } from '../../src/library.module';

@NgModule({
    bootstrap: [DemoComponent],
    declarations: [DemoComponent],
    imports: [BrowserModule, LibraryModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class DemoModule { }

