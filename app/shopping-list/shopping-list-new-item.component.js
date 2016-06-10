System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ShoppingNewListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingNewListItemComponent = (function () {
                function ShoppingNewListItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new core_1.EventEmitter();
                }
                ShoppingNewListItemComponent.prototype.onClick = function () {
                    this.itemAdded.emit(this.item);
                };
                ShoppingNewListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amount\">Amount</label>\n            <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n        </div>\n        <button (click)=\"onClick()\">Add Item</button>\n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingNewListItemComponent);
                return ShoppingNewListItemComponent;
            }());
            exports_1("ShoppingNewListItemComponent", ShoppingNewListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzdCLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztnQkFLN0MsQ0FBQztnQkFIRyw4Q0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFyQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUseWFBVVQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztnREFBQTtnQkFRRixtQ0FBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdUVBT0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuLi9saXN0LWl0ZW0nXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtb3VudFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICBgLFxuICAgIG91dHB1dHM6IFsnaXRlbUFkZGVkJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdOZXdMaXN0SXRlbUNvbXBvbmVudCB7XG4gICAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgICBpdGVtQWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5pdGVtQWRkZWQuZW1pdCh0aGlzLml0ZW0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
