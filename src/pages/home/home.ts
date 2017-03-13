import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ElementoPage } from '../elemento/elemento'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  elementoPage = ElementoPage;
}
