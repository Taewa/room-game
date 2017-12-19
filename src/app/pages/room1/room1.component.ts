import {Component, OnInit} from '@angular/core';
import {Info} from '../../components/btns/btn-plus/btn-plus.component';
import {InventoryService} from '../../services/inventory/inventory.service';
import {TotalItemsService} from '../../services/total-items/total-items.service';
import {MyItemListModalService} from '../../services/my-item-list-modal/my-item-list-modal.service';



import {RoomAbstraction} from '../../classes/room-abstraction';


@Component({
    selector: 'app-room1',
    templateUrl: './room1.component.html',
    styleUrls: ['./room1.component.scss']
})
export class Room1Component extends RoomAbstraction implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    roomName: string = 'room1';
    buttons: Array<Info>;
    roomNav: Array<string> = [
        'room3',
        'room2'
    ];

    // myInventoryItems: Array<any>;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(
        inventory: InventoryService,
        totalItems: TotalItemsService,
        myItemListModal: MyItemListModalService
    ) {
        super(inventory, totalItems, myItemListModal);

        this.buttons = this.getRoomData(this.roomName);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Methods
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
}
