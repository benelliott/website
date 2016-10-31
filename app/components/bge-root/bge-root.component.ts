import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bge-root',
    templateUrl: './bge-root.component.html',
    styleUrls: ['./bge-root.component.css']
})
export class BGERootComponent implements OnInit {
    private static FULL_NAME: string = 'Benjamin Elliott';
    private static TYPE_TIMEOUT_MIN_MILLIS: number = 60;
    private static TYPE_TIMEOUT_MAX_MILLIS: number = 80;

    private static getTypeTimeoutMilliseconds(): number {
        return BGERootComponent.TYPE_TIMEOUT_MAX_MILLIS + Math.random() * (BGERootComponent.TYPE_TIMEOUT_MAX_MILLIS - BGERootComponent.TYPE_TIMEOUT_MIN_MILLIS);
    }

    public name: string = '';
    private lastTypedIndex: number = 0;

    public ngOnInit(): void {
        window.setTimeout(() => this.typeNextCharacter(), BGERootComponent.getTypeTimeoutMilliseconds());
    }

    private typeNextCharacter(): void {
        let char = BGERootComponent.FULL_NAME.charAt(this.lastTypedIndex);
        this.name = this.name.concat(char);
        this.lastTypedIndex++;

        if (this.lastTypedIndex < BGERootComponent.FULL_NAME.length) {
            window.setTimeout(() => this.typeNextCharacter(), BGERootComponent.getTypeTimeoutMilliseconds());
        }
    }
}
