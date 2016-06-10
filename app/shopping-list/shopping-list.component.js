System.register(['@angular/core', "./shopping-list-new-item.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_new_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"let listItem of listItems\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>    \n        </section>\n        <section>\n            Edit Items\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingNewListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0ksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFnQyxDQUFDO2dCQU8xRCxDQUFDO2dCQUhHLDJDQUFXLEdBQVgsVUFBWSxJQUFtQztvQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSx3ZUFlVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsQ0FBQztxQkFDN0MsQ0FBQzs7eUNBQUE7Z0JBU0YsNEJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHlEQVFDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdOZXdMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LW5ldy1pdGVtIChpdGVtQWRkZWQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMz5NeSBMaXN0PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGxpc3RJdGVtIG9mIGxpc3RJdGVtc1wiPnt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIEVkaXQgSXRlbXNcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTmV3TGlzdEl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCB7XG4gICAgbGlzdEl0ZW1zID0gbmV3IEFycmF5PHtuYW1lOnN0cmluZywgYW1vdW50Om51bWJlcn0+KCk7XG4gICAgc2VsZWN0ZWRJdGVtOiB7bmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlcn07XG4gICAgXG5cbiAgICBvbkl0ZW1BZGRlZChpdGVtOiB7bmFtZTpzdHJpbmcsIGFtb3VudDogbnVtYmVyfSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHsgbmFtZTogaXRlbS5uYW1lLCBhbW91bnQ6IGl0ZW0uYW1vdW50IH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
