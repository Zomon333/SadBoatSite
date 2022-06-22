import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-info',
    templateUrl: './header-info.component.html',
    stylURLs: ['']
})

export class HeaderComponent {
    @Input() platform: string;
}