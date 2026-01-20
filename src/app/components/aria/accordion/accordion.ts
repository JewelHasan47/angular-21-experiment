import { AccordionContent, AccordionGroup, AccordionPanel, AccordionTrigger, } from '@angular/aria/accordion';
import { Component } from '@angular/core';

@Component( {
    selector: 'accordion',
    imports: [ AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent ],
    templateUrl: './accordion.html',
    styleUrl: './accordion.css',
} )
export class Accordion {

}
