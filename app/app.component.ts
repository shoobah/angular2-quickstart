import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<div>
    <input type="text" #myInput>
    <button (click)="onClick($event)">Click me</button>
    </div>`
})

export class AppComponent{
    onClick(value){
        console.log(value);
    }
}
