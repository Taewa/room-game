import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @Input() countdown: number = 1000 * 60 * 5;

    @Output() timeover: EventEmitter<null> = new EventEmitter();

    public time: string;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor() {

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Methods
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.startCountDown();
    }

    startCountDown() {
        const countdown = Observable
            .timer(0, 1000) // timer(firstValueDelay, intervalBetweenValues)
            .map(i => this.countdown - (i * 1000))
            .take(this.countdown + 1)
            .subscribe(i => {
                if (i >= 0) {
                    this.time = this.secondsToMinutes(i);
                } else {
                    this.timeover.emit();
                    countdown.unsubscribe();
                }

            });


    }

    secondsToMinutes(sec): string {
        let seconds = Math.floor((sec / 1000) % 60);
        let minutes = Math.floor((sec / (60 * 1000)) % 60);
        let s: string = '';
        let m: string = '';

        s = seconds < 10 ? '0' + String(seconds) : String(seconds);
        m = minutes < 10 ? '0' + String(minutes) : String(minutes);

        return m + ' : ' + s;
    }

}
