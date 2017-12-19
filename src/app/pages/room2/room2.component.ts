import {Component, OnInit} from '@angular/core';
import {Info} from '../../components/btns/btn-plus/btn-plus.component';
import {InventoryService} from '../../services/inventory/inventory.service';
import {RoomAbstraction} from '../../classes/room-abstraction';
import {TotalItemsService} from '../../services/total-items/total-items.service';
import {MyItemListModalService} from '../../services/my-item-list-modal/my-item-list-modal.service';

@Component({
    selector: 'app-room2',
    templateUrl: './room2.component.html',
    styleUrls: ['./room2.component.scss']
})
export class Room2Component extends RoomAbstraction implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    roomName: string = 'room2';
    buttons: Array<Info>;
    roomNav: Array<string> = [
        'room1',
        'room3'
    ];

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
