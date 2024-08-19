

import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import "oj-c/input-password";
import * as Router from "ojs/ojrouter";

import "ojs/ojbootstrap";
import "oj-c/input-text";
import "oj-c/button";
import "ojs/ojknockout";
import "oj-c/input-number";
import "oj-c/input-password";
import ModuleRouterAdapter = require("@oracle/oraclejet/ojmodulerouter-adapter");
import CoreRouter = require("@oracle/oraclejet/ojcorerouter");

interface CustomerFormData {
        username: string;
        password: string;
    }
    
class LoginViewModel {
    username: ko.Observable<string>;
    password: ko.Observable<string>;
    router: CoreRouter

    constructor( args: ModuleRouterAdapter.ViewModelParameters <{label:string}, {}>) {
       
            this.username = ko.observable("");
            this.password = ko.observable("");
            this.router = args.parentRouter;
        }
    
        loginUser=async ()=> {
                // alert("hi")
                AccUtils.announce("Login page loaded.");
                document.title = "Login";
        
                const formData: CustomerFormData = {
                        username: this.username(),
                        password: this.password(),
                    };
            
                    try {
                            console.log('Sending login request:', formData);
                
            const response = await fetch('https://localhost:8083/customerOperations/loginCustomerService', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
    
                console.log(response);
                const result = await response.json();
                if (response.ok && result && result.username) {
                    sessionStorage.setItem('username', result.username);
                    this.router.go({ path: "account" });
                    alert('Login successful');
                } 
                 else {
                        alert('Login failed');
                    }
                } catch (error) {
                        console.error('Error occurred during login:', error);
                        alert('An error occurred');
                    }
                }
            
                connected(): void {
                        AccUtils.announce("Login ViewModel connected.");
                    }
                }
                
                export = LoginViewModel;
                
                // import * as AccUtils from "../accUtils";
                // import * as ko from "knockout";
                // import "ojs/ojbootstrap";
                // import "oj-c/input-text";
                // import "ojs/ojknockout";
                // import "oj-c/input-number";
                // import "oj-c/input-password";
                // import "oj-c/button";
                
                // // Define the type for the form data
                // interface CustomerFormData {
                //   username: string;
                //   password: string;
                // }
                
                // class LoginViewModel {
                //   username: ko.Observable<string>;
                //   password: ko.Observable<string>;
                
                //   constructor() {
                //     this.username = ko.observable("");
                //     this.password = ko.observable("");
                //   }
                
                //   loginUser = async () => {
                //     AccUtils.announce("Login page loaded.");
                //     document.title = "Login";
                
                //     const formData: CustomerFormData = {
                //       username: this.username(),
                //       password: this.password(),
                //     };
                
                //     try {
                //       console.log('Sending login request:', formData);
                
                //       const response = await fetch('https://localhost:8083/customerOperations/loginCustomerService', {
                //         method: 'POST',
                //         headers: {
                //           'Content-Type': 'application/json'
                //         },
                //         body: JSON.stringify(formData)
                //       });
                
                //       if (response.ok) {
                //         const result = await response.json();
                //         if (result && result.username) {
                //           localStorage.setItem('username', result.username);
                //           console.log('Username stored:', result.username);
                //           alert('Login successful');
                //           // You can redirect to the dashboard or another page here
                //         } else {
                //           alert('Username not found in response');
                //         }
                //       } else if (response.status === 403) {
                //         alert("Account is blocked");
                //       } else if (response.status === 401) {
                //         alert("Invalid credentials");
                //       } else {
                //         throw new Error('Login failed');
                //       }
                //     } catch (error: any) {
                //       console.error('Error:', error);
                //       alert('An error occurred during login');
                //     }
                //   }
                  
                //   connected(): void {
                //     AccUtils.announce("Login ViewModel connected.");
                //   }
                // }
                
                // export = LoginViewModel;