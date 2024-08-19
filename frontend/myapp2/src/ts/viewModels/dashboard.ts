/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
class DashboardViewModel {
  value: ko.Observable<string>;
  firstname: ko.Observable<string> | ko.Observable<any>; // any means can have null values
  salary: ko.Observable<number> | ko.Observable<any>;
  constructor() {
    this.value = ko.observable("Green");
    this.firstname = ko.observable(null)
    this.salary = ko.observable(null);
  }
}
export = DashboardViewModel;