import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

const LibraryModule = require('library').LibraryModule;

@NgModule({
    bootstrap: [DemoComponent],
    declarations: [DemoComponent],
    imports: [LibraryModule, BrowserModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class DemoModule { }

