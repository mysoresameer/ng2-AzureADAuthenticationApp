
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import {AzureADAuthService} from '../ngAuth/authenticators/AzureADAuthService';

@Component({
    template: `
        <button *ngIf="!this._authService.isUserAuthenticated()" (click)="logIn()">
            Sign In
        </button>
        <div *ngIf="this._authService.isUserAuthenticated()">User is already signed in.</div>
        `
})

export class LoginComponent {
    constructor(private _authService: AzureADAuthService,private _router: Router) 
    { 
        
    }

    logIn() {
        this._authService.logIn("home");
    }
}