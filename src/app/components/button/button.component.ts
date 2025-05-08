import { Component, inject } from '@angular/core';
import OktaAuth from '@okta/okta-auth-js';
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  private oktaAuth = inject(OktaAuth);

  login() {
    this.oktaAuth.signInWithRedirect();
  }
}
