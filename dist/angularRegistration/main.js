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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Welcome to {{title}}!</span>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'User Registration';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _origination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./origination.service */ "./src/app/origination.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _origination_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./origination/register/register.component */ "./src/app/origination/register/register.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _origination_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./origination/list-user/list-user.component */ "./src/app/origination/list-user/list-user.component.ts");
/* harmony import */ var _origination_show_user_show_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./origination/show-user/show-user.component */ "./src/app/origination/show-user/show-user.component.ts");
/* harmony import */ var _origination_save_user_save_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./origination/save-user/save-user.component */ "./src/app/origination/save-user/save-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: '',
        component: _origination_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__["ListUserComponent"]
    },
    {
        path: 'register',
        component: _origination_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: 'getUser/:id',
        component: _origination_show_user_show_user_component__WEBPACK_IMPORTED_MODULE_11__["ShowUserComponent"]
    },
    {
        path: 'saveUser/:id',
        component: _origination_save_user_save_user_component__WEBPACK_IMPORTED_MODULE_12__["SaveUserComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _origination_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _origination_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__["ListUserComponent"],
                _origination_show_user_show_user_component__WEBPACK_IMPORTED_MODULE_11__["ShowUserComponent"],
                _origination_save_user_save_user_component__WEBPACK_IMPORTED_MODULE_12__["SaveUserComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_origination_service__WEBPACK_IMPORTED_MODULE_2__["OriginationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/origination.service.ts":
/*!****************************************!*\
  !*** ./src/app/origination.service.ts ***!
  \****************************************/
/*! exports provided: OriginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginationService", function() { return OriginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OriginationService = /** @class */ (function () {
    function OriginationService(http) {
        this.http = http;
        this.API_URL = '//localhost:9090/';
    }
    OriginationService.prototype.getAll = function () {
        return this.http.get(this.API_URL + 'getAllUser');
    };
    OriginationService.prototype.getUser = function (id) {
        return this.http.get(this.API_URL + 'getUser?id=' + id);
    };
    OriginationService.prototype.registerUser = function (user) {
        console.log(user);
        return this.http.post(this.API_URL + 'registerUser', user);
    };
    OriginationService.prototype.removeUser = function (id) {
        return this.http.delete(this.API_URL + 'deleteUser?id=' + id);
    };
    OriginationService.prototype.saveIdentification = function (identification) {
        console.log(identification);
        return this.http.post(this.API_URL + 'addIdentification/' + identification.userId, identification);
    };
    OriginationService.prototype.saveIncome = function (income) {
        console.log(income);
        return this.http.post(this.API_URL + 'addIncome/' + income.userId, income);
    };
    OriginationService.prototype.saveBankAccount = function (bankAccount) {
        console.log(bankAccount);
        return this.http.post(this.API_URL + 'addBankAccount/' + bankAccount.userId, bankAccount);
    };
    OriginationService.prototype.savePaymentMethod = function (paymentMethod) {
        console.log(paymentMethod);
        return this.http.post(this.API_URL + 'addPaymentMethod/' + paymentMethod.userId, paymentMethod);
    };
    OriginationService.prototype.saveUser = function (id) {
        return this.http.post(this.API_URL + 'saveUser?id=' + id, id);
    };
    OriginationService.prototype.reviewStandardInfo = function (id) {
        return this.http.post(this.API_URL + 'reviewStandardInfo?id=' + id, id);
    };
    OriginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OriginationService);
    return OriginationService;
}());



/***/ }),

/***/ "./src/app/origination/list-user/list-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/origination/list-user/list-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/origination/list-user/list-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/origination/list-user/list-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header><h2>User List</h2></mat-card-header>\n  <mat-card-content>\n    <table mat-table>\n      <thead>\n      <tr>\n        <th>Id</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Edit</th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let user of users\">\n      <tr>\n        <td>{{user.id}}</td>\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>{{user.email}}</td>\n        <td>\n          <button mat-raised-button color=\"secondary\" (click)=\"remove(user.id)\"\n                  *ngIf=\"user.id\" type=\"button\">Delete\n          </button>\n          <button mat-raised-button color=\"secondary\" (click)=\"showUser(user.id)\"\n                  *ngIf=\"user.id\" type=\"button\">Show User JSON\n          </button>\n          <button mat-raised-button color=\"secondary\" (click)=\"saveUser(user.id)\"\n                  *ngIf=\"user.id\" type=\"button\">Save User JSON\n          </button>\n        </td>\n\n      </tr>\n      </tbody>\n    </table>\n  </mat-card-content>\n  <mat-card-footer>\n    <button mat-raised-button color=\"primary\" routerLink=\"/register\">Register User</button>\n  </mat-card-footer>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/origination/list-user/list-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/origination/list-user/list-user.component.ts ***!
  \**************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _origination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../origination.service */ "./src/app/origination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(route, router, originationService) {
        this.route = route;
        this.router = router;
        this.originationService = originationService;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.originationService.getUser("5bbcba8efa9c47ba2ddb124d").subscribe(data => {
          this.user = data;
        });*/
        this.sub = this.route.params.subscribe(function (params) {
            _this.originationService.getAll().subscribe(function (users) {
                if (users) {
                    _this.users = users;
                }
                else {
                    console.log("No list found");
                    _this.ngOnInit();
                }
            });
        });
    };
    ListUserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ListUserComponent.prototype.addIdentification = function (id) {
        console.log(id);
        this.router.navigate(["/identification", id]);
    };
    ListUserComponent.prototype.addIncome = function (id) {
        console.log(id);
        this.router.navigate(["/income", id]);
    };
    ListUserComponent.prototype.addBankAccount = function (id) {
        console.log(id);
        this.router.navigate(["/bankAccount", id]);
    };
    ListUserComponent.prototype.addPaymentMethod = function (id) {
        console.log(id);
        this.router.navigate(["/paymentMethod", id]);
    };
    ListUserComponent.prototype.showUser = function (id) {
        console.log(id);
        this.router.navigate(["/getUser", id]);
    };
    ListUserComponent.prototype.saveUser = function (id) {
        console.log(id);
        this.router.navigate(["/saveUser", id]);
    };
    ListUserComponent.prototype.reviewStandardInfo = function (id) {
        console.log(id);
        this.router.navigate(["/reviewStandardInfo", id]);
    };
    ListUserComponent.prototype.showLoans = function (id) {
        console.log(id);
        this.router.navigate(["/showLoans", id]);
    };
    ListUserComponent.prototype.remove = function (id) {
        var _this = this;
        this.originationService.removeUser(id).subscribe(function (result) {
            console.log(result);
            _this.ngOnInit();
        }, function (error) { return console.error(error); });
    };
    ListUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/origination/list-user/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.css */ "./src/app/origination/list-user/list-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _origination_service__WEBPACK_IMPORTED_MODULE_2__["OriginationService"]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/origination/register/register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/origination/register/register.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/origination/register/register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/origination/register/register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div style=\"color:green\" id=\"successDiv\" *ngIf=\"successMsg\">User added with {{successMsg.id}}</div>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"save(userForm.value)\" class=\"form\">\n    <mat-card-header>\n      <mat-card-title><h2>Register User</h2></mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"First Name\" [(ngModel)]=\"user.firstName\" required name=\"firstName\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Last Name\" [(ngModel)]=\"user.lastName\" required name=\"lastName\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"CNP\" [(ngModel)]=\"user.cnp\" name=\"cnp\" >\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"user.email\" required name=\"email\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"user.phone\" required name=\"phone\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <!--<input matInput placeholder=\"Where did you hear about us?\" [(ngModel)]=\"\" name=\"marketingChannel\">-->\n          <mat-select placeholder=\"Where did you hear about us?\" [(ngModel)]=\"user.marketingChannel\" name=\"marketingChannel\">\n            <mat-option *ngFor=\"let option of this.marketingChannelOptions\" [value]=\"option.id\">\n              {{option.name}}\n            </mat-option>\n          </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"How will you use this credit?\" [(ngModel)]=\"user.loanReason\" name=\"loanReason\">\n      </mat-form-field>\n      <input type=\"checkbox\" [(ngModel)]=\"user.signedPrivacyAgreement\" required name=\"signedPrivacyAgreement\">: By ticking the box, I acknowledge that I have read, understand and agree to the Terms of Use of this site.<br>\n      <input type=\"checkbox\" [(ngModel)]=\"user.dprocNoMarketing\" name=\"dprocNoMarketing\">: I agree to receive offers, promotions and marketing communications under the terms and conditions.\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\"\n              [disabled]=\"!userForm.form.valid\">Save\n      </button>\n      <a mat-button routerLink=\"/\">Cancel</a>\n    </mat-card-actions>\n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/origination/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/origination/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _origination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../origination.service */ "./src/app/origination.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, router, originationService) {
        this.route = route;
        this.router = router;
        this.originationService = originationService;
        this.user = {};
        this.marketingChannelOptions = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.originationService.getUser("5bbcba8efa9c47ba2ddb124d").subscribe(data => {
          this.user = data;
        });*/
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.originationService.getUser(id).subscribe(function (user) {
                    if (user) {
                        _this.user = user;
                    }
                    else {
                        console.log("User with id '" + id + "' not found, returning to list");
                        _this.ngOnInit();
                    }
                });
            }
            _this.originationService.getAll().subscribe(function (users) {
                if (users) {
                    _this.users = users;
                }
                else {
                    console.log('No list found');
                    _this.ngOnInit();
                }
            });
            _this.marketingChannelOptions = [{ id: 1, name: 'TV' }, { id: 2, name: 'Advertisement' }];
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RegisterComponent.prototype.save = function (form) {
        var _this = this;
        this.originationService.registerUser(form).subscribe(function (result) {
            console.log(result);
            if (result.error) {
                console.log(result.messages);
                Object.keys(result.messages).forEach(function (key) {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()("[name='" + key + "']").append("<span style='color:red;'>" + result.messages[key] + "</span>");
                });
            }
            else {
                _this.successMsg = result;
                //this.ngOnInit()
                _this.router.navigate(["/identification", result.user.id]);
            }
        }, function (error) { return console.error(error); });
    };
    RegisterComponent.prototype.edit = function (id) {
        console.log("id to be edited - " + id);
        this.ngOnInit();
    };
    RegisterComponent.prototype.logMapElements = function (value, key, map) {
        console.log("m[" + key + "] = " + value);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/origination/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/origination/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _origination_service__WEBPACK_IMPORTED_MODULE_1__["OriginationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/origination/save-user/save-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/origination/save-user/save-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/origination/save-user/save-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/origination/save-user/save-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>Saving User...</p>\n</div>\n<div *ngIf=\"userId\">\n  User saved with Id {{userId}}\n</div>\n<div *ngIf=\"error\">\n  {{error}}\n</div>\n"

/***/ }),

/***/ "./src/app/origination/save-user/save-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/origination/save-user/save-user.component.ts ***!
  \**************************************************************/
/*! exports provided: SaveUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserComponent", function() { return SaveUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _origination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../origination.service */ "./src/app/origination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveUserComponent = /** @class */ (function () {
    function SaveUserComponent(route, router, originationService) {
        this.route = route;
        this.router = router;
        this.originationService = originationService;
        this.user = {};
    }
    SaveUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.originationService.saveUser(params.id).subscribe(function (resp) {
                if (resp.user) {
                    _this.user = resp.user;
                    _this.userId = resp.user.userId;
                }
                else {
                    _this.error = resp.error;
                    console.log('No User found');
                }
            });
        });
    };
    SaveUserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SaveUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-user',
            template: __webpack_require__(/*! ./save-user.component.html */ "./src/app/origination/save-user/save-user.component.html"),
            styles: [__webpack_require__(/*! ./save-user.component.css */ "./src/app/origination/save-user/save-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _origination_service__WEBPACK_IMPORTED_MODULE_2__["OriginationService"]])
    ], SaveUserComponent);
    return SaveUserComponent;
}());



/***/ }),

/***/ "./src/app/origination/show-user/show-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/origination/show-user/show-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/origination/show-user/show-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/origination/show-user/show-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header><h2>User</h2></mat-card-header>\n  <mat-card-content>\n    <pre>{{user | json}}</pre>\n  </mat-card-content>\n  <mat-card-footer>\n    <button mat-raised-button color=\"primary\" routerLink=\"/register\">Register User</button>\n  </mat-card-footer>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/origination/show-user/show-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/origination/show-user/show-user.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUserComponent", function() { return ShowUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _origination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../origination.service */ "./src/app/origination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowUserComponent = /** @class */ (function () {
    function ShowUserComponent(route, router, originationService) {
        this.route = route;
        this.router = router;
        this.originationService = originationService;
        this.user = {};
    }
    ShowUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.originationService.getUser("5bbcba8efa9c47ba2ddb124d").subscribe(data => {
          this.user = data;
        });*/
        this.sub = this.route.params.subscribe(function (params) {
            _this.originationService.getUser(params.id).subscribe(function (user) {
                if (user) {
                    _this.user = user;
                }
                else {
                    console.log('No User found');
                }
            });
        });
    };
    ShowUserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShowUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-user',
            template: __webpack_require__(/*! ./show-user.component.html */ "./src/app/origination/show-user/show-user.component.html"),
            styles: [__webpack_require__(/*! ./show-user.component.css */ "./src/app/origination/show-user/show-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _origination_service__WEBPACK_IMPORTED_MODULE_2__["OriginationService"]])
    ], ShowUserComponent);
    return ShowUserComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/anshulbansal/github_examples/angularRegistration/angularRegistration/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map