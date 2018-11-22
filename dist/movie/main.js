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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n<app-movieapi></app-movieapi>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movieapi_movieapi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movieapi/movieapi.component */ "./src/app/movieapi/movieapi.component.ts");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-service.service */ "./src/app/movie-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _movieapi_movieapi_component__WEBPACK_IMPORTED_MODULE_5__["MovieapiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [_movie_service_service__WEBPACK_IMPORTED_MODULE_6__["MovieServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movie-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/movie-service.service.ts ***!
  \******************************************/
/*! exports provided: MovieServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServiceService", function() { return MovieServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieServiceService = /** @class */ (function () {
    function MovieServiceService(http) {
        this.http = http;
        this.omdb = '//www.omdbapi.com/?t=';
    }
    MovieServiceService.prototype.search = function (term) {
        return this.http.get(this.omdb + term + '&apikey=1b86e27f')
            .map(function (response) {
            return response.json();
        });
    };
    MovieServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MovieServiceService);
    return MovieServiceService;
}());



/***/ }),

/***/ "./src/app/movieapi/movieapi.component.css":
/*!*************************************************!*\
  !*** ./src/app/movieapi/movieapi.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\n    background-color:black;\n    }\n    .movie-media{\n    margin-top:13%;\n    border:1px solid;\n    }\n    .image-img{\n        width:100%;\n    }\n    img{\n        width: 27%;\n        margin-left: 35%;\n        margin-top: 2%;\n    }\n    .recent{\n        position: absolute;\n        font-size: 200%;\n        margin-top: 8%;\n        margin-left: -97%;\n        font-weight: bold;\n    }\n    .span1{\n    \n        position: absolute;\n        margin-left: -17%;\n        font-weight: bold;\n        font-size: 21px;\n        font-family: Arial, Helvetica, sans-serif;\n        color:whitesmoke;\n        opacity: 0.8;\n    }\n    .movie-props{\n        margin-left: 7%;\n    }\n    p{\n        margin-left: 26%;\n        font-size: 125%;\n        font-style: italic;\n        color:whitesmoke;\n        opacity: 0.4;\n    }\n    label{\n    margin-left: 41%;\n    /* width: 18%; */\n    /* height: 14%; */\n    font-size: 197%;\n    margin-top: 3%;\n    line-height: 67px;\n\n}\n    .error-messages{\n    margin-top: 1%;\n    font-size: 146%;\n    font-weight: bold;\n    color: red;\n}\n    /*.dropdown{\n    position: absolute;\n    width: 100%;\n    height: 400%;\n    z-index: 1;\n    margin-top: 2.8%;\n    background-color: whitesmoke;\n    overflow-y: auto;\n}*/\n    dropdown-button{\n    margin:10%;\n}\n    .drop{\n    margin-top: 0%;\n    position: absolute;\n    top: 400%;\n    background: black;\n    border-spacing: 35%;\n    /* padding-left: 0%; */\n    outline-width: 38%;\n}\n    .sub-dropdown\n{\n    padding:10px;\n    font-family: sans-serif;\n    color:#A550BC;\n}\n    .sub-dropdown:hover{\nbackground: #C2C2C2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVhcGkvbW92aWVhcGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtLQUN0QjtJQUNEO0lBQ0EsZUFBZTtJQUNmLGlCQUFpQjtLQUNoQjtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7S0FDbEI7SUFDRDtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7S0FDckI7SUFDRDs7UUFFSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLGlCQUFpQjtRQUNqQixhQUFhO0tBQ2hCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixhQUFhO0tBQ2hCO0lBQ0w7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjs7Q0FFckI7SUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDtJQUNEOzs7Ozs7OztHQVFHO0lBQ0g7SUFDSSxXQUFXO0NBQ2Q7SUFDRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtJQUNEOztJQUVJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsY0FBYztDQUNqQjtJQUNEO0FBQ0Esb0JBQW9CO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW92aWVhcGkvbW92aWVhcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgfVxuICAgIC5tb3ZpZS1tZWRpYXtcbiAgICBtYXJnaW4tdG9wOjEzJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkO1xuICAgIH1cbiAgICAuaW1hZ2UtaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyNyU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIH1cbiAgICAucmVjZW50e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogOCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOTclO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnNwYW4xe1xuICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTclO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6d2hpdGVzbW9rZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAubW92aWUtcHJvcHN7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI2JTtcbiAgICAgICAgZm9udC1zaXplOiAxMjUlO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOndoaXRlc21va2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogNDElO1xuICAgIC8qIHdpZHRoOiAxOCU7ICovXG4gICAgLyogaGVpZ2h0OiAxNCU7ICovXG4gICAgZm9udC1zaXplOiAxOTclO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xuXG59XG4uZXJyb3ItbWVzc2FnZXN7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgZm9udC1zaXplOiAxNDYlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZWQ7XG59XG4vKi5kcm9wZG93bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luLXRvcDogMi44JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59Ki9cbmRyb3Bkb3duLWJ1dHRvbntcbiAgICBtYXJnaW46MTAlO1xufVxuLmRyb3B7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItc3BhY2luZzogMzUlO1xuICAgIC8qIHBhZGRpbmctbGVmdDogMCU7ICovXG4gICAgb3V0bGluZS13aWR0aDogMzglO1xufVxuLnN1Yi1kcm9wZG93blxue1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjojQTU1MEJDO1xufVxuLnN1Yi1kcm9wZG93bjpob3ZlcntcbmJhY2tncm91bmQ6ICNDMkMyQzI7XG59Il19 */"

/***/ }),

/***/ "./src/app/movieapi/movieapi.component.html":
/*!**************************************************!*\
  !*** ./src/app/movieapi/movieapi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" id=\"search-component\">\n  \n  <label for=\"search-box\" class=\"search-label\">\n Movie Search\n  </label>\n  \n  <div class=\"input-group groups\">\n      <div ngbDropdown  class=\"d-inline-block\">\n          <input class=\"form-control textbox\"  id=\"dropdownBasic1\" ngbDropdownToggle type=\"text\" (click)=\"toggleDropDown()\" placeholder=\"Search...\" #searchBox id=\"search-box\" autofocus=\"true\"/>\n          <span class=\"recent\">Recent :</span>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"drop\">\n            <button class=\"dropdown-item dropdown-button\" *ngFor=\"let s of searches; let i=index\"  >\n              <a href=\"#\">{{s}}</a></button>\n          </div>\n        </div>\n   <!-- <input class=\"form-control textbox\" (click)=\"toggleDropDown()\" placeholder=\"Search...\" #searchBox id=\"search-box\" autofocus=\"true\"/>\n    <ul *ngIf=\"showDropDown\" class=\"dropdown\">\n      <div>\n<li class=\"sub-dropdown\" *ngFor=\"let s of searches\">\n{{s}}\n</li>\n</div>\n</ul>-->\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-danger button\" type=\"submit\" (click)=\"searchMovies(searchBox.value)\">\n        <span class=\"glyphicon glyphicon-search white\" aria-hidden=\"true\"></span>\n      </button>\n    </span>\n  </div>\n\n  <div *ngIf=\"movieFound\">\n\n    <div class=\"media movie-media\">\n      <div class=\"image-img\">\n        <a href=\"#\">\n          <img class=\"media-object\" src=\"{{moviePoster}}\" alt=\"{{movie.Title}}\">\n        </a>\n      </div>\n      <hr>\n      <div class=\"media-body media-content\">\n        <h4 class=\"media-heading\">\n          \n            <div class=\"movie-props\"><p class=\"p1\"><span class=\"span1\">Title </span><b> : </b>    {{movie.Title}}</p></div>\n            <hr>\n             <div class=\"movie-props\"><p class=\"p2\"><span class=\"span1\">Year </span><b> : </b>    {{movie.Year}}</p></div>  \n            <hr>\n             <div class=\"movie-props\"><p class=\"p3\"><span class=\"span1\">Rating </span><b> : </b>    {{movie.Rated}}</p> </div>\n            <hr>\n             <div class=\"movie-props\"><p class=\"p4\"><span class=\"span1\">Country </span><b> : </b>    {{movie.Country}}</p></div>\n            <hr>\n        </h4>\n      \n            <div class=\"movie-props\"><p class=\"p5\"><span class=\"span1\">Summary </span><b> : </b>   {{movie.Plot}}</p></div>\n        \n        <hr>\n      \n            <div class=\"movie-props\"><p class=\"p6\"><span class=\"span1\">Genre </span> <b> : </b>    {{movie.Genre}}</p></div>\n        \n        <hr>\n        \n            <div class=\"movie-props\"><p class=\"p7\"><span class=\"span1\">Starring </span> <b> : </b>    {{movie.Actors}}</p></div>\n       \n        <hr>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"error-messages\" *ngIf=\"!movieFound\">\n   <span> {{message}}</span>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/movieapi/movieapi.component.ts":
/*!************************************************!*\
  !*** ./src/app/movieapi/movieapi.component.ts ***!
  \************************************************/
/*! exports provided: MovieapiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieapiComponent", function() { return MovieapiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieapiComponent = /** @class */ (function () {
    function MovieapiComponent(movieServiceService) {
        this.movieServiceService = movieServiceService;
        this.showDropDown = false;
        this.searches = [];
    }
    MovieapiComponent.prototype.ngOnInit = function () {
    };
    MovieapiComponent.prototype.searchMovies = function (term) {
        var _this = this;
        this.movieServiceService.search(term).subscribe(function (res) {
            if (res.Response === 'True') {
                _this.movie = res;
                var index = 0;
                _this.searches.push(_this.movie.Title);
                if (_this.searches.length > 5) {
                    _this.searches.splice(index, 1);
                }
                console.log(index);
                console.log(_this.searches.length);
                if (_this.movie.Poster != 'N/A') {
                    _this.moviePoster = _this.movie.Poster;
                }
                else {
                    _this.moviePoster = '';
                }
                _this.movieFound = true;
            }
            else {
                _this.movieFound = false;
                _this.message = 'No movie was found that matched your search.';
            }
        });
        console.log(term, this.movie);
    };
    MovieapiComponent.prototype.toggleDropDown = function () {
        //this.showDropDown = !this.showDropDown;
        this.showDropDown = true;
    };
    MovieapiComponent.prototype.DropDown = function () {
        this.showDropDown = !this.showDropDown;
    };
    MovieapiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movieapi',
            template: __webpack_require__(/*! ./movieapi.component.html */ "./src/app/movieapi/movieapi.component.html"),
            styles: [__webpack_require__(/*! ./movieapi.component.css */ "./src/app/movieapi/movieapi.component.css")],
            providers: [_movie_service_service__WEBPACK_IMPORTED_MODULE_1__["MovieServiceService"]]
        }),
        __metadata("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_1__["MovieServiceService"]])
    ], MovieapiComponent);
    return MovieapiComponent;
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

module.exports = __webpack_require__(/*! /home/stackup/movie/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map