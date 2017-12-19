import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {Info} from './btn-plus.component';

@Directive({
    selector: '[BtnPlusDirective]'
})
export class BtnPlusDirective implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @Input() info: Info;

    @HostBinding('style.top') top: string;
    @HostBinding('style.left') left: string;


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor() {
    }

    ngOnInit() {
        this.top = this.info.y + 'vw';
        this.left = this.info.x + 'vw';
    }

    // @HostListener('click') clicked() {
    //     console.log(this);
    // }

}
