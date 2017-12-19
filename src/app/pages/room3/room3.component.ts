import {Component, OnInit} from '@angular/core';
import {Info} from '../../components/btns/btn-plus/btn-plus.component';
import {InventoryService} from '../../services/inventory/inventory.service';
import {RoomAbstraction} from '../../classes/room-abstraction';
import {TotalItemsService} from '../../services/total-items/total-items.service';
import {MyItemListModalService} from '../../services/my-item-list-modal/my-item-list-modal.service';


@Component({
    selector: 'app-room3',
    templateUrl: './room3.component.html',
    styleUrls: ['./room3.component.scss']
})
export class Room3Component extends RoomAbstraction implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    roomName: string = 'room3';
    buttons: Array<Info>;
    roomNav: Array<string> = [
        'room2',
        'room1'
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
