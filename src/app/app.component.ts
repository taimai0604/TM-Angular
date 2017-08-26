import { DataService } from './data.service';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <p [@myAnimations]='state' (click)="animateMe()">i will animate</p>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
      p{
        width:200px;
        background:lightgray;
        margin: 100px auto;
        text-align:center;
        padding:20px;
        font-size:1.5em;
      }
  `],
  animations: [
    trigger('myAnimations', [
      state('small', style([{
        transform: 'scale(1)'
      }])),
      state('large', style([{
        transform: 'scale(1.2)'
      }])),
      transition('small <=> large', [animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ]))]),
    ]),
  ]
})
export class AppComponent {
  title = 'app';

  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
