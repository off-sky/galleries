/**
 * https://icons8.com/cssload/en/horizontal-bars
 */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item-spinner',
  template: `
    <div class="spinner-wrap">
      <div id="circleG">
        <div id="circleG_1" class="circleG"></div>
        <div id="circleG_2" class="circleG"></div>
        <div id="circleG_3" class="circleG"></div>
      </div>
    </div>
  `,
  styles: [
     `
       .spinner-wrap {
         min-height: 50px;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
       }
       
       #circleG {
         width: 34px;
         margin: auto;
       }

       .circleG {
         background-color: #d9fafa;
         float: left;
         height: 7px;
         margin-left: 4px;
         width: 7px;
         animation-name: bounce_circleG;
         -o-animation-name: bounce_circleG;
         -ms-animation-name: bounce_circleG;
         -webkit-animation-name: bounce_circleG;
         -moz-animation-name: bounce_circleG;
         animation-duration: 2.24s;
         -o-animation-duration: 2.24s;
         -ms-animation-duration: 2.24s;
         -webkit-animation-duration: 2.24s;
         -moz-animation-duration: 2.24s;
         animation-iteration-count: infinite;
         -o-animation-iteration-count: infinite;
         -ms-animation-iteration-count: infinite;
         -webkit-animation-iteration-count: infinite;
         -moz-animation-iteration-count: infinite;
         animation-direction: normal;
         -o-animation-direction: normal;
         -ms-animation-direction: normal;
         -webkit-animation-direction: normal;
         -moz-animation-direction: normal;
         border-radius: 5px;
         -o-border-radius: 5px;
         -ms-border-radius: 5px;
         -webkit-border-radius: 5px;
         -moz-border-radius: 5px;
       }

       #circleG_1 {
         animation-delay: 0.45s;
         -o-animation-delay: 0.45s;
         -ms-animation-delay: 0.45s;
         -webkit-animation-delay: 0.45s;
         -moz-animation-delay: 0.45s;
       }

       #circleG_2 {
         animation-delay: 1.05s;
         -o-animation-delay: 1.05s;
         -ms-animation-delay: 1.05s;
         -webkit-animation-delay: 1.05s;
         -moz-animation-delay: 1.05s;
       }

       #circleG_3 {
         animation-delay: 1.35s;
         -o-animation-delay: 1.35s;
         -ms-animation-delay: 1.35s;
         -webkit-animation-delay: 1.35s;
         -moz-animation-delay: 1.35s;
       }


       @keyframes bounce_circleG {
         0% {
         }

         50% {
           background-color: aqua;
         }

         100% {
         }
       }

       @-o-keyframes bounce_circleG {
         0% {
         }

         50% {
           background-color: aqua;
         }

         100% {
         }
       }

       @-ms-keyframes bounce_circleG {
         0% {
         }

         50% {
           background-color: aqua;
         }

         100% {
         }
       }

       @-webkit-keyframes bounce_circleG {
         0% {
         }

         50% {
           background-color: aqua;
         }

         100% {
         }
       }

       @-moz-keyframes bounce_circleG {
         0% {
         }

         50% {
           background-color: aqua;
         }

         100% {
         }
       }
     `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
