import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';

import { AzureADServiceConstants } from './ngAuth/authenticators/AzureADServiceConstants';
import { AzureADAuthService } from './ngAuth/authenticators/AzureADAuthService';
import { AuthenticatedHttpService } from './ngAuth/AuthenticatedHttpService';
//import { serviceConstants } from './authsettings.config';
//let authenticator = new AzureADAuthService(serviceConstants);

@NgModule({
    providers: [
        AuthenticatedHttpService,
        AzureADAuthService
    ],
        /*
        {
            provide: AzureADAuthService,
            useValue: authenticator
        }],*/
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        StatusComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
