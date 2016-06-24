import {Component, OnInit} from '@angular/core';
import {ShoppingNewListItemComponent} from "./shopping-list-new-item.component";
import {ListItem} from '../list-item';
import {ShoppingListItemComponent} from "./shopping-list-item.component";
import {ShoppingListService} from "./shopping-list-service";
import {FilterPipe} from "../filter.pipe";

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            Filter: 
            <input type="text" #filter (keyup)="0">
            <div class="list">
                <ul>
                    <li *ngFor="let listItem of listItems | myFilter:filter.value" (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
                </ul>
            </div>    
        </section>
        <section *ngIf="selectedItem != null">
            <shopping-list-item [item]="selectedItem" (removed)="onRemove()"></shopping-list-item>
        </section>
    `,
    directives: [ShoppingNewListItemComponent, ShoppingListItemComponent],
    providers: [ShoppingListService],
    pipes: [FilterPipe]
})
export class ShoppingListComponent implements OnInit {
    listItems = Array<ListItem>();
    selectedItem: ListItem;
    
    constructor(private _shoppingListService: ShoppingListService) {}

    onSelect(item: ListItem) {
        this.selectedItem = item;
    }
    
    ngOnInit():any {
        this.listItems = this._shoppingListService.getItems()
    }

    onRemove(){
        this.selectedItem = null;
    }
}