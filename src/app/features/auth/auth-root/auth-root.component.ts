import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-root',
  template: `
    <p>
      auth-root works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
