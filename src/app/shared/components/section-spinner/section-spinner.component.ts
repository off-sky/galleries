import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-spinner',
  template: `
    <div class="outer">
      <div class="inner">
        <svg class="loader" viewBox="0 0 100 100">
          <g class="points">
            <circle class="ciw" cx="50" cy="50" r="50" fill="#fff"  />
            <circle class="ci2" cx="5" cy="50" r="4" />
            <circle class="ci1" cx="95" cy="50" r="4" />
          </g>
        </svg>
      </div>
    </div>
    
  `,
  styles: [
      `
        .outer {
          min-height: 60vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader {
          width: 20vw;
          max-height: 90vh;
          transform-origin: 50% 50%;
          overflow: visible;
        }
        .loader .ci1 {
          fill: var(--higru);
          animation: toBig 3s infinite -1.5s;
          transform-box: fill-box;
          transform-origin: 50% 50%;
        }
        .loader .ciw {
          transform-box: fill-box;
          transform-origin: 50% 50%;
          animation: breath 3s infinite;
        }
        .loader .ci2 {
          fill: var(--higru);
          animation: toBig2 3s infinite;
          transform-box: fill-box;
          transform-origin: 50% 50%;
        }
        .points {
          animation: rot 3s infinite;
          transform-box: fill-box;
          transform-origin: 50% 50%;
        }
        @keyframes rot {
          0% {
            transform: rotate(0deg);
          }
          30% {
            transform: rotate(360deg);
          }
          50% {
            transform: rotate(360deg);
          }
          80% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes toBig {
          0% {
            transform: scale(1) translateX(0px);
          }
          30% {
            transform: scale(1) translateX(0px);
          }
          50% {
            transform: scale(10) translateX(-4.5px);
          }
          80% {
            transform: scale(10) translateX(-4.5px);
          }
          100% {
            transform: scale(1) translateX(0px);
          }
        }
        @keyframes toBig2 {
          0% {
            transform: scale(1) translateX(0px);
          }
          30% {
            transform: scale(1) translateX(0px);
          }
          50% {
            transform: scale(10) translateX(4.5px);
          }
          80% {
            transform: scale(10) translateX(4.5px);
          }
          100% {
            transform: scale(1) translateX(0px);
          }
        }
        @keyframes breath {
          15% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.1);
          }
          65% {
            transform: scale(1);
          }
          90% {
            transform: scale(1.1);
          }
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xIIzc.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          src: url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf) format('truetype');
        }
        html {
          height: 100%;
          color: #FFF;
        }
        body {
          --higru: #1A2A3A;
          font-family: Roboto, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
          background: var(--higru);
        }
        *,
        *:before,
        *:after {
          position: relative;
          box-sizing: border-box;
        }
        .dwf,
        .share {
          position: fixed;
          bottom: 4px;
          right: 10px;
          background-color: #0003;
          padding: 3px;
          border-radius: 3px;
        }
        .dwf .btn,
        .share .btn {
          color: #fff;
          text-decoration: none;
        }
        .dwf a,
        .share a {
          color: #fff;
          text-decoration: none;
        }
        .share {
          right: auto;
          left: 10px;
          border-radius: 50%;
          padding: 5px;
        }
        .share .twitter {
          width: 20px;
          fill: #fff;
          stroke: none;
          overflow: visible;
        }

      `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
