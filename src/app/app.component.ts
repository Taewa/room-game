import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    isLandscape: boolean;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Methods
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        const self = this;

        this.readDeviceOrientation();

        window.addEventListener('orientationchange', function () {
            self.readDeviceOrientation();
        }, false);
    }

    // TODO: Make it as service
    readDeviceOrientation() {

        console.log(window.orientation);

        switch (window.orientation) {
            case 0:
                // Portrait
                alert('The best is landspace mode on mobile !');
                this.isLandscape = false;
                break;

            case 180:
                // Portrait (Upside-down)
                alert('The best is landspace mode on mobile !');
                this.isLandscape = false;
                break;

            case -90:
                // Landscape (Clockwise)
                this.isLandscape = true;
                break;

            case 90:
                // Landscape  (Counterclockwise)
                this.isLandscape = true;
                break;
        }
    }

    gameover() {
        alert('Game Over');
    }

}
