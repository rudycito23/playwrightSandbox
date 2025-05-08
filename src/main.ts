import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_CONFIG } from '@okta/okta-angular';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-03059668.okta.com/oauth2/default',
  clientId: '0oaon74r8jEez5jcR5d7',
  redirectUri: 'http://localhost:4200/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    { provide: OktaAuth, useValue: oktaAuth } 
  ],
});
