import { Component, signal } from '@angular/core';
import { Accordion } from './components/aria/accordion/accordion';

@Component( {
    selector: 'app-root',
    imports: [ Accordion ],
    templateUrl: './app.html',
    styleUrl: './app.css'
} )
export class App {
    protected readonly title = signal( 'angular-21-experiment' );
}
