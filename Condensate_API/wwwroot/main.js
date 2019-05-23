(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = "api/users";
        this.getUserUrl = "/GetUserGamesById";
        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            this.baseUrl = "https://condensate.me/" + this.baseUrl;
        }
    }
    ApiService.prototype.getUserGames = function (searchQuery) {
        return this.http.get(this.baseUrl + this.getUserUrl, {
            params: {
                id: searchQuery
            }
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Welcome to Condensate!</h1>\n</div>\n  \n<app-search></app-search>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Condensate';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _table_sortable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table/sortable.directive */ "./src/app/table/sortable.directive.ts");



 // <-- NgModel lives here






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_8__["NgbdTableComplete"],
                _table_sortable_directive__WEBPACK_IMPORTED_MODULE_9__["NgbdSortableHeader"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 5px solid #42A948;\r\n  /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442;\r\n  /* red */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSxcclxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgLyogcmVkICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row-fluid\">\n    <form class=\"form-group\" (ngSubmit)=\"onSearchSubmit(searchForm.valid)\" #searchForm=\"ngForm\">\n      <label class=\"col-md-8\">Steam ID:</label>\n      <div class=\"input-group\">\n        <input class=\"form-control col-md-10\" [(ngModel)]=\"steam_id\" id=\"search_input\" name=\"search_input\" required #name=\"ngModel\" />\n        <input class=\"btn btn-primary col-md-2\" type=\"submit\" value=\"Search\" (click)=\"submit_touched=true;\"/>\n      </div>\n      <div [hidden]=\"name.valid || (!submit_touched) \" class=\"alert alert-danger\">\n        Steam ID is required\n      </div>\n    </form>\n\n    <hr>\n    <!-- TODO: Uncomment this: -->\n    <!-- <ngbd-table-complete *ngIf=\"submit_touched && searchForm.valid\"></ngbd-table-complete> -->\n    <ngbd-table-complete></ngbd-table-complete>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: compare, SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var compare = function (v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0; };
var SearchComponent = /** @class */ (function () {
    function SearchComponent(api_service) {
        this.api_service = api_service;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.submit_touched = false;
    };
    SearchComponent.prototype.onSearchSubmit = function (isValid) {
        if (isValid)
            this.api_service.getUserGames(this.steam_id).subscribe(function (res) { return console.log(res); });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/table/countries.ts":
/*!************************************!*\
  !*** ./src/app/table/countries.ts ***!
  \************************************/
/*! exports provided: COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
var COUNTRIES = [
    {
        id: 1,
        name: 'Russia',
        icon: 'f/f3/Flag_of_Russia.svg',
        hours: 17075200,
        price: 146989754
    },
    {
        id: 2,
        name: 'France',
        icon: 'c/c3/Flag_of_France.svg',
        hours: 640679,
        price: 64979548
    },
    {
        id: 3,
        name: 'Germany',
        icon: 'b/ba/Flag_of_Germany.svg',
        hours: 357114,
        price: 82114224
    },
    {
        id: 4,
        name: 'Portugal',
        icon: '5/5c/Flag_of_Portugal.svg',
        hours: 92090,
        price: 10329506
    },
    {
        id: 5,
        name: 'Canada',
        icon: 'c/cf/Flag_of_Canada.svg',
        hours: 9976140,
        price: 36624199
    },
    {
        id: 6,
        name: 'Vietnam',
        icon: '2/21/Flag_of_Vietnam.svg',
        hours: 331212,
        price: 95540800
    },
    {
        id: 7,
        name: 'Brazil',
        icon: '0/05/Flag_of_Brazil.svg',
        hours: 8515767,
        price: 209288278
    },
    {
        id: 8,
        name: 'Mexico',
        icon: 'f/fc/Flag_of_Mexico.svg',
        hours: 1964375,
        price: 129163276
    },
    {
        id: 9,
        name: 'United States',
        icon: 'a/a4/Flag_of_the_United_States.svg',
        hours: 9629091,
        price: 324459463
    },
    {
        id: 10,
        name: 'India',
        icon: '4/41/Flag_of_India.svg',
        hours: 3287263,
        price: 1324171354
    },
    {
        id: 11,
        name: 'Indonesia',
        icon: '9/9f/Flag_of_Indonesia.svg',
        hours: 1910931,
        price: 263991379
    },
    {
        id: 12,
        name: 'Tuvalu',
        icon: '3/38/Flag_of_Tuvalu.svg',
        hours: 26,
        price: 11097
    },
    {
        id: 13,
        name: 'China',
        icon: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        hours: 9596960,
        price: 1409517397
    }
];


/***/ }),

/***/ "./src/app/table/sortable.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/table/sortable.directive.ts ***!
  \*********************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// original code from https://ng-bootstrap.github.io/#/components/table/examples

var rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
var NgbdSortableHeader = /** @class */ (function () {
    function NgbdSortableHeader() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgbdSortableHeader.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgbdSortableHeader.prototype, "sortable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgbdSortableHeader.prototype, "direction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdSortableHeader.prototype, "sort", void 0);
    NgbdSortableHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'th[sortable]',
            host: {
                '[class.asc]': 'direction === "asc"',
                '[class.desc]': 'direction === "desc"',
                '(click)': 'rotate()'
            }
        })
    ], NgbdSortableHeader);
    return NgbdSortableHeader;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* Sortable table demo */\r\n  \r\n  th[sortable] {\r\n    cursor: pointer;\r\n    -moz-user-select: none;\r\n     -ms-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n  }\r\n  \r\n  tr {\r\n    height: 50px;\r\n  }\r\n  \r\n  th[sortable].desc:before, th[sortable].asc:before {\r\n    content: '';\r\n    display: block;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC') no-repeat;\r\n    background-size: 22px;\r\n    width: 22px;\r\n    height: 22px;\r\n    float: left;\r\n    margin-left: -22px;\r\n  }\r\n  \r\n  th[sortable].desc:before {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n  }\r\n  \r\n  /* Filtering table demo */\r\n  \r\n  ngbd-table-filtering span.ngb-highlight {\r\n    background-color: yellow;\r\n  }\r\n  \r\n  /* Complete table demo */\r\n  \r\n  ngbd-table-complete span.ngb-highlight {\r\n    background-color: yellow;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRSx3QkFBd0I7O0VBRXhCO0lBQ0UsZUFBZTtJQUNmLHNCQUFpQjtLQUFqQixxQkFBaUI7U0FBakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsMjhCQUEyOEI7SUFDMzhCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQSx5QkFBeUI7O0VBQ3pCO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBLHdCQUF3Qjs7RUFDeEI7SUFDRSx3QkFBd0I7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBTb3J0YWJsZSB0YWJsZSBkZW1vICovXHJcbiAgXHJcbiAgdGhbc29ydGFibGVdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIHRyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgdGhbc29ydGFibGVdLmRlc2M6YmVmb3JlLCB0aFtzb3J0YWJsZV0uYXNjOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUFteEpSRUZVZUFIdG1rc3JSVkVVeDcyZkg4Q0lHUU5Ka3BHVVVtYWtERWlaU0pSSVpzUlFtQ2tUSlJtWm1KZ1FFMGtwWDBENURKS0pnZmY3ditydTJ1M08zdnZjNjdUT3ZzZGF0ZHJublAxWS8vL3Y3SHZ2dWJkYlVpSWhCSVNBRUJBQ1FrQUlDQUVoSUFRNENYU2gyRG55RGZtQ1BFRzJJdjlGOU1QbE0vTEh5QWVjZHlNekhZTndSM2ZkTksvT0g5SFhsMVVDb3pEMjRUQ3ZJTHhpekVEV0lFekEwRmNNOHdvQ2dSckpDb1M1UEl3ckFOUVNNQUpYMUxFSTlicXBRbzRKWU5GRktSU3ZJZ3N4SERWbnFaZ0lrUG5OQk0wcklHdFlrOVlPT3NxZ2JnZXBSQ2ZkYm1GdHFoRmtWRURWUGpKcDArWjZlNmhSSGhxQktnZzZaREN2WUJ5Z1ZtVW9FR29oNUpUUnZJSndoSm8xYVVPb2g0Q0xQTXl2eHhpN0VXT01nbkNHc1hYSTFHSVhsWlVZWDd1Y1Ura2JSOE5XOGxoM083Y3VlMFBrMzJNS25kZlV4UUZBd3hkaXJrM2ZIYXBwQW5jMG9xRFB6RGZHVEJyQ2ZIUDA0ZE00b1RWOGN4cjBTVnpIOUZGMDd4RDNpYjZ4Q0RFK00rYVVjVnlndFd6emJ0R1gyclBCckVVWWZlY2ZRa2FGellpNkhqVm5HQmR0TDdlcHFBbGMxK2pSZEFhcDc0UnJuUGM0QkNpanR0WTJ0UmNkTjBnMTd3N0hxWnJYaGRKVFlBdVMzaGQ4eit2S2dLM1YxeldQYWUwbVpETXlrYWRCbjFoVFFCTG5aTndWckpwU2UvTndFZURzRXdDY3RFT3NKVHNneEx2Q3FVbDJBQ2Z0RUd2SkRnanhybkJxa2gzQVNUdkVXcklEUXJ3cm5KcGtCM0RTRHJHVzdJQVE3d3FuSnRrQm5MUnp0ZWpYWFZ1NCtteHovblE5alIxdzVWQjg2ZWpMVEZjbm5Ed2h6VitGNlQrQ0habHg2VEhTam43NmV5eUJJT1BIeURha2hCQVFBa0pBQ0FnQklTQUVoSUFRWUNMd0M4SnhwQW1zRUd0NkFBQUFBRWxGVGtTdVFtQ0MnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG4gIH1cclxuICBcclxuICB0aFtzb3J0YWJsZV0uZGVzYzpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICBcclxuICAvKiBGaWx0ZXJpbmcgdGFibGUgZGVtbyAqL1xyXG4gIG5nYmQtdGFibGUtZmlsdGVyaW5nIHNwYW4ubmdiLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENvbXBsZXRlIHRhYmxlIGRlbW8gKi9cclxuICBuZ2JkLXRhYmxlLWNvbXBsZXRlIHNwYW4ubmdiLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- code taken from https://ng-bootstrap.github.io/#/components/table/examples -->\n<form>\n  <div class=\"form-group form-inline\">\n    Search Games: <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\"/>\n  </div>\n  \n  <div class=\"form-group\">\n    <span class=\"ml-3\" *ngIf=\"service.loading$ | async; else games_owned\">Loading...</span>\n    <ng-template  #games_owned>\n      Games Owned: {{service.total$ | async}}\n    </ng-template >\n  </div>\n\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th scope=\"col\" sortable=\"id\" (sort)=\"onSort($event)\">#</th>\n      <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Game</th>\n      <th scope=\"col\" sortable=\"hours\" (sort)=\"onSort($event)\">Hours Played</th>\n      <th scope=\"col\" sortable=\"price\" (sort)=\"onSort($event)\">Price</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let country of countries\">\n        <th scope=\"row\">{{ country.id }}</th>\n        <td>\n          <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/' + country.icon\" class=\"mr-2\" style=\"width: 40px\">\n          <ngb-highlight [result]=\"country.name\" [term]=\"service.searchTerm\"></ngb-highlight>\n        </td>\n        <td><ngb-highlight [result]=\"country.hours | number\" [term]=\"service.searchTerm\"></ngb-highlight></td>\n        <td><ngb-highlight [result]=\"country.price | number\" [term]=\"service.searchTerm\"></ngb-highlight></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination\n      [collectionSize]=\"total\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\n    </ngb-pagination>\n\n    <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\n      <option [ngValue]=\"4\">4 items per page</option>\n      <option [ngValue]=\"6\">6 items per page</option>\n      <option [ngValue]=\"8\">8 items per page</option>\n    </select>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: NgbdTableComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTableComplete", function() { return NgbdTableComplete; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/table/user.service.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/table/sortable.directive.ts");

// original code from https://ng-bootstrap.github.io/#/components/table/examples




var NgbdTableComplete = /** @class */ (function () {
    function NgbdTableComplete(service) {
        var _this = this;
        this.service = service;
        service.countries$.subscribe(function (countries) { return _this.countries = countries; });
        service.total$.subscribe(function (total) { return _this.total = total; });
    }
    NgbdTableComplete.prototype.onSort = function (_a) {
        var column = _a.column, direction = _a.direction;
        // resetting other headers
        this.headers.forEach(function (header) {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["NgbdSortableHeader"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], NgbdTableComplete.prototype, "headers", void 0);
    NgbdTableComplete = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ngbd-table-complete',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NgbdTableComplete);
    return NgbdTableComplete;
}());



/***/ }),

/***/ "./src/app/table/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/table/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries */ "./src/app/table/countries.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// original code from https://ng-bootstrap.github.io/#/components/table/examples





function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(countries, column, direction) {
    if (direction === '') {
        return countries;
    }
    else {
        return countries.slice().sort(function (a, b) {
            var res = compare(a[column], b[column]);
            if (direction === 'asc')
                return res;
            return -res;
            // return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    var area_str = pipe.transform(country.hours).replace(/,/g, '');
    var population_str = pipe.transform(country.price).replace(/,/g, '');
    var comma_less_term = term.replace(/,/g, '');
    return country.name.toLowerCase().includes(term)
        || area_str.includes(comma_less_term)
        || population_str.includes(comma_less_term)
        || pipe.transform(country.id).includes(term);
}
var UserService = /** @class */ (function () {
    function UserService(pipe) {
        var _this = this;
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 6,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._loading$.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this._search(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._loading$.next(false); })).subscribe(function (result) {
            _this._countries$.next(result.countries);
            _this._total$.next(result.total);
        });
        this._search$.next();
    }
    Object.defineProperty(UserService.prototype, "countries$", {
        get: function () { return this._countries$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "total$", {
        get: function () { return this._total$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "loading$", {
        get: function () { return this._loading$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "page", {
        get: function () { return this._state.page; },
        set: function (page) { this._set({ page: page }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "pageSize", {
        get: function () { return this._state.pageSize; },
        set: function (pageSize) { this._set({ pageSize: pageSize }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "searchTerm", {
        get: function () { return this._state.searchTerm; },
        set: function (searchTerm) { this._set({ searchTerm: searchTerm }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "sortColumn", {
        set: function (sortColumn) { this._set({ sortColumn: sortColumn }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "sortDirection", {
        set: function (sortDirection) { this._set({ sortDirection: sortDirection }); },
        enumerable: true,
        configurable: true
    });
    UserService.prototype._set = function (patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    };
    UserService.prototype._search = function () {
        var _this = this;
        var _a = this._state, sortColumn = _a.sortColumn, sortDirection = _a.sortDirection, pageSize = _a.pageSize, page = _a.page, searchTerm = _a.searchTerm;
        // 1. sort
        var countries = sort(_countries__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"], sortColumn, sortDirection);
        // 2. filter
        countries = countries.filter(function (country) { return matches(country, searchTerm, _this.pipe); });
        var total = countries.length;
        // 3. paginate
        countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ countries: countries, total: total });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Users\Jukebox\Documents\AAA\Programming\Condensate\Condensate_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map