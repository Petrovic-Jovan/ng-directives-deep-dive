import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  onConfirmLeavePage(event: MouseEvent): void {
    const leave = window.confirm('Are you sure you want to leave this page?');

    if (leave) {
      return;
    }

    event.preventDefault();
  }
}
