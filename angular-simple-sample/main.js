(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/keithman/Downloads/barcodescanner-sdk-for-web-samples-master/angular-samples/angular-web-component/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var scandit_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scandit-sdk */ "CRe8");
/* harmony import */ var scandit_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scandit_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["barcodePicker"];
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start the scanner and then aim at a barcode to get the encoded data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Library is loading, please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.startBarcodePicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Scanning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.scannerReady = false;
        this.showButton = false;
        this.showDescription = true;
        this.result = "";
    }
    onReady() {
        this.scannerReady = true;
        this.showButton = true;
    }
    onScan(scanResult) {
        const calculatedString = scanResult.detail.barcodes.reduce((result, barcode) => {
            return `${result} ${scandit_sdk__WEBPACK_IMPORTED_MODULE_1__["Barcode"].Symbology.toHumanizedName(barcode.symbology)} : ${barcode.data}`;
        }, "");
        this.result = calculatedString;
    }
    startBarcodePicker() {
        this.showButton = false;
        this.showDescription = false;
        this.barcodePickerElement.nativeElement.barcodePicker.setVisible(true).resumeScanning();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.barcodePickerElement = _t.first);
    } }, decls: 11, vars: 4, consts: [[1, "container"], [1, "logo"], [1, "name"], ["id", "description", "class", "description", 4, "ngIf"], ["id", "lib-loading", 4, "ngIf"], ["id", "barcode-picker-starter-button", 3, "click", 4, "ngIf"], ["id", "barcode-result", 1, "result-text"], ["id", "barcode-picker", "configure.licenseKey", "YOUR_LICENSE_KEY_IS_NEEDED_HERE", "configure.engineLocation", "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/", "scanningPaused", "true", "visible", "false", "playSoundOnScan", "true", "vibrateOnScan", "true", "scanSettings.enabledSymbologies", "[\"ean8\", \"ean13\", \"upca\", \"upce\"]", 3, "ready", "scan"], ["barcodePicker", ""], ["id", "description", 1, "description"], ["id", "lib-loading"], ["id", "barcode-picker-starter-button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Simple Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "scandit-barcode-picker", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function AppComponent_Template_scandit_barcode_picker_ready_9_listener() { return ctx.onReady(); })("scan", function AppComponent_Template_scandit_barcode_picker_scan_9_listener($event) { return ctx.onScan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scannerReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);\n\n .container[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  text-align: center;\n  font: 400 2.5vh \"Open Sans\", sans-serif;\n}\n\n .logo[_ngcontent-%COMP%] {\n  height: 4vh;\n  margin-top: 4vh;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODQgMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTU4LjU4NSAwaC00LjkxNXMtMC4wNzg5NTYgMC0wLjA3ODk1NiAwLjA3NzE3NnYxMS41NTdjMCAwLjA5NjQ3IDAuMDM5NDc4IDAuMTE1NzYgMC4xMTg0MyAwLjExNTc2aDQuODU1OGMyLjk4MDYgMCA0LjgxNjMtMi4zMTUzIDQuODE2My02LjA3NzYgMC4wMTk3MzktMy4wNjc3LTIuMTMxOC01LjY3MjQtNC43OTY2LTUuNjcyNHptMC4xMDk2OCAxMC43NWgtMy44MTU0di05LjVoMy44MTU0YzEuOTg3MiAwIDMuNjU2NCAyLjExNzYgMy42NTY0IDQuNTI2NiAwIDEuMTY1Ni0wLjI1ODMzIDQuOTczNC0zLjY1NjQgNC45NzM0em0tNTIuOTgzLTUuNDcwMmgtMi4zMDQ1Yy0xLjM0MjYgMC0yLjIwNDMtMS4yMDk2LTIuMjA0My0yLjA1NDMgMC0wLjg0NDc3IDAuNjgxMzQtMi4wMzUxIDIuMjA0My0yLjAzNTFoNC45MDk2IDAuMDIwMDM5YzAuMDYwMTE4IDAgMC4xMjAyNC0wLjA1NzU5OCAwLjEyMDI0LTAuMTE1MnYtMC45NTk5N2MwLTAuMDU3NTk4LTAuMDYwMTE4LTAuMTE1Mi0wLjEyMDI0LTAuMTE1MmgtNC45Mjk3Yy0yLjEyNDIgMC0zLjQwNjcgMS42MzE5LTMuNDA2NyAzLjIwNjMgMCAxLjUxNjcgMS40MDI4IDMuMjA2MyAzLjQwNjcgMy4yMDYzaDIuMzA0NWMxLjM0MjYgMCAyLjA4NDEgMS4yMDk2IDIuMDg0MSAyLjA1NDMgMCAwLjgyNTU3LTAuNTYxMSAyLjExMTktMi4wODQxIDIuMTExOWgtNS4yOTA0Yy0wLjA2MDExOCAwLTAuMTIwMjQgMC4wNTc1OTgtMC4xMjAyNCAwLjExNTJ2MC45NDA3N2MwIDAuMDU3NTk4IDAuMDQwMDc5IDAuMTE1MiAwLjEyMDI0IDAuMTE1Mmg1LjMxMDRjMi4xMjQyIDAgMy4yODY1LTEuNzA4NyAzLjI4NjUtMy4yNjM5IDAtMC43Mjk1OC0wLjMyMDYzLTEuNTE2Ny0wLjg2MTY5LTIuMTExOS0wLjY0MTI2LTAuNzEwMzgtMS41MDMtMS4wOTQ0LTIuNDQ0OC0xLjA5NDR6bTI0LjU3NC01LjI2MDZzMC0wLjAxOTIzMS0wLjAzOTYxNC0wLjAxOTIzMWgtMS43NDNjLTAuMDE5ODA3IDAtMC4wMzk2MTQgMC4wMTkyMzEtMC4wMzk2MTQgMC4wMTkyMzFsLTMuMjA4OCAxMS42NzNzLTAuMDE5ODA3IDAuMDM4NDYyIDAuMDE5ODA3IDAuMDM4NDYyaDEuMTY4NmMwLjAxOTgwNyAwIDAuMDM5NjE0LTAuMDM4NDYyIDAuMDM5NjE0LTAuMDM4NDYybDIuODkxOS0xMC41MTkgMi44OTE5IDEwLjUzOHMwLjAxOTgwNyAwLjAzODQ2MiAwLjAzOTYxNCAwLjAzODQ2MmgxLjE0ODhjMC4wMzk2MTQgMCAwLjAzOTYxNC0wLjAzODQ2MiAwLjAzOTYxNC0wLjAzODQ2MmwtMy4yMDg4LTExLjY5MnptMTcuMDE5LTAuMDE5MjMxaC0wLjk5MDUzYy0wLjA1OTQzMiAwLTAuMTE4ODYgMC4wNTg2MzItMC4xMTg4NiAwLjExNzI2djAuMDM5MDg4IDkuNzkxNXMtNS44NjM5LTkuODUwMi01Ljg2MzktOS44Njk3Yy0wLjAxOTgxMS0wLjAxOTU0NC0wLjAzOTYyMS0wLjAzOTA4OC0wLjAzOTYyMS0wLjAzOTA4OGgtMS44NjIycy0wLjAzOTYyMSAwLTAuMDM5NjIxIDAuMDU4NjMydjExLjc4NWMwIDAuMDU4NjMyIDAuMDU5NDMyIDAuMTE3MjYgMC4xMTg4NiAwLjExNzI2aDAuOTcwNzJjMC4wNTk0MzIgMCAwLjExODg2LTAuMDU4NjMyIDAuMTE4ODYtMC4xMTcyNnYtMC4wNTg2MzItMTAuNjEyLTAuMDc4MTc2bDYuMzk4OCAxMC44NDcgMC4wMTk4MTEgMC4wMTk1NDRoMS4zMjczYzAuMDc5MjQyIDAgMC4wNTk0MzItMC4wNTg2MzIgMC4wNTk0MzItMC4wNTg2MzJ2LTExLjgwNWMwLjAxOTgxMS0wLjA3ODE3Ni0wLjAzOTYyMS0wLjEzNjgxLTAuMDk5MDUzLTAuMTM2ODF6bTIyLjAwMyAwLjExNzI2YzAtMC4wNTg2MzItMC4wNjMzNTYtMC4xMTcyNi0wLjEyNjcxLTAuMTE3MjZoLTEuMDM0OGMtMC4wNjMzNTYgMC0wLjEyNjcxIDAuMDU4NjMyLTAuMTI2NzEgMC4xMTcyNnYwLjEzNjgxIDExLjUxMSAwLjExNzI2YzAgMC4wNTg2MzIgMC4wNjMzNTYgMC4xMTcyNiAwLjEyNjcxIDAuMTE3MjZoMS4wMzQ4YzAuMDYzMzU2IDAgMC4xMjY3MS0wLjA1ODYzMiAwLjEyNjcxLTAuMTE3MjZ2LTAuMTE3MjYtMTEuNTExLTAuMTM2ODF6bTE0LjAxLTAuMTE3MjZoLTkuMjUyYy0wLjA2MDIwOCAwLTAuMTIwNDIgMC4wNTg2MzItMC4xMjA0MiAwLjExNzI2djAuOTU3NjVjMCAwLjA1ODYzMiAwLjA2MDIwOCAwLjExNzI2IDAuMTIwNDIgMC4xMTcyNmg0LjAzNHYxMC42OTFjMCAwLjA1ODYzMiAwLjA2MDIwOCAwLjExNzI2IDAuMTIwNDIgMC4xMTcyNmgwLjk4MzQxYzAuMDYwMjA4IDAgMC4xMjA0Mi0wLjA1ODYzMiAwLjEyMDQyLTAuMTE3MjZ2LTEwLjcxaDQuMDM0YzAuMDYwMjA4IDAgMC4xMjA0Mi0wLjA1ODYzMiAwLjEyMDQyLTAuMTE3MjZ2LTAuOTU3NjVjLTAuMDQwMTM5LTAuMDM5MDg4LTAuMTAwMzUtMC4wOTc3Mi0wLjE2MDU2LTAuMDk3NzJ6bS02MS43OCAxMC42MTRoLTQuNjM1N2MtMS42NTI3IDAtMy4zMjU2LTEuNDgzMi0zLjMyNTYtNC43IDAtMy4yMzYxIDEuOTc1Mi00LjczODUgMy4zMjU2LTQuNzM4NWg0LjU1NTEgMC4wMjAxNTVjMC4wNjA0NjYgMCAwLjEyMDkzLTAuMDU3Nzg3IDAuMTIwOTMtMC4xMTU1N3YtMC45NDM4NWMwLTAuMDU3Nzg3LTAuMDYwNDY2LTAuMTE1NTctMC4xMjA5My0wLjExNTU3aC0wLjAyMDE1NS00LjU1NTFjLTEuODc0NCAwLTQuNTM0OSAxLjgyOTktNC41MzQ5IDUuODk0MyAwIDQuMDA2NiAyLjI3NzUgNS44NTU3IDQuNTM0OSA1Ljg1NTdoNC41OTU0IDAuMDIwMTU1YzAuMDYwNDY2IDAgMC4xMjA5My0wLjA1Nzc4NyAwLjEyMDkzLTAuMTE1NTd2LTAuOTQzODVjMC4wMjAxNTUtMC4wMTkyNjItMC4wNDAzMS0wLjA3NzA0OS0wLjEwMDc4LTAuMDc3MDQ5eiIvPjwvc3ZnPg==) no-repeat center;\n}\n\n .name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 3vh;\n  font-weight: bold;\n  margin: 4vh;\n}\n\n #barcode-picker-starter-button[_ngcontent-%COMP%] {\n  background-color: #555;\n  color: white;\n  font-size: 3vh;\n  font-family: inherit;\n  box-sizing: border-box;\n  padding: 2vh 5vh;\n  margin-top: 5vh;\n  width: 70vw;\n  max-width: 500px;\n  cursor: pointer;\n}\n\n .result-text[_ngcontent-%COMP%] {\n  padding: 2vh;\n}\n\n #barcode-picker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20vw;\n  bottom: 10px;\n  width: 60vw;\n  max-width: 60vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztDQUUxRTtFQUNDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6Qzs7Q0FFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ3ZIQUFndkg7QUFDbHZIOztDQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztDQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7Q0FFQTtFQUNFLFlBQVk7QUFDZDs7Q0FFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XG5cbiAuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250OiA0MDAgMi41dmggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDR2aDtcbiAgbWFyZ2luLXRvcDogNHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMmFXVjNRbTk0UFNJd0lEQWdPRFFnTVRJaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaWJUVTRMalU0TlNBd2FDMDBMamt4TlhNdE1DNHdOemc1TlRZZ01DMHdMakEzT0RrMU5pQXdMakEzTnpFM05uWXhNUzQxTlRkak1DQXdMakE1TmpRM0lEQXVNRE01TkRjNElEQXVNVEUxTnpZZ01DNHhNVGcwTXlBd0xqRXhOVGMyYURRdU9EVTFPR015TGprNE1EWWdNQ0EwTGpneE5qTXRNaTR6TVRVeklEUXVPREUyTXkwMkxqQTNOellnTUM0d01UazNNemt0TXk0d05qYzNMVEl1TVRNeE9DMDFMalkzTWpRdE5DNDNPVFkyTFRVdU5qY3lOSHB0TUM0eE1EazJPQ0F4TUM0M05XZ3RNeTQ0TVRVMGRpMDVMalZvTXk0NE1UVTBZekV1T1RnM01pQXdJRE11TmpVMk5DQXlMakV4TnpZZ015NDJOVFkwSURRdU5USTJOaUF3SURFdU1UWTFOaTB3TGpJMU9ETXpJRFF1T1Rjek5DMHpMalkxTmpRZ05DNDVOek0wZW0wdE5USXVPVGd6TFRVdU5EY3dNbWd0TWk0ek1EUTFZeTB4TGpNME1qWWdNQzB5TGpJd05ETXRNUzR5TURrMkxUSXVNakEwTXkweUxqQTFORE1nTUMwd0xqZzBORGMzSURBdU5qZ3hNelF0TWk0d016VXhJREl1TWpBME15MHlMakF6TlRGb05DNDVNRGsySURBdU1ESXdNRE01WXpBdU1EWXdNVEU0SURBZ01DNHhNakF5TkMwd0xqQTFOelU1T0NBd0xqRXlNREkwTFRBdU1URTFNbll0TUM0NU5UazVOMk13TFRBdU1EVTNOVGs0TFRBdU1EWXdNVEU0TFRBdU1URTFNaTB3TGpFeU1ESTBMVEF1TVRFMU1tZ3ROQzQ1TWprM1l5MHlMakV5TkRJZ01DMHpMalF3TmpjZ01TNDJNekU1TFRNdU5EQTJOeUF6TGpJd05qTWdNQ0F4TGpVeE5qY2dNUzQwTURJNElETXVNakEyTXlBekxqUXdOamNnTXk0eU1EWXphREl1TXpBME5XTXhMak0wTWpZZ01DQXlMakE0TkRFZ01TNHlNRGsySURJdU1EZzBNU0F5TGpBMU5ETWdNQ0F3TGpneU5UVTNMVEF1TlRZeE1TQXlMakV4TVRrdE1pNHdPRFF4SURJdU1URXhPV2d0TlM0eU9UQTBZeTB3TGpBMk1ERXhPQ0F3TFRBdU1USXdNalFnTUM0d05UYzFPVGd0TUM0eE1qQXlOQ0F3TGpFeE5USjJNQzQ1TkRBM04yTXdJREF1TURVM05UazRJREF1TURRd01EYzVJREF1TVRFMU1pQXdMakV5TURJMElEQXVNVEUxTW1nMUxqTXhNRFJqTWk0eE1qUXlJREFnTXk0eU9EWTFMVEV1TnpBNE55QXpMakk0TmpVdE15NHlOak01SURBdE1DNDNNamsxT0Mwd0xqTXlNRFl6TFRFdU5URTJOeTB3TGpnMk1UWTVMVEl1TVRFeE9TMHdMalkwTVRJMkxUQXVOekV3TXpndE1TNDFNRE10TVM0d09UUTBMVEl1TkRRME9DMHhMakE1TkRSNmJUSTBMalUzTkMwMUxqSTJNRFp6TUMwd0xqQXhPVEl6TVMwd0xqQXpPVFl4TkMwd0xqQXhPVEl6TVdndE1TNDNORE5qTFRBdU1ERTVPREEzSURBdE1DNHdNemsyTVRRZ01DNHdNVGt5TXpFdE1DNHdNemsyTVRRZ01DNHdNVGt5TXpGc0xUTXVNakE0T0NBeE1TNDJOek56TFRBdU1ERTVPREEzSURBdU1ETTRORFl5SURBdU1ERTVPREEzSURBdU1ETTRORFl5YURFdU1UWTRObU13TGpBeE9UZ3dOeUF3SURBdU1ETTVOakUwTFRBdU1ETTRORFl5SURBdU1ETTVOakUwTFRBdU1ETTRORFl5YkRJdU9Ea3hPUzB4TUM0MU1Ua2dNaTQ0T1RFNUlERXdMalV6T0hNd0xqQXhPVGd3TnlBd0xqQXpPRFEyTWlBd0xqQXpPVFl4TkNBd0xqQXpPRFEyTW1neExqRTBPRGhqTUM0d016azJNVFFnTUNBd0xqQXpPVFl4TkMwd0xqQXpPRFEyTWlBd0xqQXpPVFl4TkMwd0xqQXpPRFEyTW13dE15NHlNRGc0TFRFeExqWTVNbnB0TVRjdU1ERTVMVEF1TURFNU1qTXhhQzB3TGprNU1EVXpZeTB3TGpBMU9UUXpNaUF3TFRBdU1URTRPRFlnTUM0d05UZzJNekl0TUM0eE1UZzROaUF3TGpFeE56STJkakF1TURNNU1EZzRJRGt1TnpreE5YTXROUzQ0TmpNNUxUa3VPRFV3TWkwMUxqZzJNemt0T1M0NE5qazNZeTB3TGpBeE9UZ3hNUzB3TGpBeE9UVTBOQzB3TGpBek9UWXlNUzB3TGpBek9UQTRPQzB3TGpBek9UWXlNUzB3TGpBek9UQTRPR2d0TVM0NE5qSXljeTB3TGpBek9UWXlNU0F3TFRBdU1ETTVOakl4SURBdU1EVTROak15ZGpFeExqYzROV013SURBdU1EVTROak15SURBdU1EVTVORE15SURBdU1URTNNallnTUM0eE1UZzROaUF3TGpFeE56STJhREF1T1Rjd056SmpNQzR3TlRrME16SWdNQ0F3TGpFeE9EZzJMVEF1TURVNE5qTXlJREF1TVRFNE9EWXRNQzR4TVRjeU5uWXRNQzR3TlRnMk16SXRNVEF1TmpFeUxUQXVNRGM0TVRjMmJEWXVNems0T0NBeE1DNDRORGNnTUM0d01UazRNVEVnTUM0d01UazFORFJvTVM0ek1qY3pZekF1TURjNU1qUXlJREFnTUM0d05UazBNekl0TUM0d05UZzJNeklnTUM0d05UazBNekl0TUM0d05UZzJNekoyTFRFeExqZ3dOV013TGpBeE9UZ3hNUzB3TGpBM09ERTNOaTB3TGpBek9UWXlNUzB3TGpFek5qZ3hMVEF1TURrNU1EVXpMVEF1TVRNMk9ERjZiVEl5TGpBd015QXdMakV4TnpJMll6QXRNQzR3TlRnMk16SXRNQzR3TmpNek5UWXRNQzR4TVRjeU5pMHdMakV5TmpjeExUQXVNVEUzTWpab0xURXVNRE0wT0dNdE1DNHdOak16TlRZZ01DMHdMakV5TmpjeElEQXVNRFU0TmpNeUxUQXVNVEkyTnpFZ01DNHhNVGN5Tm5Zd0xqRXpOamd4SURFeExqVXhNU0F3TGpFeE56STJZekFnTUM0d05UZzJNeklnTUM0d05qTXpOVFlnTUM0eE1UY3lOaUF3TGpFeU5qY3hJREF1TVRFM01qWm9NUzR3TXpRNFl6QXVNRFl6TXpVMklEQWdNQzR4TWpZM01TMHdMakExT0RZek1pQXdMakV5TmpjeExUQXVNVEUzTWpaMkxUQXVNVEUzTWpZdE1URXVOVEV4TFRBdU1UTTJPREY2YlRFMExqQXhMVEF1TVRFM01qWm9MVGt1TWpVeVl5MHdMakEyTURJd09DQXdMVEF1TVRJd05ESWdNQzR3TlRnMk16SXRNQzR4TWpBME1pQXdMakV4TnpJMmRqQXVPVFUzTmpWak1DQXdMakExT0RZek1pQXdMakEyTURJd09DQXdMakV4TnpJMklEQXVNVEl3TkRJZ01DNHhNVGN5Tm1nMExqQXpOSFl4TUM0Mk9URmpNQ0F3TGpBMU9EWXpNaUF3TGpBMk1ESXdPQ0F3TGpFeE56STJJREF1TVRJd05ESWdNQzR4TVRjeU5tZ3dMams0TXpReFl6QXVNRFl3TWpBNElEQWdNQzR4TWpBME1pMHdMakExT0RZek1pQXdMakV5TURReUxUQXVNVEUzTWpaMkxURXdMamN4YURRdU1ETTBZekF1TURZd01qQTRJREFnTUM0eE1qQTBNaTB3TGpBMU9EWXpNaUF3TGpFeU1EUXlMVEF1TVRFM01qWjJMVEF1T1RVM05qVmpMVEF1TURRd01UTTVMVEF1TURNNU1EZzRMVEF1TVRBd016VXRNQzR3T1RjM01pMHdMakUyTURVMkxUQXVNRGszTnpKNmJTMDJNUzQzT0NBeE1DNDJNVFJvTFRRdU5qTTFOMk10TVM0Mk5USTNJREF0TXk0ek1qVTJMVEV1TkRnek1pMHpMak15TlRZdE5DNDNJREF0TXk0eU16WXhJREV1T1RjMU1pMDBMamN6T0RVZ015NHpNalUyTFRRdU56TTROV2cwTGpVMU5URWdNQzR3TWpBeE5UVmpNQzR3TmpBME5qWWdNQ0F3TGpFeU1Ea3pMVEF1TURVM056ZzNJREF1TVRJd09UTXRNQzR4TVRVMU4zWXRNQzQ1TkRNNE5XTXdMVEF1TURVM056ZzNMVEF1TURZd05EWTJMVEF1TVRFMU5UY3RNQzR4TWpBNU15MHdMakV4TlRVM2FDMHdMakF5TURFMU5TMDBMalUxTlRGakxURXVPRGMwTkNBd0xUUXVOVE0wT1NBeExqZ3lPVGt0TkM0MU16UTVJRFV1T0RrME15QXdJRFF1TURBMk5pQXlMakkzTnpVZ05TNDROVFUzSURRdU5UTTBPU0ExTGpnMU5UZG9OQzQxT1RVMElEQXVNREl3TVRVMVl6QXVNRFl3TkRZMklEQWdNQzR4TWpBNU15MHdMakExTnpjNE55QXdMakV5TURrekxUQXVNVEUxTlRkMkxUQXVPVFF6T0RWak1DNHdNakF4TlRVdE1DNHdNVGt5TmpJdE1DNHdOREF6TVMwd0xqQTNOekEwT1Mwd0xqRXdNRGM0TFRBdU1EYzNNRFE1ZWlJdlBqd3ZjM1puUGc9PSkgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDN2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNHZoO1xufVxuXG4jYmFyY29kZS1waWNrZXItc3RhcnRlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMnZoIDV2aDtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICB3aWR0aDogNzB2dztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVzdWx0LXRleHQge1xuICBwYWRkaW5nOiAydmg7XG59XG5cbiNiYXJjb2RlLXBpY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjB2dztcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogNjB2dztcbiAgbWF4LXdpZHRoOiA2MHZ3O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], null, { barcodePickerElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["barcodePicker"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map