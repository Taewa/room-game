import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MyItemListComponent} from '../../components/my-item-list/my-item-list.component';

@Injectable()
export class MyItemListModalService {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(public dialog: MatDialog) {
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Methods
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    openModal(data): void {
        const dialogRef = this.dialog.open(MyItemListComponent, {
            panelClass: ['my-item-list'],
            data: {itemList: data}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('.my-item-list dialog was closed');
        });
    }

}
