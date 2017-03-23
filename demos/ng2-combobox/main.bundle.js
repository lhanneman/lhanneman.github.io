webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(402);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/lhanneman/github/ng2-combobox/src/main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.optionsA = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
            'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
        this.optionsB = ['oranges', 'apples', 'bananas'];
        this.optionsC = ['Ford', 'Chevrolet', 'Subaru', 'Toyota'];
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(459),
            styles: [__webpack_require__(456)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/lhanneman/github/ng2-combobox/src/app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__combobox_ng2_combobox_module__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__combobox_ng2_combobox_module__["a" /* Ng2ComboboxModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/lhanneman/github/ng2-combobox/src/app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2ComboboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ng2ComboboxComponent = (function () {
    function Ng2ComboboxComponent(cdr) {
        this.cdr = cdr;
        this.manualEntry = false;
        this.width = "200px";
        this.autoFilter = false;
        this.selectedOption = "";
        this.open = false;
        this.filteredOptions = [];
        this.currentHoverIndex = -1;
    }
    Ng2ComboboxComponent.prototype.ngAfterViewInit = function () {
        this.filteredOptions = this.options;
        this.cdr.detectChanges();
    };
    Ng2ComboboxComponent.prototype.focusIn = function () {
        this.open = true;
    };
    Ng2ComboboxComponent.prototype.focusOut = function () {
        var _this = this;
        setTimeout(function () { return _this.open = false; }, 250);
    };
    Ng2ComboboxComponent.prototype.keydown = function () {
        return this.manualEntry;
    };
    Ng2ComboboxComponent.prototype.keyup = function () {
        var _this = this;
        if (!this.manualEntry) {
            return;
        }
        this.filteredOptions = this.options.filter(function (option) { return option.toLowerCase().indexOf(_this.selectedOption) !== -1; });
        console.log("filtered options length: " + this.filteredOptions.length);
        this.cdr.detectChanges();
    };
    Ng2ComboboxComponent.prototype.arrowDown = function () {
        if (this.currentHoverIndex === (this.filteredOptions.length - 1)) {
            return;
        }
        this.currentHoverIndex += 1;
    };
    Ng2ComboboxComponent.prototype.arrowUp = function () {
        if (this.currentHoverIndex === 0) {
            return;
        }
        this.currentHoverIndex -= 1;
    };
    Ng2ComboboxComponent.prototype.enterPressed = function () {
        this.selectOption(this.filteredOptions[this.currentHoverIndex]);
    };
    Ng2ComboboxComponent.prototype.selectOption = function (option) {
        this.selectedOption = option;
        this.open = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Object)
    ], Ng2ComboboxComponent.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Object)
    ], Ng2ComboboxComponent.prototype, "manualEntry", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', String)
    ], Ng2ComboboxComponent.prototype, "width", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Object)
    ], Ng2ComboboxComponent.prototype, "autoFilter", void 0);
    Ng2ComboboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'ng2-combobox',
            template: __webpack_require__(460),
            styles: [__webpack_require__(457)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ChangeDetectorRef */]) === 'function' && _a) || Object])
    ], Ng2ComboboxComponent);
    return Ng2ComboboxComponent;
    var _a;
}());
//# sourceMappingURL=/Users/lhanneman/github/ng2-combobox/src/ng2-combobox.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng2_combobox_component__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2ComboboxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Ng2ComboboxModule = (function () {
    function Ng2ComboboxModule() {
    }
    Ng2ComboboxModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ng2_combobox_component__["a" /* Ng2ComboboxComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ng2_combobox_component__["a" /* Ng2ComboboxComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ComboboxModule);
    return Ng2ComboboxModule;
}());
//# sourceMappingURL=/Users/lhanneman/github/ng2-combobox/src/ng2-combobox.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/lhanneman/github/ng2-combobox/src/environment.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(121)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(121)();
// imports


// module
exports.push([module.i, ".ng2-cbobx-container, .ng2-cbobx-container * { box-sizing: border-box; }\n.ng2-cbobx-container {\n    position: relative;\n}\n\n.ng2-cbobx-selected-option {\n    width: 100%;\n    height: 25px;\n}\n\n/*.ng2-cbobx-options:hover,\n.ng2-cbobx-selected-option:focus + .ng2-cbobx-options {\n    display: block;\n}*/\n\n.ng2-cbobx-options {\n    display: none;\n    background-color: #eee;\n    position: absolute;\n    z-index: 1000;\n    max-height: 250px;\n    overflow-y: auto;\n}\n\n.ng2-cbobx-options.open {\n    display: block;\n}\n\n.ng2-cbobx-option {\n    padding: 3px 5px;\n    cursor: pointer;\n}\n\n.ng2-cbobx-option:hover, .hovered {\n    background-color: #ddd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<h2> ng2-combobox with all features enabled:</h2>\n<ng2-combobox [options]=\"optionsA\" [manualEntry]=\"true\" [autoFilter]=\"true\"></ng2-combobox>\n\n<h2>without manual-entry:</h2>\n<ng2-combobox [options]=\"optionsB\"></ng2-combobox>\n\n<h2>with manual entry; no auto-filter:</h2>\n<ng2-combobox [options]=\"optionsC\" [manualEntry]=\"true\"></ng2-combobox>\n\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"ng2-cbobx-container\" \n     [style.width]=\"width\">\n\n    <input class=\"ng2-cbobx-selected-option\" \n           type=\"text\" \n           [(ngModel)]=\"selectedOption\" \n           (focus)=\"focusIn()\"\n           (focusout)=\"focusOut()\"\n           (keydown)=\"keydown()\"\n           (keydown.ArrowDown)=\"arrowDown()\"\n           (keydown.ArrowUp)=\"arrowUp()\"\n           (keydown.Enter)=\"enterPressed()\"\n           (keyup)=\"autoFilter && keyup()\" />\n\n    <div class=\"ng2-cbobx-options\" \n         [class.open]=\"open\" \n         [style.width]=\"width\">\n\n        <div class=\"ng2-cbobx-option\" \n             *ngFor=\"let option of filteredOptions; let i = index\" \n             (click)=\"selectOption(option)\"\n             [class.hovered]=\"currentHoverIndex === i\">\n            {{option}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[473]);
//# sourceMappingURL=main.bundle.js.map