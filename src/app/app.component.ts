import { Component } from '@angular/core';
import {Clock} from './core/components';


@Component({
  selector: 'app-root',
  imports: [
    Clock
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
