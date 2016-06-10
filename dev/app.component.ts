import {Component} from '@angular/core';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="brand">Shoppin List</div>
        </header>
        <div class="main">
            <shopping-list></shopping-list>
        </div>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {

}