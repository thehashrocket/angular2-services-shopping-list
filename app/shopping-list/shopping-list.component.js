System.register(['@angular/core', "./shopping-list-new-item.component", "./shopping-list-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"let listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>    \n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item item=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingNewListItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBQ0ksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBZ0J0QyxDQUFDO2dCQVpHLDJDQUFXLEdBQVgsVUFBWSxJQUFjO29CQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUixVQUFTLElBQWM7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFwQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLDBuQkFlVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBRSx3REFBeUIsQ0FBQztxQkFDeEUsQ0FBQzs7eUNBQUE7Z0JBa0JGLDRCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx5REFpQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ05ld0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LW5ldy1pdGVtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgzPk15IExpc3Q8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbGlzdEl0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGxpc3RJdGVtKVwiPnt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdGVkSXRlbSAhPSBudWxsXCI+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1pdGVtIGl0ZW09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LWl0ZW0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ05ld0xpc3RJdGVtQ29tcG9uZW50LCBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQge1xuICAgIGxpc3RJdGVtcyA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcbiAgICBzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xuICAgIFxuXG4gICAgb25JdGVtQWRkZWQoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaCh7IG5hbWU6IGl0ZW0ubmFtZSwgYW1vdW50OiBpdGVtLmFtb3VudCB9KTtcbiAgICB9XG5cbiAgICBvblNlbGVjdChpdGVtOiBMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgb25SZW1vdmUoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
