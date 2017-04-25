// #docregion
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticatedHttpService } from '../ngAuth/AuthenticatedHttpService';
import { AzureADAuthService } from '../ngAuth/authenticators/AzureADAuthService';


@Component({
    template: `
        <div *ngIf="this._authService.isUserAuthenticated()">
                Current logged in user : {{this._authService.getUserName()}}
                <br/>
                <button (click)="runCommand()">
                    GetUserDetails
                </button>
                <pre>{{_userData | json}}</pre>
                <button (click)="logOut()">Logout</button>
                <br/>
        </div>
        <div *ngIf="!this._authService.isUserAuthenticated()">
            User is not signed in.
        </div>
        `
})

export class StatusComponent {
    private _userData: Object = {"intialValue":"Data will show here once you press GetUserDetails button"};
    constructor(private _authService: AzureADAuthService, private _authenticatedHttpService: AuthenticatedHttpService) { }

    logOut() {
        this._authService.logOut("/");
    }

    runCommand() {
        this._authenticatedHttpService.get("https://graph.windows.net/me?api-version=1.6").subscribe((results => {
            this._userData = results.json();
        }));
    }
}