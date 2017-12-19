import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatTooltipModule, MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import { Room1Component } from './pages/room1/room1.component';
import { BtnPlusComponent } from './components/btns/btn-plus/btn-plus.component';
import { BtnPlusDirective } from './components/btns/btn-plus/btn-plus.directive';
import { InventoryComponent } from './services/inventory/inventory.component';

import { InventoryService } from './services/inventory/inventory.service';
import { TotalItemsService } from './services/total-items/total-items.service';
import { MyItemListModalService } from './services/my-item-list-modal/my-item-list-modal.service';

import { RoomNavComponent } from './components/room-nav/room-nav.component';
import { Room2Component } from './pages/room2/room2.component';
import { Room3Component } from './pages/room3/room3.component';
import { TimerComponent } from './components/timer/timer.component';
import { MyItemListComponent } from './components/my-item-list/my-item-list.component';


const appRoutes: Routes = [
    {path: 'room1', component: Room1Component},
    {path: 'room2', component: Room2Component},
    {path: 'room3', component: Room3Component},
    {path: '', redirectTo: '/room1', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        AppComponent,
        Room1Component,
        BtnPlusComponent,
        BtnPlusDirective,
        InventoryComponent,
        RoomNavComponent,
        Room2Component,
        Room3Component,
        TimerComponent,
        MyItemListComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false, useHash: true} // <-- debugging purposes only
        ),
        BrowserAnimationsModule,
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule
    ],
    entryComponents: [InventoryComponent, MyItemListComponent],
    providers: [InventoryService, TotalItemsService, MyItemListModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
