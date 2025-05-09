import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import OktaAuth from '@okta/okta-auth-js';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnChanges {
  @Input()
  isFeatureEnabled: boolean = false;

  @Input()
  buttonText: string = ''

  private oktaAuth = inject(OktaAuth);

  isLoading: boolean = false;
  isButtonGreen: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isFeatureEnabled']?.currentValue) {
      this.triggerButtonTransition();
    }
  }

  triggerButtonTransition() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isButtonGreen = true;
    }, this.getRandomIntInclusive(1000, 12000));
  }

  getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  login() {
    this.oktaAuth.signInWithRedirect().catch((err: any) => {
      console.error('Login failed: ', err);
    });
  }
}
    ""
