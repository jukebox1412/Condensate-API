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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>About Condensate</h1>\n    <br>\n    <div class=\"lead row\">\n      <div class=\"col-md-12\">By Zhi Bin Wu</div>\n    </div>\n    <div class=\"lead row\">\n      <div class=\"col-md-12\">\n        <a href=\"mailto:jukebox1412@gmail.com\" target=\"_blank\">Jukebox1412@gmail.com</a>\n      </div>\n    </div>\n    <div class=\"lead row\">\n      <div class=\"col-md-12\">\n        <a href=\"https://github.com/jukebox1412/Condensate\" target=\"_blank\"><img class=\"img-fluid\"\n            src=\"../../assets/GitHub-Mark-120px-plus.png\" /></a>\n      </div>\n    </div>\n\n    <hr class=\"my-4\">\n\n    <h2 class=\"my-4\">Licenses and Credits:</h2>\n    <table class=\"table table-hover table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Software</th>\n          <th scope=\"col\">Purpose</th>\n          <th scope=\"col\">License</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://github.com/angular/angular\">Angular 7</a></td>\n          <td>Frontend client </td>\n          <td>MIT</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://github.com/aspnet/AspNetCore\">ASP.Net Core</a></td>\n          <td>Backend API</td>\n          <td>Apache-2.0</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://ng-bootstrap.github.io\">ng-bootstrap</a></td>\n          <td>Tables and Angular Bootstrap</td>\n          <td>MIT</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://developers.google.com/chart/\">Google Charts</a></td>\n          <td>Charts</td>\n          <td>MIT</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://www.npmjs.com/package/angular-google-charts\">Angular-google-charts</a>\n          </td>\n          <td>Google Charts Angular wrapper</td>\n          <td>MIT</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://www.digitalocean.com/\">Digital Ocean</a>\n          </td>\n          <td>Remote host</td>\n          <td>NA</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://www.nginx.com/\">NGINX</a>\n          </td>\n          <td>Reverse Proxy</td>\n          <td>BSD-Like</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://travis-ci.com/\">Travis CI</a>\n          </td>\n          <td>Dev Pipeline</td>\n          <td>NA</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://github.com/\">Github</a>\n          </td>\n          <td>Remote Repo</td>\n          <td>NA</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://letsencrypt.org/\">Let's Encrypt</a>\n          </td>\n          <td>HTTPS Certificates</td>\n          <td>Mozilla Public License</td>\n        </tr>\n        <tr>\n          <td><a target=\"_blank\" href=\"https://certbot.eff.org/\">Certbot</a>\n          </td>\n          <td>HTTPS Certificates helper</td>\n          <td>Apache License</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    /**
     * This is the about page TODO fill it in
     */
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiService = /** @class */ (function () {
    /**
     * The service that connects the Client App to the API
     * @param http
     */
    function ApiService(http) {
        this.http = http;
        this.baseUrl = "api/users";
        this.getUserUrl = "/GetUserGamesById";
        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            this.baseUrl = "https://condensate.me/" + this.baseUrl;
        }
    }
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /**
     * Given the search query, ping the api for user games
     * @param searchQuery Should be url to steam profile or steam id
     */
    ApiService.prototype.getUserGames = function (searchQuery) {
        return this.http.get(this.baseUrl + this.getUserUrl, {
            params: {
                id: searchQuery
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getUserGames", [])));
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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");






var routes = [
    {
        path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], children: [
            { path: 'results', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsComponent"] }
        ]
    },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n  <a class=\"navbar-brand text-success\" routerLink=\"/\">Condensate</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <a class=\"nav-link text-light\" routerLink=\"/search\">Home <span class=\"sr-only\">(current)</span></a>\n  <a class=\"nav-link text-light\" routerLink=\"/about\">About</a>\n  <!-- <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n      </li>\n      <li class=\"nav-item\">\n      </li>\n    </ul>\n  </div> -->\n</nav>\n<router-outlet></router-outlet>\n<!-- <router-outlet name=\"results_outlet\"></router-outlet> -->\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _info_label_info_label_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./info-label/info-label.component */ "./src/app/info-label/info-label.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");



 // <-- NgModel lives here













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _table_sortable_directive__WEBPACK_IMPORTED_MODULE_9__["NgbdSortableHeader"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"],
                _info_label_info_label_component__WEBPACK_IMPORTED_MODULE_14__["InfoLabelComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__["SearchResultsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngFor=\"let data of pieDatas\" class=\"col-md-4\">\n      <google-chart #chart [title]=\"data.title\" [type]=\"data.type\" [data]=\"data.data\" [columnNames]=\"data.columnNames\"\n        [options]=\"data.options\" [width]=\"data.width\" [height]=\"data.height\">\n      </google-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var ChartComponent = /** @class */ (function () {
    function ChartComponent(_service) {
        this._service = _service;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.categories$.subscribe(function (pieDatas) { return _this.pieDatas = pieDatas; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartComponent.prototype, "pieData", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/classes/ChartData.ts":
/*!**************************************!*\
  !*** ./src/app/classes/ChartData.ts ***!
  \**************************************/
/*! exports provided: PieMaker, pie_default_width, pie_default_height, pie_default_options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieMaker", function() { return PieMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pie_default_width", function() { return pie_default_width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pie_default_height", function() { return pie_default_height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pie_default_options", function() { return pie_default_options; });
/**
 * Returns a ChartData with default width and height and options for Pie. Just give it the title and data
 * @param title
 * @param data
 */
function PieMaker(title, data, width, height, options) {
    if (width === void 0) { width = pie_default_width; }
    if (height === void 0) { height = pie_default_height; }
    if (options === void 0) { options = pie_default_options; }
    var ret = {
        title: title,
        data: data,
        type: "PieChart",
        width: width,
        height: height,
        options: options,
        // no columns for pies
        columnNames: ["", ""]
    };
    return ret;
}
var pie_default_width = 400;
var pie_default_height = 400;
var pie_default_options = { pieHole: 0.4 };


/***/ }),

/***/ "./src/app/info-label/info-label.component.css":
/*!*****************************************************!*\
  !*** ./src/app/info-label/info-label.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tbGFiZWwvaW5mby1sYWJlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/info-label/info-label.component.html":
/*!******************************************************!*\
  !*** ./src/app/info-label/info-label.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Games Total Value: <span class=\"badge badge-info\">{{stats.total_value | number : '1.2'}}$</span></h5>\n<h5>Total Hours Played: <span class=\"badge badge-info\">{{stats.total_playtime | number : '1.0-2'}}</span></h5>\n<h5>Average Hours to Dollar: <span class=\"badge badge-info\">{{stats.avg_ratio | number : '1.0-2'}}</span></h5>\n"

/***/ }),

/***/ "./src/app/info-label/info-label.component.ts":
/*!****************************************************!*\
  !*** ./src/app/info-label/info-label.component.ts ***!
  \****************************************************/
/*! exports provided: InfoLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoLabelComponent", function() { return InfoLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var InfoLabelComponent = /** @class */ (function () {
    /**
     * Currently displays info about total hours, total price, and total hours / total price (average)
     * @param _service
     */
    function InfoLabelComponent(_service) {
        this._service = _service;
    }
    InfoLabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.stats$.subscribe(function (stats) { return _this.stats = stats; });
    };
    InfoLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-label',
            template: __webpack_require__(/*! ./info-label.component.html */ "./src/app/info-label/info-label.component.html"),
            styles: [__webpack_require__(/*! ./info-label.component.css */ "./src/app/info-label/info-label.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], InfoLabelComponent);
    return InfoLabelComponent;
}());



/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group\" (change)=\"filterChanged()\" #filterForm=\"ngForm\">\n  <div class=\"btn-group btn-group-toggle\">\n    <label class=\"btn-secondary\" ngbButtonLabel>\n      <input type=\"checkbox\" ngbButton [(ngModel)]=\"includeFree\" name=\"includeFree\">Include Free\n    </label>\n    <label class=\"btn-secondary\" ngbButtonLabel>\n      <input type=\"checkbox\" ngbButton [(ngModel)]=\"includeUnknown\" name=\"includeUnknown\">Include Unknown\n    </label>\n    <label class=\"btn-secondary\" ngbButtonLabel>\n      <input type=\"checkbox\" ngbButton [(ngModel)]=\"includeUnplayed\" name=\"includeUnplayed\">Include Unplayed\n    </label>\n  </div>\n<app-chart></app-chart>\n<app-info-label></app-info-label>\n<app-table></app-table>\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var SearchResultsComponent = /** @class */ (function () {
    /**
     * This is a class that basically ties all the user information together after searching for a steam user.
     * Includes charts, infographics, and tables of the games. Will ping api for games using UserService once
     * init and when the steam_id parameter on URL changes. This Component should be a child route of the Search
     * Component.
     * @param route
     * @param service
     * @param router
     */
    function SearchResultsComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // aquire games after getting steam id from url
        // steam id needs to be processed as it might be a url for the user's steam profile
        // processing is done when aquiring games.
        this.steam_id = this.route.snapshot.paramMap.get('steam_id');
        this.service.aquire_games(this.steam_id);
        this.router.events.subscribe(function () {
            if (_this.steam_id != _this.route.snapshot.paramMap.get('steam_id')) {
                _this.steam_id = _this.route.snapshot.paramMap.get('steam_id');
                _this.service.aquire_games(_this.steam_id);
            }
        });
        this.includeFree = true;
        this.includeUnknown = true;
        this.includeUnplayed = true;
    };
    SearchResultsComponent.prototype.filterChanged = function () {
        this.service.includeFree = this.includeFree;
        this.service.includeUnknown = this.includeUnknown;
        this.service.includeUnplayed = this.includeUnplayed;
    };
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
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

module.exports = "<!-- only show jumbotron if on main page -->\n<div *ngIf=\"router.url =='/search'\" class=\"jumbotron text-center\">\n  <h1>Welcome to Condensate!</h1>\n  <p class=\"lead\">Enter your Steam ID or profile URL below to see how well you're spending your time and money\n  on Steam!</p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row-fluid\">\n    <form class=\"form-group\" (ngSubmit)=\"onSearchSubmit(searchForm.valid)\" #searchForm=\"ngForm\">\n      <label class=\"col-md-8\">Steam ID or Steam Profile URL:</label>\n      <div class=\"input-group\">\n        <input class=\"form-control col-md-10\" [(ngModel)]=\"steam_id\" id=\"search_input\" name=\"search_input\" required\n          #search_input=\"ngModel\" />\n        <input class=\"btn btn-primary col-md-2\" type=\"submit\" value=\"Search\" />\n      </div>\n      <div [hidden]=\"search_input.valid || (!submit_touched) \" class=\"alert alert-danger\">\n        Steam ID or URL is required\n      </div>\n    </form>\n    <hr>\n  </div>\n  \n  <!-- children of search defined in app-routing will be shown below -->\n  <router-outlet></router-outlet>\n  <hr>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var compare = function (v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0; };
var SearchComponent = /** @class */ (function () {
    function SearchComponent(router) {
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.steam_id = "76561197963657845";
    };
    SearchComponent.prototype.onSearchSubmit = function (isValid) {
        if (isValid) {
            this.submitted = true;
            this.router.navigate(['search', 'results', { steam_id: this.steam_id }]);
        }
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



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

module.exports = "  /* Sortable table demo */\r\n\r\n  th[sortable] {\r\n    cursor: pointer;\r\n    -moz-user-select: none;\r\n     -ms-user-select: none;\r\n         user-select: none;\r\n    -webkit-user-select: none;\r\n  }\r\n\r\n  tr {\r\n    height: 50px;\r\n  }\r\n\r\n  th[sortable].desc:before,\r\n  th[sortable].asc:before {\r\n    content: '';\r\n    display: block;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC') no-repeat;\r\n    background-size: 22px;\r\n    width: 22px;\r\n    height: 22px;\r\n    float: left;\r\n    margin-left: -22px;\r\n  }\r\n\r\n  th[sortable].desc:before {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n  }\r\n\r\n  /* Filtering table demo */\r\n\r\n  ngbd-table-filtering span.ngb-highlight {\r\n    background-color: yellow;\r\n  }\r\n\r\n  /* Complete table demo */\r\n\r\n  ngbd-table-complete span.ngb-highlight {\r\n    background-color: yellow;\r\n  }\r\n\r\n  h5>.badge {\r\n    vertical-align: middle\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRSx3QkFBd0I7O0VBRXhCO0lBQ0UsZUFBZTtJQUNmLHNCQUFpQjtLQUFqQixxQkFBaUI7U0FBakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsY0FBYztJQUNkLDI4QkFBMjhCO0lBQzM4QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7RUFDL0I7O0VBRUEseUJBQXlCOztFQUN6QjtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQSx3QkFBd0I7O0VBQ3hCO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0U7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIFNvcnRhYmxlIHRhYmxlIGRlbW8gKi9cclxuXHJcbiAgdGhbc29ydGFibGVdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIHRyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIHRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSxcclxuICB0aFtzb3J0YWJsZV0uYXNjOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUFteEpSRUZVZUFIdG1rc3JSVkVVeDcyZkg4Q0lHUU5Ka3BHVVVtYWtERWlaU0pSSVpzUlFtQ2tUSlJtWm1KZ1FFMGtwWDBENURKS0pnZmY3ditydTJ1M08zdnZjNjdUT3ZzZGF0ZHJublAxWS8vL3Y3SHZ2dWJkYlVpSWhCSVNBRUJBQ1FrQUlDQUVoSUFRNENYU2gyRG55RGZtQ1BFRzJJdjlGOU1QbE0vTEh5QWVjZHlNekhZTndSM2ZkTksvT0g5SFhsMVVDb3pEMjRUQ3ZJTHhpekVEV0lFekEwRmNNOHdvQ2dSckpDb1M1UEl3ckFOUVNNQUpYMUxFSTlicXBRbzRKWU5GRktSU3ZJZ3N4SERWbnFaZ0lrUG5OQk0wcklHdFlrOVlPT3NxZ2JnZXBSQ2ZkYm1GdHFoRmtWRURWUGpKcDArWjZlNmhSSGhxQktnZzZaREN2WUJ5Z1ZtVW9FR29oNUpUUnZJSndoSm8xYVVPb2g0Q0xQTXl2eHhpN0VXT01nbkNHc1hYSTFHSVhsWlVZWDd1Y1Ura2JSOE5XOGxoM083Y3VlMFBrMzJNS25kZlV4UUZBd3hkaXJrM2ZIYXBwQW5jMG9xRFB6RGZHVEJyQ2ZIUDA0ZE00b1RWOGN4cjBTVnpIOUZGMDd4RDNpYjZ4Q0RFK00rYVVjVnlndFd6emJ0R1gyclBCckVVWWZlY2ZRa2FGellpNkhqVm5HQmR0TDdlcHFBbGMxK2pSZEFhcDc0UnJuUGM0QkNpanR0WTJ0UmNkTjBnMTd3N0hxWnJYaGRKVFlBdVMzaGQ4eit2S2dLM1YxeldQYWUwbVpETXlrYWRCbjFoVFFCTG5aTndWckpwU2UvTndFZURzRXdDY3RFT3NKVHNneEx2Q3FVbDJBQ2Z0RUd2SkRnanhybkJxa2gzQVNUdkVXcklEUXJ3cm5KcGtCM0RTRHJHVzdJQVE3d3FuSnRrQm5MUnp0ZWpYWFZ1NCtteHovblE5alIxdzVWQjg2ZWpMVEZjbm5Ed2h6VitGNlQrQ0habHg2VEhTam43NmV5eUJJT1BIeURha2hCQVFBa0pBQ0FnQklTQUVoSUFRWUNMd0M4SnhwQW1zRUd0NkFBQUFBRWxGVGtTdVFtQ0MnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG4gIH1cclxuXHJcbiAgdGhbc29ydGFibGVdLmRlc2M6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gIC8qIEZpbHRlcmluZyB0YWJsZSBkZW1vICovXHJcbiAgbmdiZC10YWJsZS1maWx0ZXJpbmcgc3Bhbi5uZ2ItaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIC8qIENvbXBsZXRlIHRhYmxlIGRlbW8gKi9cclxuICBuZ2JkLXRhYmxlLWNvbXBsZXRlIHNwYW4ubmdiLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICBoNT4uYmFkZ2Uge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- code modified from https://ng-bootstrap.github.io/#/components/table/examples -->\n <form>\n   <div class=\"form-group\">\n     <h5 class=\"ml-3\" *ngIf=\"service.loading$ | async; else games_owned\"><span\n         class=\"badge badge-secondary\">Loading...</span></h5>\n     <ng-template #games_owned>\n       <h5>\n         Games Owned: <span class=\"badge badge-primary\">{{service.total$ | async}}</span>\n       </h5>\n     </ng-template>\n   </div>\n\n   <div class=\"form-group form-inline\">\n     Search Games: <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\n   </div>\n\n   <table class=\"table table-striped\">\n     <thead>\n       <tr>\n         <th scope=\"col\" sortable=\"appid\" (sort)=\"onSort($event)\">#</th>\n         <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Game</th>\n         <th scope=\"col\" sortable=\"playtime\" (sort)=\"onSort($event)\">Hours Played</th>\n         <th scope=\"col\" sortable=\"price\" (sort)=\"onSort($event)\">Price</th>\n         <th scope=\"col\" sortable=\"ratio\" (sort)=\"onSort($event)\">Hours Per Dollar</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let gamePlaytime of gamePlaytimes\">\n         <th scope=\"row\">{{ gamePlaytime.game.appid }}</th>\n         <td>\n           <img [src]=\"gamePlaytime.game.header_image\" class=\"mr-2\" style=\"width: 80px\">\n           <a href=\"{{gamePlaytime.game.store_link}}\" target=\"_blank\">\n             <ngb-highlight [result]=\"gamePlaytime.game.name\" [term]=\"service.searchTerm\"></ngb-highlight>\n           </a>\n         </td>\n         <td>\n           <!-- Transform playtime from minutes to hours and limit the number of decimal places to 2 -->\n           <ngb-highlight [result]=\"(gamePlaytime.playtime  | number : '1.0-2')\" [term]=\"service.searchTerm\">\n           </ngb-highlight>\n         </td>\n         <td>\n           <ngb-highlight [result]=\"(gamePlaytime.game.price | number)\" [term]=\"service.searchTerm\">\n           </ngb-highlight>\n         </td>\n         <td>\n           <ngb-highlight [result]=\"gamePlaytime.ratio\" [term]=\"service.searchTerm\">\n           </ngb-highlight>\n         </td>\n       </tr>\n     </tbody>\n   </table>\n\n   <div class=\"d-flex justify-content-between p-2\">\n     <ngb-pagination [collectionSize]=\"total\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\n     </ngb-pagination>\n\n     <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\n       <option [ngValue]=\"6\">6 items per page</option>\n       <option [ngValue]=\"8\">8 items per page</option>\n       <option [ngValue]=\"10\">10 items per page</option>\n     </select>\n   </div>\n\n </form>\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/table/sortable.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TableComponent = /** @class */ (function () {
    function TableComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.gamePlaytimes$.subscribe(function (gamePlaytimes) {
            _this.gamePlaytimes = gamePlaytimes;
        });
        this.service.total$.subscribe(function (total) {
            _this.total = total;
        });
    };
    TableComponent.prototype.onSort = function (_a) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_sortable_directive__WEBPACK_IMPORTED_MODULE_3__["NgbdSortableHeader"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TableComponent.prototype, "headers", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _classes_ChartData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/ChartData */ "./src/app/classes/ChartData.ts");

// original code from https://ng-bootstrap.github.io/#/components/table/examples






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(games, column, direction) {
    if (direction === '') {
        return games;
    }
    else {
        return games.slice().sort(function (a, b) {
            var res;
            if (column == "playtime")
                res = compare(a[column], b[column]);
            else if (column == "ratio") {
                if (a.game.price == b.game.price)
                    res = compare(a.playtime, b.playtime);
                else
                    res = compare(a.playtime / a.game.price, b.playtime / b.game.price);
            }
            else
                res = compare(a.game[column], b.game[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
/**
 * Basically if any of the inclusions are false and the specific parameter is true, then the whole statement
 * returns false. Otherwise it returns true.
 *
 * Example: !includeFree and the game is free => returns false
 *
 * @param gp
 * @param include
 */
function inclusion(gp, include) {
    return !((!include.includeFree && gp.game.price == 0) ||
        (!include.includeUnknown && gp.game.name == "unknown") ||
        (!include.includeUnplayed && gp.playtime == 0));
}
function matches(gp, term, pipe) {
    var playtime_str = gp.playtime.toString();
    var price_str = gp.game.price.toString();
    var comma_less_term = term.replace(/,/g, '');
    var lowerCased = term.toLowerCase();
    return gp.game.name.toLowerCase().includes(lowerCased)
        || playtime_str.includes(comma_less_term)
        || price_str.includes(comma_less_term)
        || pipe.transform(gp.game.appid).includes(comma_less_term)
        || gp.ratio.toLowerCase().includes(lowerCased);
}
var UserService = /** @class */ (function () {
    /**
     * The service that connects all the components that need user data and the api service.
     * @param pipe
     * @param _api_service
     */
    function UserService(pipe, _api_service) {
        var _this = this;
        this.pipe = pipe;
        this._api_service = _api_service;
        this._state = {
            page: 1,
            // default page size here
            pageSize: 8,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            includeFree: true,
            includeUnknown: true,
            includeUnplayed: true
        };
        this.init();
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this._loading$.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this._search(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this._loading$.next(false); })).subscribe(function (result) {
            // categorize and compute stats for charts and info label components
            _this._categories$.next(_this.categorize_games(result.filtered_gamePlaytimes));
            _this._stats$.next(_this.calc_stats(result.filtered_gamePlaytimes));
            _this._gamePlaytimes$.next(result.paginated_gamePlaytimes);
            _this._total$.next(result.total);
        });
        this._search$.next();
    }
    UserService.prototype.init = function () {
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._gamePlaytimes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._stats$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ avg_ratio: 0, total_playtime: 0, total_value: 0 });
        this._categories$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._gpts = [];
    };
    Object.defineProperty(UserService.prototype, "categories$", {
        get: function () { return this._categories$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "gamePlaytimes$", {
        get: function () { return this._gamePlaytimes$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "stats$", {
        get: function () { return this._stats$.asObservable(); },
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
    Object.defineProperty(UserService.prototype, "includeFree", {
        set: function (includeFree) { this._set({ includeFree: includeFree }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "includeUnknown", {
        set: function (includeUnknown) { this._set({ includeUnknown: includeUnknown }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "includeUnplayed", {
        set: function (includeUnplayed) { this._set({ includeUnplayed: includeUnplayed }); },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.calc_stats = function (gamePlaytimes) {
        var total_value = 0;
        var total_playtime = 0;
        for (var _i = 0, gamePlaytimes_1 = gamePlaytimes; _i < gamePlaytimes_1.length; _i++) {
            var gpt = gamePlaytimes_1[_i];
            total_value += gpt.game.price;
            total_playtime += gpt.playtime;
        }
        var ret = {
            avg_ratio: total_playtime / total_value,
            total_playtime: total_playtime,
            total_value: total_value
        };
        return ret;
    };
    /**
     * Call this function to get the games from API and categorize them.
     * @param steam_id Either the uint32 directly or the steam's community profile url
     */
    UserService.prototype.aquire_games = function (steam_id) {
        var _this = this;
        this._loading$.next(true);
        this._api_service.getUserGames(steam_id).subscribe(function (res) {
            _this._gpts = res.map(function (gp) {
                //set the ratio of hours per dollar here as a string and avoid divide by 0
                if (gp.game.price == 0)
                    gp.ratio = 'free';
                else
                    gp.ratio = _this.pipe.transform((gp.playtime / gp.game.price), "1.0-2");
                return gp;
            });
            // calling next on search updates the categories and info
            _this._search$.next();
            _this._loading$.next(false);
        });
    };
    /**
     * Checks if num is between (min, max]
     * @param num
     * @param min default: -Inf
     * @param max default: +Inf
     */
    UserService.prototype.between = function (num, min, max) {
        if (min === void 0) { min = -Infinity; }
        if (max === void 0) { max = Infinity; }
        return num > min && num <= max;
    };
    /**
     * Currently returns three ChartData's: times played, prices of games, and ratios of hours over price.
     * @param gamePlaytimes
     */
    UserService.prototype.categorize_games = function (gamePlaytimes) {
        var _this = this;
        var ret = [];
        var time_data = [
            ["0 Hours", gamePlaytimes.filter(function (gpt) { return gpt.playtime == 0; }).length],
            ["0-2 Hours", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.playtime, 0, 2); }).length],
            ["2+ Hours", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.playtime, 2); }).length]
        ];
        ret.push(Object(_classes_ChartData__WEBPACK_IMPORTED_MODULE_6__["PieMaker"])("By Time Played", time_data));
        var price_data = [
            ["Free", gamePlaytimes.filter(function (gpt) { return gpt.game.price == 0; }).length],
            ["0.01-10$", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.game.price, 0, 10); }).length],
            ["10-40$", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.game.price, 10, 40); }).length],
            ["40-60+$", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.game.price, 40); }).length]
        ];
        ret.push(Object(_classes_ChartData__WEBPACK_IMPORTED_MODULE_6__["PieMaker"])("By Price", price_data));
        var ratio_data = [
            ["0 hours / $", gamePlaytimes.filter(function (gpt) { return gpt.playtime == 0; }).length],
            ["0-1 hours / $", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.playtime / gpt.game.price, 0, 1); }).length],
            ["1+ hours / $", gamePlaytimes.filter(function (gpt) { return _this.between(gpt.playtime / gpt.game.price, 1); }).length]
        ];
        ret.push(Object(_classes_ChartData__WEBPACK_IMPORTED_MODULE_6__["PieMaker"])("By Hours to Dollar", ratio_data));
        return ret;
    };
    UserService.prototype._set = function (patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    };
    UserService.prototype._search = function () {
        var _this = this;
        var _a = this._state, sortColumn = _a.sortColumn, sortDirection = _a.sortDirection, pageSize = _a.pageSize, page = _a.page, searchTerm = _a.searchTerm, includeFree = _a.includeFree, includeUnknown = _a.includeUnknown, includeUnplayed = _a.includeUnplayed;
        // 1. sort
        // change sort if you want more complexity
        var gamePlaytimes = sort(this._gpts, sortColumn, sortDirection);
        // 2. filter
        // change function matches() if you want to see more results
        gamePlaytimes = gamePlaytimes.filter(function (gp) { return inclusion(gp, { includeFree: includeFree, includeUnknown: includeUnknown, includeUnplayed: includeUnplayed }) && matches(gp, searchTerm, _this.pipe); });
        var total = gamePlaytimes.length;
        // 3. paginate
        var paginated_Playtimes = gamePlaytimes.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ filtered_gamePlaytimes: gamePlaytimes, paginated_gamePlaytimes: paginated_Playtimes, total: total });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
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

module.exports = __webpack_require__(/*! F:\Users\Jukebox\Documents\AAA\Programming\Condensate\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map