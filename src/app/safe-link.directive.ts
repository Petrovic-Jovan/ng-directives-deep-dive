import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  customUrlExt = input<string>('myApp', { alias: 'appSafeLink' });

  onConfirmLeavePage(event: MouseEvent): void {
    const leave = window.confirm('Are you sure you want to leave this page?');

    if (leave) {
      const target = (event.target as HTMLAnchorElement).href;
      console.log(`Adress shown to user: ${target}...`);
      (event.target as HTMLAnchorElement).href =
        target + '?from=' + this.customUrlExt();
      console.log(`Actual URL: ${(event.target as HTMLAnchorElement).href}...`);
      return;
    }

    event.preventDefault();
  }
}
