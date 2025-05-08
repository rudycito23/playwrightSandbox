import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `<p>Loading...</p>`,
})
export class CallbackComponent {
  private oktaAuth = inject(OktaAuth);
  private router = inject(Router);

  constructor() {
    this.oktaAuth
      .handleLoginRedirect()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.error('Login Error:', err);
      });
  }
}
