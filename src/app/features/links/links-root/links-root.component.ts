import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-links-root',
  template: `
    <app-list-page>
      <app-list-page-header>
        Links
      </app-list-page-header>
      <app-list-page-body>
        <div class="links">
          <ul>
            <li><div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
            <li>Fancy page spinner - <div class="dwf">
              <a class="btn" href="https://codepen.io/uchardon/">done with fun - @uchardon</a> &copy;2018 </div>
            </li>
            <li>
              List item loading animation taken from <a href="https://icons8.com/cssload/en/horizontal-bars">here</a>
            </li>
            <li>
              Mona Lisa image is taken from <a href="https://www.npr.org/">www.npr.org</a>
            </li>
            <li>
              Images of other paintings are from  <a href="https://en.wikipedia.org/">wikipedia</a>
            </li>
            <li>
              The data here is for example only and should not be used for any reference.
            </li>
          </ul>
        </div>
      </app-list-page-body>
    </app-list-page>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
