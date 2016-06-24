System.register(['@angular/core', "./shopping-list-new-item.component", "./shopping-list-item.component", "./shopping-list-service", "../filter.pipe"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1, shopping_list_service_1, filter_pipe_1;
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
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.listItems = Array();
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onRemove = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            Filter: \n            <input type=\"text\" #filter (keyup)=\"0\">\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"let listItem of listItems | myFilter:filter.value\" (click)=\"onSelect(listItem)\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>    \n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove()\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingNewListItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                        pipes: [filter_pipe_1.FilterPipe]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBSUksK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFIN0QsY0FBUyxHQUFHLEtBQUssRUFBWSxDQUFDO2dCQUdrQyxDQUFDO2dCQUVqRSx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDekQsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQXhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsNnRCQWlCVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsRUFBRSx3REFBeUIsQ0FBQzt3QkFDckUsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7d0JBQ2hDLEtBQUssRUFBRSxDQUFDLHdCQUFVLENBQUM7cUJBQ3RCLENBQUM7O3lDQUFBO2dCQWtCRiw0QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQseURBaUJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ05ld0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LXNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyUGlwZX0gZnJvbSBcIi4uL2ZpbHRlci5waXBlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1uZXctaXRlbSAoaXRlbUFkZGVkKT1cIm9uSXRlbUFkZGVkKCRldmVudClcIj48L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDM+TXkgTGlzdDwvaDM+XG4gICAgICAgICAgICBGaWx0ZXI6IFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpbHRlciAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbGlzdEl0ZW0gb2YgbGlzdEl0ZW1zIHwgbXlGaWx0ZXI6ZmlsdGVyLnZhbHVlXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGxpc3RJdGVtKVwiPnt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdGVkSXRlbSAhPSBudWxsXCI+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKClcIj48L3Nob3BwaW5nLWxpc3QtaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTmV3TGlzdEl0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdLFxuICAgIHBpcGVzOiBbRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsaXN0SXRlbXMgPSBBcnJheTxMaXN0SXRlbT4oKTtcbiAgICBzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHt9XG5cbiAgICBvblNlbGVjdChpdGVtOiBMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEl0ZW1zKClcbiAgICB9XG5cbiAgICBvblJlbW92ZSgpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
