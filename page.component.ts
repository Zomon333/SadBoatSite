import { Component, Input } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './pages/page.{{ template }}.component.html',
    stylURLs: ['']
})

export class PageComponent {
    @Input() template: string;
}