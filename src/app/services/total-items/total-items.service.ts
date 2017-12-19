import {Injectable} from '@angular/core';
import {Info} from '../../components/btns/btn-plus/btn-plus.component';

interface Items {
    [name: string]: Array<Info>;
}

@Injectable()
export class TotalItemsService {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    totalItemList: Items;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor() {
        this.totalItemList = {
            room1: [
                {
                    name: 'window',
                    src: '/assets/img/window.jpg',
                    x: 28.8,
                    y: 5.1,
                },
                {
                    name: 'frame',
                    src: '/assets/img/frame.jpg',
                    x: 28,
                    y: 1.1,
                },
                {
                    name: 'chair',
                    src: '/assets/img/chair.jpg',
                    x: 68.8,
                    y: 25.1,
                },
                {
                    name: 'key',
                    src: '/assets/img/key.jpg',
                    x: 21.4,
                    y: 14.1,
                },
            ],

            room2: [
                {
                    name: 'window',
                    src: '/assets/img/window.jpg',
                    x: 18.8,
                    y: 5.1,
                },
                {
                    name: 'frame',
                    src: '/assets/img/frame.jpg',
                    x: 70,
                    y: 6.1,
                },
                {
                    name: 'chair',
                    src: '/assets/img/chair.jpg',
                    x: 55.8,
                    y: 40.1,
                },
            ],

            room3: [
                {
                    name: 'window',
                    src: '/assets/img/window.jpg',
                    x: 72.8,
                    y: 25.1,
                },
                {
                    name: 'frame',
                    src: '/assets/img/frame.jpg',
                    x: 33.3,
                    y: 33,
                },
                {
                    name: 'chair',
                    src: '/assets/img/chair.jpg',
                    x: 55.8,
                    y: 23.1,
                },
            ]


        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Methods
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    totalItem(roomName: string): Array<Info> {
        return this.totalItemList[roomName];
    }

}
