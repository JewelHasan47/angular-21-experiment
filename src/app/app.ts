import { Component, signal } from '@angular/core';
import { Accordion } from './components/aria/accordion/accordion';
import { SelectBox } from './components/aria/select-box/select-box';

@Component( {
    selector: 'app-root',
    imports: [
        Accordion,
        SelectBox
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
} )
export class App {
    protected readonly title = signal( 'angular-21-experiment' );
}
