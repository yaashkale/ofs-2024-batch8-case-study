import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import "oj-c/input-password";
import "oj-c/button";
import "oj-c/input-text"
import * as Router from "ojs/ojrouter";

// Define the type for the form data
interface CustomerFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  zip: number;
  email: string;
}

class RegistrationViewModel {
  firstName: ko.Observable<string>;
  lastName: ko.Observable<string>;
  username: ko.Observable<string>;
  password: ko.Observable<string>;
  phone: ko.Observable<string>;
  addressLine1: ko.Observable<string>;
  addressLine2: ko.Observable<string>;
  addressLine3: ko.Observable<string>;
  city: ko.Observable<string>;
  state: ko.Observable<string>;
  zip: ko.Observable<number>;
  email: ko.Observable<string>;
  router: Router;

  constructor() {
    this.firstName = ko.observable("");
    this.lastName = ko.observable("");
    this.username = ko.observable("");
    this.password = ko.observable("");
    this.phone = ko.observable("");
    this.addressLine1 = ko.observable("");
    this.addressLine2 = ko.observable("");
    this.addressLine3 = ko.observable("");
    this.city = ko.observable("");
    this.state = ko.observable("");
    this.zip = ko.observable(0);
    this.email = ko.observable("");
    this.router = Router.rootInstance;
  }



  registerUser = async () => {
    AccUtils.announce("Registration page loaded.");
    document.title = "Registration";
  
    // Collect form data
    const formData: CustomerFormData = {
      firstName: this.firstName(),
      lastName: this.lastName(),
      username: this.username(),
      password: this.password(),
      phone: this.phone(),
      addressLine1: this.addressLine1(),
      addressLine2: this.addressLine2(),
      addressLine3: this.addressLine3(),
      city: this.city(),
      state: this.state(),
      zip: this.zip(),
      email: this.email()
    };
  
    try {
      const response = await fetch('http://localhost:8083/customerOperations/addCustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        AccUtils.announce('Registration successful');
        this.router.go('login');
      } else {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        AccUtils.announce('Registration failed: ' + errorText);
      }
    } catch (error: any) {
      console.error('Network error:', error);
      AccUtils.announce('An error occurred: ' + error.message);
    }
    
  }
  connected(): void {
    AccUtils.announce("Register ViewModel connected.");
}
}
export = RegistrationViewModel;


